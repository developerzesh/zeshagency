"use client";

// code for pre loader




// import { ReactNode, useState, useEffect } from 'react';
// import { m, useScroll, useSpring } from 'framer-motion';
// import Lenis from 'lenis';
// import Navigation from './Navigation';
// import Footer from './Footer';
// import CustomCursor from './CustomCursor';
// import Preloader from './Preloader';
// import { CursorProvider } from './CursorContext';
// import { ThemeProvider } from './ThemeContext';

// function ScrollProgress() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
//   return (
//     <m.div style={{ scaleX }} className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-signal origin-left" />
//   );
// }

// function FilmGrain() {
//   return (
//     <div
//       className="fixed inset-0 z-[99] pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
//       style={{
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
//         backgroundRepeat: 'repeat',
//         backgroundSize: '256px 256px',
//       }}
//     />
//   );
// }

// function LayoutInner({ children, showPreloader }: { children: ReactNode; showPreloader?: boolean }) {
//   const [isLoading, setIsLoading] = useState(showPreloader !== false);

//   useEffect(() => {
//     const lenis = new Lenis({
//       lerp: 0.1,
//       wheelMultiplier: 1,
//       touchMultiplier: 1,
//       infinite: false,
//     });
//     function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   return (
//     <>
//       <ScrollProgress />
//       <FilmGrain />
//       <CustomCursor />
//       {showPreloader !== false && <Preloader onComplete={() => setIsLoading(false)} />}
//       <Navigation />
//       <main className="overflow-x-clip">{children}</main>
//       <Footer />
//     </>
//   );
// }

// export default function PageLayout({ children, showPreloader }: { children: ReactNode; showPreloader?: boolean }) {
//   return (
//     <ThemeProvider>
//       <CursorProvider>
//         <LayoutInner showPreloader={showPreloader}>{children}</LayoutInner>
//       </CursorProvider>
//     </ThemeProvider>
//   );
// }



import { ReactNode, useEffect } from 'react';
import { LazyMotion, domAnimation, m, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navigation from './Navigation';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });
  return (
    <m.div style={{ scaleX }} className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-signal origin-left" />
  );
}

function FilmGrain() {
  return (
    <div
      className="fixed inset-0 z-[99] pointer-events-none opacity-[0.035] dark:opacity-[0.06]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }}
    />
  );
}

function LayoutInner({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
    });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <ScrollProgress />
      <FilmGrain />
      <Navigation />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
    </LazyMotion>
  );
}

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutInner>{children}</LayoutInner>
    </ThemeProvider>
  );
}
