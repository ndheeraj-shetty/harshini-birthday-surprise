import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/personalData';
import { RotateCcw, Heart, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalRevealProps {
  onReplay: () => void;
}

export const FinalReveal: React.FC<FinalRevealProps> = ({ onReplay }) => {
  const { milestones, birthdayWish, subWish } = personalData.finalReveal;
  const hasCelebrated = useRef<boolean>(false);
  const [wishCount, setWishCount] = useState<number>(0);
  const [showLoveSurprise, setShowLoveSurprise] = useState<boolean>(false);

  const triggerCelebration = () => {
    // Golden & rose champagne particle bursts
    const defaults = {
      spread: 80,
      ticks: 250,
      gravity: 0.65,
      decay: 0.94,
      startVelocity: 35,
      colors: ['#dfb76c', '#f3ece1', '#dda2b0', '#c57d8f', '#ff70a6', '#ffd166'],
    };

    confetti({
      ...defaults,
      particleCount: 50,
      origin: { y: 0.7, x: 0.5 },
    });

    confetti({
      ...defaults,
      particleCount: 35,
      angle: 60,
      origin: { y: 0.75, x: 0.2 },
    });

    confetti({
      ...defaults,
      particleCount: 35,
      angle: 120,
      origin: { y: 0.75, x: 0.8 },
    });
  };

  useEffect(() => {
    if (hasCelebrated.current) return;
    hasCelebrated.current = true;
    setTimeout(() => {
      triggerCelebration();
    }, 1200);
  }, []);

  const handleMakeWish = () => {
    setWishCount((prev) => prev + 1);
    triggerCelebration();
    setShowLoveSurprise(true);
    setTimeout(() => setShowLoveSurprise(false), 3500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center my-12 px-4 relative">
      {/* Cinematic Dramatic Staggered Texts */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-serif italic text-2xl sm:text-3xl text-gold-400 font-light mb-3 tracking-wide"
      >
        Bujjamma...
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif text-lg sm:text-xl text-ivory-300/80 font-light max-w-lg mb-10"
      >
        If you ever wonder what all of this was for...
      </motion.p>

      {/* Date Milestones Flow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 my-6 p-6 sm:p-8 rounded-3xl bg-midnight-900/80 border border-ivory-400/20 backdrop-blur-xl shadow-2xl w-full max-w-3xl"
      >
        {milestones.map((m, idx) => (
          <React.Fragment key={idx}>
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl text-gold-400 font-light tracking-widest">
                {m.date}
              </span>
              <span className="font-sans text-[11px] text-ivory-400/70 uppercase tracking-wider mt-1">
                {m.label}
              </span>
            </div>
            {idx < milestones.length - 1 && (
              <span className="text-gold-400/40 text-lg hidden sm:block">→</span>
            )}
            {idx < milestones.length - 1 && (
              <span className="text-gold-400/40 text-lg sm:hidden">↓</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Continuation Promise */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.4 }}
        className="font-serif italic text-base sm:text-lg text-ivory-400/80 mb-10"
      >
        And hopefully... many more dates.
      </motion.p>

      {/* Grand Birthday Climax Showcase Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="relative w-full max-w-3xl rounded-[36px] p-8 sm:p-14 overflow-hidden border-2 border-gold-400/50 bg-gradient-to-b from-midnight-900 via-wine-950/70 to-midnight-900 shadow-[0_0_80px_rgba(223,183,108,0.25)] flex flex-col items-center my-6"
      >
        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-16 -left-16 w-56 h-56 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-900/15 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative Golden Corner Accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold-400/60 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold-400/60 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold-400/60 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold-400/60 rounded-br-lg" />

        {/* Top Floating Badge */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/40 text-gold-300 text-xs font-sans tracking-[0.25em] uppercase mb-6 shadow-inner"
        >
          <Sparkles size={13} className="text-gold-400 animate-pulse" />
          <span>CELEBRATING YOU TODAY & ALWAYS</span>
          <Sparkles size={13} className="text-gold-400 animate-pulse" />
        </motion.div>

        {/* Grand Birthday Title with Rich Neon Glow */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-ivory-100 via-gold-300 to-ivory-50 drop-shadow-[0_0_40px_rgba(223,183,108,0.6)] leading-tight">
          {birthdayWish}
        </h1>

        {/* Glowing Subtitle */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-rose-400/60" />
          <h2 className="font-serif text-2xl sm:text-4xl text-rose-300 font-normal tracking-wide flex items-center gap-2 drop-shadow-[0_0_20px_rgba(221,162,176,0.5)]">
            <span>{subWish}</span>
          </h2>
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-rose-400/60" />
        </div>

        {/* Sweet Telugu / English Romantic Dedication */}
        <p className="font-serif italic text-base sm:text-xl text-ivory-200/90 max-w-xl leading-relaxed mb-8">
          "The prettiest, cutest, and smartest girl in the world. Thank you for staying, thank you for caring, and thank you for being my Bujjamma."
        </p>

        {/* Interactive "Shower Love / Make a Wish" Button */}
        <div className="flex flex-col items-center gap-3 z-20">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleMakeWish}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 text-midnight-950 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(223,183,108,0.6)] hover:shadow-[0_0_45px_rgba(223,183,108,0.9)] transition-all flex items-center gap-2 select-none active:scale-95 cursor-pointer"
          >
            <Heart size={16} className="fill-midnight-950 animate-bounce" />
            <span>Shower Birthday Love ✨</span>
          </motion.button>

          <span className="text-[11px] text-ivory-400/60 font-sans tracking-wide">
            {wishCount > 0 ? `Sent ${wishCount} birthday wishes with love! 💖` : 'Tap button to shower birthday sparkles'}
          </span>
        </div>

        {/* Pop-up Love Surprise Note */}
        <AnimatePresence>
          {showLoveSurprise && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              className="mt-6 p-4 rounded-2xl bg-midnight-950/90 border border-gold-400/40 text-gold-300 text-sm font-serif italic max-w-md shadow-2xl"
            >
              "Nuvvu na life loki vachaka prathi roju special ga maaripoindhi Bangaram. Always yours!" ❤️
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Replay Experience Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2.2 }}
        className="mt-10"
      >
        <button
          onClick={onReplay}
          className="px-6 py-3 rounded-full bg-midnight-900 border border-ivory-400/30 text-ivory-200 text-xs font-sans tracking-widest uppercase hover:border-gold-400 hover:text-white transition-all flex items-center gap-2 shadow-xl group"
        >
          <RotateCcw size={14} className="group-hover:-rotate-180 transition-transform duration-500" />
          <span>Replay Our Universe</span>
        </button>
      </motion.div>
    </div>
  );
};
