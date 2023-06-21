'use client';

import Image from 'next/image';
import { Config } from '@/config';
import { Nav } from './nav';
import { useEffect, useState } from 'react';
import { useScrollDirection } from '@/presentation/hooks';

export function Header() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection('up');

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 20);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between fixed w-full h-24 px-6 py-4 z-10 bg-vampire-black/50
      backdrop-blur-sm shadow-2xl transition-all
      ${
        scrollDirection === 'up' && !scrolledToTop
          ? 'h-[74px] motion-safe:translate-y-0'
          : scrollDirection === 'down' && !scrolledToTop
          ? 'h-[74px] motion-safe:-translate-y-full'
          : ''
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto transition-all">
        <Image src="/assets/images/logo.png" width={42} height={42} alt="Ahmad Rulim" />
        <Nav menus={Config.nav} />
      </div>
    </header>
  );
}
