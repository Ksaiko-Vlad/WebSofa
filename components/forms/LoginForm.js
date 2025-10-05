'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: fetch('/api/v1/auth/login', { ... })
    setTimeout(() => setLoading(false), 600);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>E-mail</span>
        <input name="email" type="email" required placeholder="you@example.com" />
      </label>
      <label className="field">
        <span>Пароль</span>
        <input name="password" type="password" required placeholder="••••••••" />
      </label>
      <div className="form-actions">
        <button className="btn btn-primary" disabled={loading} type="submit">
          {loading ? 'Входим…' : 'Войти'}
        </button>
        <a className="btn btn-ghost" href="/register">Создать аккаунт</a>
      </div>
    </form>
  );
}
