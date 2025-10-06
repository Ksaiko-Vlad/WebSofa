
export const metadata = {
  title: 'Войти — WebSofa',
  description: 'Авторизация в личном кабинете Timber&Grain.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/login' },
  openGraph: { url: '/login' },
};

import LoginForm from '@/components/forms/login/LoginForm';

export default function LoginPage() {
  return (
    <section>
      <h1 style={{fontSize: 28, fontWeight: 800, marginBottom: 12, marginTop: 32}}>Вход</h1>
      <LoginForm />
    </section>
  );
}
