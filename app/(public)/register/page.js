
export const metadata = {
    title: 'Регистрация — WebSofa',
    description: 'Создание аккаунта клиента Timber&Grain.',
    robots: { index: false, follow: false },
    alternates: { canonical: '/register' },
    openGraph: { url: '/register' },
  };
  
  import RegisterForm from '@/components/forms/register/RegisterForm';
  
  export default function RegisterPage() {
    return (
      <section>
        <RegisterForm />
      </section>
    );
  }
  