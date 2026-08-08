'use client';

import { motion } from 'framer-motion';

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          YOUR AI ADVANTAGE STARTS HERE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10"
        >
          Learn it. Use it. Build with it.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          href="#pricing"
          className="inline-block px-12 py-6 bg-brand-electric hover:bg-brand-blue text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect"
        >
          GET THE 100/100 PLAYBOOK
        </motion.a>
      </div>
    </section>
  );
}
