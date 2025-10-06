'use client';

import { useState } from 'react';
import s from './RegisterForm.module.css';

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // TODO: fetch('/api/v1/auth/register', { ... })
    setTimeout(() => setLoading(false), 600);
  }
  
  return (
    <section className={s.wrapper}>
      <div className={s.card}>
      <h1 className={s.title}>Регистрация</h1>

    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.field}>
        <span className={s.label}>Имя</span>
        <input className={s.input} name="first_name" type="text" required placeholder="Иван" />
      </label>

      <label className={s.field}>
        <span className={s.label}>Фамилия</span>
        <input className={s.input} name="last_name" type="text" required placeholder="Иванов" />
      </label>

      <label className={s.field}>
        <span className={s.label}>Отчество</span>
        <input className={s.input} name="second_name" type="text" required placeholder="Иванович" />
      </label>

      <label className={s.field}>
        <span className={s.label}>Email</span>
        <input className={s.input} name="email" type="email" required placeholder="you@example.com" />
      </label>

      <label className={s.field}>
        <span className={s.label}>Телефон</span>
        <input className={s.input} name="phone" type="tel" placeholder="+375…" />
      </label>

      <label className={s.field}>
        <span className={s.label}>Пароль</span>
        <input className={s.input} name="password" type="password" required placeholder="••••••••" />
      </label>

</form>
</div>

      <div className={s.actions} style={{marginTop: 15}}>
        <button className="btn btn-primary" style={{marginRight: 16}} disabled={loading} type="submit">
          {loading ? 'Регистрируем…' : 'Зарегистрироваться'}
        </button>
        <a className="btn btn-ghost" href="/login">У меня уже есть аккаунт</a>
      </div>
      </section>
  );
}
