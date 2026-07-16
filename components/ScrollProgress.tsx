'use client';

import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const progress = document.getElementById('topProgress');
    if (!progress) return;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const width = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
      progress.style.width = width;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return null;
}
