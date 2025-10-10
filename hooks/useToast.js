'use client';

import { createContext, useContext, useMemo, useState, useCallback } from 'react';

const ToastCtx = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const show = useCallback((toast) => {
    const id = toast.id ?? Math.random().toString(36).slice(2);
    const t = { id, title: '', description: '', duration: 4000, ...toast };
    setToasts((list) => [...list, t]);
    if (t.duration) {
      setTimeout(() => {
        setToasts((list) => list.filter((x) => x.id !== id));
      }, t.duration);
    }
    return id;
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((list) => list.filter((x) => x.id !== id));
  }, []);

  const api = useMemo(() => ({ show, dismiss }), [show, dismiss]);

  return (
    <ToastCtx.Provider value={api}>
      {children}
      <div className="toast-viewport">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <div className="toast-head">
              {t.title && <div className="toast-title">{t.title}</div>}
              <button className="toast-close" onClick={() => dismiss(t.id)} aria-label="Закрыть">×</button>
            </div>
            {t.description && <div className="toast-desc">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
}
