import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { ToastProvider } from '@/hooks/useToast';

export default function PublicLayout({ children }) {
  return (
    <div className="site">
      <ToastProvider>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      </ToastProvider>
    </div>
  );
}
