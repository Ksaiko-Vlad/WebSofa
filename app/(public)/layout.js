import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function PublicLayout({ children }) {
  return (
    <div className="site">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
}
