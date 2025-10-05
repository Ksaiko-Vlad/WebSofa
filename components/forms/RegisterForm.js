'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: fetch('/api/v1/auth/register', { ... })
    setTimeout(() => setLoading(false), 600);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        <span>Имя</span>
        <input name="first_name" type="text" required placeholder="Алексей" />
      </label>
      <label className="field">
        <span>Фамилия</span>
        <input name="last_name" type="text" required placeholder="Иванов" />
      </label>
      <label className="field">
        <span>E-mail</span>
        <input name="email" type="email" required placeholder="you@example.com" />
      </label>
      <label className="field">
        <span>Телефон</span>
        <input name="phone" type="tel" placeholder="+375…" />
      </label>
      <label className="field">
        <span>Пароль</span>
        <input name="password" type="password" required placeholder="••••••••" />
      </label>
      <div className="form-actions">
        <button className="btn btn-primary" disabled={loading} type="submit">
          {loading ? 'Регистрируем…' : 'Зарегистрироваться'}
        </button>
        <a className="btn btn-ghost" href="/login">У меня уже есть аккаунт</a>
      </div>
    </form>
  );
}
