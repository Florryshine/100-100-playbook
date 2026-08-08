'use client';

import { motion } from 'framer-motion';

export function OfferSection() {
  const items = [
    { title: "12 AI PLAYBOOKS", icon: "📚" },
    { title: "6 BONUS VAULTS", icon: "🔓" },
    { title: "5,000+ PROMPTS", icon: "⌨️" },
    { title: "TEMPLATES + WORKFLOWS + RESOURCES", icon: "🛠️" },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          EVERYTHING YOU NEED TO START USING AI PROPERLY.
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
