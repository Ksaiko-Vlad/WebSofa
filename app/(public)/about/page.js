export const metadata = {title: 'О нас - Websofa'};

export default function AboutPage() {
    return (
        <section style={{maxWidth: 760}}>
            <h1 style={{fontSize:28, fontWeight:800, marginBottom: 12}}>О нас</h1>
            <p className="muted">
            Мы производим и продаём мебель: диваны, кресла, пуфы и др. 
            15 магазинов по стране, собственный цех — поэтому сроки и качество под контролем.
            </p>
        </section>
    );
} 