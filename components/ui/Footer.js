// components/Footer.js
export default function Footer() {
    return (
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-col">
            <div className="brand">Timber&Grain</div>
            <div className="muted">© {new Date().getFullYear()} Timber&Grain</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Контакты</div>
            <div className="muted">+375 (29) 180-95-30</div>
            <div className="muted">timberandgrain@gmail.com</div>
          </div>
          <div className="footer-col">
            <div className="footer-title">Навигация</div>
            <nav className="footer-links">
            <a href="/products">Каталог</a>
            <a href="/login">Войти</a>
            <a href="/contacts">О нас</a>
            </nav>
          </div>
        </div>
      </footer>
    );
  }
  