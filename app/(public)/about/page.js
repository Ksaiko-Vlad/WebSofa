
import YandexMap from "@/components/forms/map/YandexMap";

export const metadata = {
    title: 'О нас — Timber&Grain',
    description: 'Контакты, график работы и карта магазинов.',
    alternates: { canonical: '/about' },
    openGraph: { url: '/about' },
  };
  
  const HOURS = 'Пн–Сб 10:00–20:00, Вс 10:00–18:00';
  
  // заменишь src на свой из «Конструктора карт»
  const IFRAME_SRC = 'https://yandex.ru/map-widget/v1/?um=constructor%3AВАШ_ID&source=constructor';
  
  export default function AboutPage() {
    return (
      <section className="container" style={{ display:'grid', gap:24, padding:'24px 0' }}>
  
        <div className="card" style={{ padding:16, display:'grid', gap:10, maxWidth:860 }}>
          <div style={{ fontSize:18, fontWeight:700 }}>Timber&Grain</div>
          <p className="muted">Собственное производство мягкой мебели и сеть магазинов по стране.</p>
          <div style={{ display:'grid', gap:6 }}>
            <div><b>Телефон:</b> +375 (29) 123-45-67</div>
            <div><b>E-mail:</b> info@timbergrain.by</div>
            <div><b>График:</b> {HOURS}</div>
            <div><b>Юр. адрес:</b> Минск, ул. Примерная, 1</div>
          </div>
        </div>
        <div className="card" style={{ padding:0, overflow:'hidden' }}>
        <YandexMap src={IFRAME_SRC} height={420} />
      </div>
      </section>
    );
  }
  