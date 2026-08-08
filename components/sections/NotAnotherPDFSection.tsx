'use client';

import { motion } from 'framer-motion';

export function NotAnotherPDFSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-8"
        >
          THIS ISN'T JUST A BOOK.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          It's a practical system for actually using AI.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-400">ANOTHER PDF</h3>
            <ul className="space-y-3 text-gray-400">
              <li>✕ Read</li>
              <li>✕ Highlight</li>
              <li>✕ Forget</li>
              <li>✕ Done</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl border border-brand-electric"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-electric">100/100</h3>
            <ul className="space-y-3 text-white">
              <li>✓ Open</li>
              <li>✓ Follow</li>
              <li>✓ Copy</li>
              <li>✓ Customize</li>
              <li>✓ Execute</li>
              <li>✓ Build</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
