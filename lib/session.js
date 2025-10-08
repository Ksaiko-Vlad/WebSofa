import 'server-only';
import { cookies } from 'next/headers';
import { verifyJwt, getCookieName } from '@/lib/jwt';

export async function getSession() {
  const store = await cookies();          
  const token = store.get(getCookieName())?.value; // читаем куку
  if (!token) return null;

  try {
    const p = await verifyJwt(token);         // проверяем JWT
    return { userId: p.sub, role: p.role, email: p.email };
  } catch {
    return null;
  }
}
