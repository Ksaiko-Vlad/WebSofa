import Image from 'next/image';

export default function HomePage() {
  return (
    <section className="hero">
      <div className="card hero-card">
        <div className="hero-text">
          <h1>Мебель под ваш интерьер</h1>
          <p>
            Выбирайте ткань и цвет — мы изготовим и доставим. Можно забрать в удобном магазине.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/products">Перейти в каталог</a>
            <a className="btn btn-ghost" href="/contacts">Контакты</a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/hero.jpg"
            alt="Диван в современном интерьере"
            width={640}
            height={420}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}
