'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { initParticlesEngine, Particles } from '@tsparticles/react';

const ParticlesBackground: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const root: HTMLElement = document.documentElement;

    const checkTheme = (): void => {
      const hasDarkClass: boolean = root.classList.contains('dark');

      if (hasDarkClass) {
        setIsDark(true);
        return;
      }

      setIsDark(false);
    };

    checkTheme();

    observerRef.current = new MutationObserver(
      (mutations: MutationRecord[]) => {
        for (const m of mutations) {
          if (m.type === 'attributes' && m.attributeName === 'class') {
            checkTheme();
            break;
          }
        }
      }
    );

    observerRef.current.observe(root, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, []);

  const isMobile: boolean =
    typeof window !== 'undefined' && window.innerWidth < 768;

  const options = useMemo<ISourceOptions>(() => {
    return {
      fullScreen: { enable: true },
      background: { color: { value: 'transparent' } },
      fpsLimit: isMobile ? 35 : 60,
      particles: {
        number: { value: isMobile ? 25 : 50 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: isMobile ? 0.3 : 0.5 },
        opacity: { value: 0.5 },
        color: {
          value: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)',
        },
        links: {
          enable: true,
          color: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)',
          distance: isMobile ? 60 : 120,
          opacity: 0.2,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: false },
        },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      detectRetina: true,
    };
  }, [isDark]);

  return <Particles id='tsparticles' options={options} />;
};

export default ParticlesBackground;
