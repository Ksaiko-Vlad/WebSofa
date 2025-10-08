
export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { registerUser } from "@/server/services/auth.service";
import { signJwt, getCookieName } from "@/lib/jwt";
import { toPlainUser } from "@/lib/bigint";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password, first_name, last_name, second_name, phone } = body || {};

        if (!email || !password) {
            return NextResponse.json({ message: 'email и password обязательны' }, { status: 400 });
        }

        const user = await registerUser({
            email,
            password,
            first_name,
            last_name,
            second_name, 
            phone,
        });

        // формируем полезную нагрузку токена
        const payload = { sub: user.id.toString(), role: user.role, email: user.email };
        const token = await signJwt(payload);

        // ответ + установка HttpOnly cookie (для сайта)
        const res = NextResponse.json({ user: toPlainUser(user), token }, { status: 201 });
        res.cookies.set(getCookieName(), token, {
            httpOnly: true,                       // защищает от JS-доступа
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,            
        });
        return res;
    } catch (e) {
        if (e.code === 'EMAIL_TAKEN') {
            return NextResponse.json({ message: e.message }, { status: 409 });
        }
        console.error('register error', e);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });

    }
}