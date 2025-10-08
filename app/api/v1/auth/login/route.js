export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import { signJwt, getCookieName } from '@/lib/jwt';
import { toPlainUser } from '@/lib/bigint';
import { loginUser } from '@/server/services/auth.service';

export async function POST(req) {
  try {
    const { email, password, phone } = await req.json();

    // Логин по email+password; phone опционален (доп.проверка)
    if (!email || !password) {
      return NextResponse.json({ message: 'email и password обязательны' }, { status: 400 });
    }

    const user = await loginUser({
      email: String(email).trim().toLowerCase(),
      password,
      phone, // опционально проверим совпадение, если передан
    });

    const payload = { sub: user.id.toString(), role: user.role, email: user.email, phone: user.phone };
    const token = await signJwt(payload);

    const res = NextResponse.json(
      { user: toPlainUser(user), token, redirect: '/account' }, // можно вернуть явный redirect
      { status: 200 }
    );

    res.cookies.set(getCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 дней
    });

    return res;
  } catch (e) {
    if (e.code === 'BAD_CREDENTIALS' || e.code === 'BAD_PASSWORD') {
      return NextResponse.json({ message: e.message }, { status: 401 });
    }
    console.error('login error', e);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
