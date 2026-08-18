"use client";
import { useEffect, useState } from 'react';
import type { TocItem } from '@/lib/toc';

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: '-100px 0px -70% 0px' }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="border border-border/50 rounded-xl p-6 bg-paper/40 dark:bg-ink/10 backdrop-blur-sm">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between lg:cursor-default">
        <span className="font-lato text-[10px] tracking-[0.25em] uppercase text-signal font-semibold">Contents</span>
        <span className="lg:hidden text-text-muted text-xs">{open ? '▲' : '▼'}</span>
      </button>
      <div className={`mt-4 space-y-2 ${open ? 'block' : 'hidden lg:block'}`}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block font-lato text-[12px] transition-colors duration-500 leading-snug py-1 border-l pl-3 ${
              activeId === item.id ? 'text-signal border-signal' : 'text-text-muted hover:text-signal border-border/30 hover:border-signal'
            } ${item.level === 3 ? 'ml-3' : ''}`}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}