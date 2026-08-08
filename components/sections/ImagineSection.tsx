'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { IMAGINE_POINTS } from '@/lib/data';

export function ImagineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-brand-navy to-brand-navy/90">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 max-w-4xl mx-auto"
        >
          IMAGINE WHAT CHANGES WHEN YOU STOP USING AI RANDOMLY.
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {IMAGINE_POINTS.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl border-l-4 border-brand-electric"
            >
              <p className="text-xl md:text-2xl">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
