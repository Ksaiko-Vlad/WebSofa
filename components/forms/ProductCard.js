export default function ProductCard({ id, name, description, minPrice }) {
    const priceText = minPrice ? `от ${String(minPrice)}` : 'Цена по запросу';
    return (
      <a href={`/products/${String(id)}`} style={{
        border: '1px solid #eee', borderRadius: 12, padding: 16, display: 'block', textDecoration: 'none', color: 'inherit'
      }}>
        <div style={{fontWeight: 600, marginBottom: 4}}>{name}</div>
        {description ? <div style={{opacity: 0.7, fontSize: 14, minHeight: 40}}>{description}</div> : null}
        <div style={{marginTop: 8, fontWeight: 600}}>{priceText}</div>
      </a>
    );
  }
  