'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); 

  useEffect(() => {
    // взять текущее значение из html[data-theme]
    const current = document.documentElement.dataset.theme || 'light';
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  }

  if (!theme) return null; 

  return (
    <button className="icon-btn" onClick={toggle} aria-label="Переключить тему" title="Переключить тему">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
