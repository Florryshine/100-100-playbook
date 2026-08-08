'use client';

import { SOCIAL_LINKS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Florryshine</h3>
            <p className="text-gray-400">Shiney Brain Academy</p>
          </div>

          <div className="flex gap-6">
            <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href={SOCIAL_LINKS.tiktok} className="text-gray-400 hover:text-white transition-colors">TikTok</a>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          © {new Date().getFullYear()} 100/100 AI Playbook. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
