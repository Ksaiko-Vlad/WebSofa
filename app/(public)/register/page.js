
export const metadata = {
    title: 'Регистрация — WebSofa',
    description: 'Создание аккаунта клиента Timber&Grain.',
    robots: { index: false, follow: false },
    alternates: { canonical: '/register' },
    openGraph: { url: '/register' },
  };
  
  import RegisterForm from '@/components/forms/RegisterForm';
  
  export default function RegisterPage() {
    return (
      <section>
        <h1 style={{fontSize: 28, fontWeight: 800, marginBottom: 12}}>Регистрация</h1>
        <RegisterForm />
      </section>
    );
  }
  