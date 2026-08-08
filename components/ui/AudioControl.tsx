'use client';

import { useEffect, useRef } from 'react';

interface AudioControlProps {
  enabled: boolean;
  onToggle: () => void;
}

// PLACEHOLDER: swap for a real ambient/background track at public/audio/ambient.mp3
const AUDIO_SRC = '/audio/ambient.mp3';

export function AudioControl({ enabled, onToggle }: AudioControlProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled) {
      // Placeholder track may not exist yet — fail silently instead of throwing.
      audio.play().catch(() => {
        console.warn('[AudioControl] No audio file found at', AUDIO_SRC);
      });
    } else {
      audio.pause();
    }
  }, [enabled]);

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />
      <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 glass-effect rounded-full hover:bg-white/20 transition-all"
      aria-label={enabled ? "Turn off sound" : "Turn on sound"}
    >
      {enabled ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 10l4-4m0 0l-4-4m4 4H3" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      )}
      <span className="sr-only">{enabled ? "Sound On" : "Sound Off"}</span>
    </button>
    </>
  );
}
