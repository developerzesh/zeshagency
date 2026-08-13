"use client";

import Image from 'next/image';
import RevealText from '../../components/RevealText';
import { trustLogos } from '../../lib/data';
import { useTheme } from '../../components/ThemeContext';

export default function TrustBar() {
  const { isDark } = useTheme();
  const logos = [...trustLogos, ...trustLogos];
  return (
    <section className="relative pt-10 md:pt-14 pb-10 md:py-14 mt-4 md:mt-6 border-y border-border/80 overflow-hidden pt-390-trust">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 mb-10">
        <RevealText>
          <p className="font-lato text-[11px] tracking-[0.3em] uppercase text-signal text-center md:text-left">Retained by leading brands.</p>
        </RevealText>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 relative">
        <div className="relative w-full overflow-hidden">
          {/* Left fade-out overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, var(--color-paper) 0%, transparent 100%)',
            }}
          />
          {/* Right fade-out overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(-90deg, var(--color-paper) 0%, transparent 100%)',
            }}
          />

          <div className="flex gap-16 md:gap-24 items-center w-max marquee-track">
            {logos.map((logo, i) => {
              const isMeetstream = logo.alt === 'Meetstream';
              const isWhiteLogo = logo.alt === 'Saarthee' || logo.alt === 'Goldmine';
              const isHafsaOrSDB = logo.alt === 'Hafsa' || logo.alt === 'SDB';
              
              const logoSrc = isMeetstream
                ? (isDark ? '/client-logos/Meetstreamblack.png' : '/client-logos/Meetstream.png')
                : logo.src;

              return (
                <div key={`${logo.alt}-${i}`} className="flex items-center justify-center flex-shrink-0 w-32 h-12 md:w-44 md:h-16">
                  <Image
                    src={logoSrc}
                    alt={logo.alt}
                    width={176}
                    height={38}
                    sizes="(max-width: 768px) 128px, 176px"
                    quality={80}
                    className={`max-h-full max-w-full w-auto h-auto object-contain opacity-50 transition-all duration-500 ${isMeetstream
                        ? 'grayscale hover:opacity-100 hover:grayscale-0'
                        : isHafsaOrSDB
                          ? 'grayscale dark:invert hover:opacity-100 hover:grayscale-0 dark:hover:invert'
                          : isWhiteLogo
                            ? 'invert dark:invert-0 hover:opacity-100'
                            : 'grayscale dark:invert hover:opacity-100 hover:grayscale-0 hover:dark:invert-0'
                      }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
