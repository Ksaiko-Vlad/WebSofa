'use client';

import { useState } from 'react';
import s from './LoginForm.module.css';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: fetch('/api/v1/auth/login', { ... })
    setTimeout(() => setLoading(false), 600);
  }

  return (
    <section className={s.wrapper}>
      <div className={s.card}>
        <h1 className={s.title}>Вход</h1>

        <form className={s.form} onSubmit={onSubmit}>
          <label className={s.field}>
            <span className={s.label}>E-mail</span>
            <input className={s.input} name="email" type="email" required placeholder="you@example.com" />
          </label>

          <label className={s.field}>
            <span className={s.label}>Телефон</span>
            <input className={s.input} name="phone" type="tel" placeholder="+375…" />
          </label>

          <label className={s.field}>
            <span className={s.label}>Пароль</span>
            <input className={s.input} name="password" type="password" required placeholder="••••••••"/>
          </label>

        </form>
      </div>

      <div className={s.actions} style={{ marginTop: 16 }}>
        <button className="btn btn-primary" style={{ marginRight: 16 }} disabled={loading}> {loading ? 'Входим…' : 'Войти'} </button>
        <a className="btn btn-ghost" href="/register">Создать аккаунт</a>
      </div>

    </section>
  );
}
