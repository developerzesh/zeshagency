import type { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import { slugify } from '@/lib/toc';

export const ptComponents: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text = value.children?.map((c: any) => c.text).join('') || '';
      return (
        <h2 id={slugify(text)} className="font-syne text-2xl md:text-3xl font-800 tracking-tight text-ink mb-4 mt-12 scroll-mt-32">
          {children}<span className="text-signal">.</span>
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const text = value.children?.map((c: any) => c.text).join('') || '';
      return (
        <h3 id={slugify(text)} className="font-syne text-xl md:text-2xl font-800 tracking-tight text-ink mb-3 mt-10 scroll-mt-32">
          {children}
        </h3>
      );
    },
    normal: ({ children }) => (
      <p className="font-lato text-base md:text-[17px] text-text-secondary leading-[1.9] mb-8">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <div className="border-l-4 border-signal bg-signal/5 px-6 py-5 rounded-r-xl my-8">
        <p className="font-lato text-base text-ink leading-[1.85] italic">{children}</p>
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-3 mb-6 pl-1">{children}</ul>,
    number: ({ children }) => <ol className="space-y-3 mb-6 pl-5 list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0" />
        <span className="font-lato text-base text-text-secondary leading-[1.85]">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="font-lato text-base text-text-secondary leading-[1.85]">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-signal underline underline-offset-2 hover:text-ink transition-colors duration-500"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  types: {
    image: ({ value }) => (
      <div className="my-10 rounded-xl overflow-hidden border border-border/40">
        <img src={urlFor(value).width(1200).url()} alt={value.alt || ''} className="w-full h-auto" />
      </div>
    ),
  },
};