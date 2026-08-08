'use client';

import { motion } from 'framer-motion';
import { PLAYBOOKS } from '@/lib/data';

export function PlaybooksSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-brand-navy/80 to-brand-navy">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          THE 12 PLAYBOOKS
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLAYBOOKS.map((playbook, index) => (
            <motion.div
              key={playbook.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect p-6 rounded-xl hover:border-brand-electric transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-4">{playbook.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-electric transition-colors">
                {playbook.title}
              </h3>
              <p className="text-sm text-gray-400">{playbook.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
