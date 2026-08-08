'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const questions = [
  "What should I ask ChatGPT?",
  "Which AI tool should I use?",
  "How do I study with AI?",
  "Can AI help with my project?",
  "How do I use AI to make money?",
  "What prompt should I write?",
];

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="problem" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          AI isn't the problem.
        </motion.h2>

        <div className="relative h-[400px] mb-16">
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: Math.random() * 200 - 100, y: Math.random() * 200 - 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="absolute left-1/2 top-1/2 glass-effect px-6 py-3 rounded-full text-sm md:text-base whitespace-nowrap"
              style={{
                transform: `translate(-50%, -50%) rotate(${(i * 47) % 30 - 15}deg)`,
              }}
            >
              {q}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            THE PROBLEM IS NOT HAVING A SYSTEM.
          </h3>
          <p className="text-2xl md:text-4xl gradient-text font-bold">
            MEET 100/100.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
