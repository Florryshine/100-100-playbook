'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CORE_STAGES } from '@/lib/data';

export function CoreSystemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const stage = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-brand-navy to-brand-navy/80">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-20"
        >
          ONE SYSTEM. FOUR DIRECTIONS.
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {CORE_STAGES.map((stageItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl font-bold gradient-text mb-4">{stageItem.number}</div>
              <h3 className="text-2xl font-bold mb-2">{stageItem.title}</h3>
              <p className="text-gray-400">{stageItem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-3xl md:text-5xl font-bold gradient-text">100/100</p>
        </motion.div>
      </div>
    </section>
  );
}
