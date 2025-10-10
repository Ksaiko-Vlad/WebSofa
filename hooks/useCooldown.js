'use client';

import { useCallback, useEffect, useState } from "react";

export function useCooldown(defaultSeconds = 5) {
    const [until, setUntil] = useState(0); // timestamp
    const [left, setLeft] = useState(0);


    const start = useCallback((sec = defaultSeconds) => {
        const u = Date.now() + sec * 1000;
        setUntil(u);
        setLeft(sec);
      }, [defaultSeconds]);

useEffect(() => {
    if (!until) return;
    const id = setInterval(() =>{
        const remain = Math.max(0, Math.ceil((until - Date.now()) / 1000));
        setLeft(remain);
        if (remain === 0) { clearInterval(id); setUntil(0); }
    }, 250);
    return () => clearInterval(id);
}, [until]);

return { active: until > 0, left, start };

}