import './globals.css';

export const metadata = {
  title: 'WebSofa',
  description: 'Каталог мебели',
};

const themeInit = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.dataset.theme = t;
    } else {
      var m = window.matchMedia('(prefers-color-scheme: dark)');
      document.documentElement.dataset.theme = m.matches ? 'dark' : 'light';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
