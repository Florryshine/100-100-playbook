'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeHero = dynamic(() => import('@/components/3d/ThreeHero'), { ssr: false });

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-10 pointer-events-none"
      />
      
      <div className="absolute inset-0 z-0">
        <ThreeHero />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block">DON'T JUST USE AI.</span>
          <span className="block gradient-text">LEARN HOW TO USE IT.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          100/100 is the practical AI playbook system for students who want to learn faster, 
          get things done, build real skills and turn those skills into opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="px-8 py-4 bg-brand-electric hover:bg-brand-blue text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect"
          >
            GET THE 100/100 PLAYBOOK
          </a>
          <a
            href="#problem"
            className="px-8 py-4 glass-effect hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
          >
            EXPLORE THE SYSTEM ↓
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 text-sm"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
