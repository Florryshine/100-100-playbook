"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { CinematicIntro } from "@/components/sections/CinematicIntro";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { CoreSystemSection } from "@/components/sections/CoreSystemSection";
import { NotAnotherPDFSection } from "@/components/sections/NotAnotherPDFSection";
import { PlaybooksSection } from "@/components/sections/PlaybooksSection";
import { VaultsSection } from "@/components/sections/VaultsSection";
import { ImagineSection } from "@/components/sections/ImagineSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";
import { AudioControl } from "@/components/ui/AudioControl";
import { MobileCTA } from "@/components/ui/MobileCTA";

const ThreeHero = dynamic(() => import("@/components/3d/ThreeHero"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full bg-brand-navy flex items-center justify-center">
      <div className="animate-pulse text-brand-electric text-xl">Loading 3D Experience...</div>
    </div>
  ),
});

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="min-h-screen bg-brand-navy text-white overflow-x-hidden">
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro 
            onComplete={() => {
              setShowIntro(false);
              setIntroComplete(true);
            }}
            onSkip={() => {
              setShowIntro(false);
              setIntroComplete(true);
            }}
          />
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          <AudioControl 
            enabled={audioEnabled} 
            onToggle={() => setAudioEnabled(!audioEnabled)} 
          />
          
          <Suspense fallback={
            <div className="h-screen w-full bg-brand-navy flex items-center justify-center">
              <div className="animate-pulse text-brand-electric text-xl">Loading...</div>
            </div>
          }>
            <HeroSection />
          </Suspense>

          <ProblemSection />
          <CoreSystemSection />
          <NotAnotherPDFSection />
          <PlaybooksSection />
          <VaultsSection />
          <ImagineSection />
          <OfferSection />
          <PricingSection />
          <FinalCTASection />
          <Footer />
          
          <MobileCTA />
        </>
      )}
    </main>
  );
}
