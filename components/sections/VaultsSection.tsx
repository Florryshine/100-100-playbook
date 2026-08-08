'use client';

import { motion } from 'framer-motion';
import { VAULTS } from '@/lib/data';

export function VaultsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-8"
        >
          THEN THERE'S THE VAULT.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16"
        >
          6 VAULTS UNLOCKED.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {VAULTS.map((vault, index) => (
            <motion.div
              key={vault.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-2xl text-center hover:border-brand-orange transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-electric to-brand-orange" />
              <div className="text-5xl mb-4">{vault.icon}</div>
              <h3 className="text-xl font-bold mb-2">{vault.title}</h3>
              <p className="text-sm text-gray-400">{vault.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
