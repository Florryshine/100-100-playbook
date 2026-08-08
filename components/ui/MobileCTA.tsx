'use client';

import { useEffect, useState } from 'react';

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a
        href="#pricing"
        className="block w-full px-6 py-4 bg-brand-electric text-white font-bold rounded-lg text-center shadow-lg glow-effect"
      >
        GET 100/100 →
      </a>
    </div>
  );
}
