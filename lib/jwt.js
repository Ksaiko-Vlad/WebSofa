import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const expires = process.env.JWT_EXPIRES_IN || '7d';
const cookieName = process.env.AUTH_COOKIE || 'auth_token';

export function getCookieName (){
    return cookieName;

}

export async function signJwt(payload) {
    return await new SignJWT(payload)
    .setProtectedHeader ({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(secret);
}

export async function verifyJwt(token) {
    const {payload } = await jwtVerify(token, secret, {algorithms: ['HS256'] });
    return payload;
}