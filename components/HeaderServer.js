import { getSession } from '@/lib/session';
import HeaderClient from './ui/Header';

export default async function HeaderServer() {
  const session = await getSession(); // читаем HttpOnly cookie на сервере
  return <HeaderClient session={session} />;
}
