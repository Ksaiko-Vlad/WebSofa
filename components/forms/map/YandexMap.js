'use client';

export default function YandexMap({ src, height = 420 }) {
  return (
    <div style={{ width:'100%', height }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border:0 }}
        frameBorder="0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
