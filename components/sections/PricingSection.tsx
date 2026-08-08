'use client';

import { motion } from 'framer-motion';
import { PRICING } from '@/lib/data';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-brand-navy/90 to-brand-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8">
            <p className="text-gray-400 line-through text-xl">
              {PRICING.currency}{PRICING.oldPrice.toLocaleString()}+
            </p>
            <p className="text-6xl md:text-8xl font-bold gradient-text">
              {PRICING.currency}{PRICING.currentPrice.toLocaleString()}
            </p>
          </div>

          <a
            href="#"
            className="inline-block px-12 py-6 bg-brand-electric hover:bg-brand-blue text-white text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect mb-6"
          >
            GET 100/100 NOW
          </a>

          <p className="text-gray-400 text-sm">
            Instant access • Digital product • Start immediately
          </p>
        </motion.div>
      </div>
    </section>
  );
}
