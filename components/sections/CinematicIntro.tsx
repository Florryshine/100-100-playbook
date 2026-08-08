'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
  onSkip: () => void;
}

export function CinematicIntro({ onComplete, onSkip }: CinematicIntroProps) {
  const [step, setStep] = useState(0);
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (prefersReducedMotion) {
      setTimeout(onComplete, 100);
      return;
    }

    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 4000),
      setTimeout(() => setStep(4), 6000),
      setTimeout(onComplete, 7500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete, prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <button
        onClick={onSkip}
        className="absolute top-8 right-8 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
      >
        Skip intro →
      </button>

      <div className="text-center px-4">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="point"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="w-2 h-2 bg-brand-electric rounded-full mx-auto glow-effect"
            />
          )}

          {step >= 1 && step < 4 && (
            <motion.p
              key={	ext-\}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-light text-white"
            >
              {step === 1 && "AI is everywhere."}
              {step === 2 && "But knowing how to use it..."}
              {step === 3 && "...is a different skill."}
            </motion.p>
          )}

          {step >= 4 && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-bold gradient-text"
            >
              100/100
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
