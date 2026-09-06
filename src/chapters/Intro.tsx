import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Sparkles, Music } from 'lucide-react';
import { personalData } from '../data/personalData';

interface IntroProps {
  onEnter: () => void;
  isStarted: boolean;
  isPlaying?: boolean;
  onStartAudio?: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onEnter, isPlaying, onStartAudio }) => {
  const [step, setStep] = useState<number>(0);

  // Staggered reveal of intro sentences
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000);
    const timer2 = setTimeout(() => setStep(2), 2600);
    const timer3 = setTimeout(() => setStep(3), 4200);
    const timer4 = setTimeout(() => setStep(4), 5800);
    const timer5 = setTimeout(() => setStep(5), 7200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  const handleSectionClick = () => {
    if (!isPlaying && onStartAudio) {
      onStartAudio();
    }
  };

  return (
    <section
      id="intro"
      onClick={handleSectionClick}
      className="relative w-full min-h-[100svh] flex flex-col justify-center items-center px-6 text-center z-20 bg-midnight-950 overflow-hidden cursor-pointer"
    >
      {/* Central Pulsing Particle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_20px_#dfb76c] mb-12"
      />

      <div className="max-w-xl flex flex-col items-center min-h-[220px] justify-center">
        {step >= 1 && (
          <motion.h2
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-6 tracking-wide"
          >
            Hey, {personalData.her.nickname}...
          </motion.h2>
        )}

        {step >= 2 && (
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2 }}
            className="font-serif italic text-xl sm:text-2xl text-ivory-300/80 mb-3"
          >
            I made a little something for you.
          </motion.p>
        )}

        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2 }}
            className="font-sans text-sm sm:text-base text-ivory-400/70 font-light tracking-wide mb-3"
          >
            It isn't just a birthday webpage.
          </motion.p>
        )}

        {step >= 4 && (
          <motion.p
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2 }}
            className="font-serif text-2xl sm:text-3xl text-gold-400/90 font-normal tracking-wide"
          >
            It's our little world.
          </motion.p>
        )}

        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-6 flex items-center gap-2 text-[11px] font-sans"
          >
            {isPlaying ? (
              <span className="flex items-center gap-2 text-ivory-400/70">
                <Music size={12} className="text-gold-400 animate-bounce" />
                <span>Nuvvena • Anand</span>
              </span>
            ) : (
              <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-midnight-900/60 text-gold-300/90 hover:border-gold-400/60 transition-all shadow-[0_0_15px_rgba(223,183,108,0.15)]">
                <Music size={12} className="text-gold-400 animate-pulse" />
                <span>Tap anywhere to start song 🎵</span>
              </span>
            )}
          </motion.div>
        )}
      </div>

      {/* Enter Action Button */}
      {step >= 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            onClick={onEnter}
            className="px-8 py-3 rounded-full bg-gold-400 text-midnight-950 font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold-300 hover:shadow-[0_0_30px_rgba(223,183,108,0.5)] transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <Sparkles size={14} />
            <span>ENTER</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-ivory-400/50 font-sans tracking-wider mt-2">
            <Headphones size={13} />
            <span>Use headphones. And don't rush.</span>
          </div>
        </motion.div>
      )}
    </section>
  );
};
