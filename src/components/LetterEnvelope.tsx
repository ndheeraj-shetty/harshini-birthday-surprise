import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { personalData } from '../data/personalData';

export const LetterEnvelope: React.FC = () => {
  const { letter } = personalData;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-8">
      {!isOpen ? (
        /* Sealed Envelope View */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md aspect-[16/11] bg-gradient-to-tr from-midnight-900 via-wine-950 to-midnight-800 rounded-3xl border-2 border-gold-400/40 p-6 shadow-2xl flex flex-col items-center justify-between overflow-hidden cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          {/* Envelope geometric fold lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <polyline points="0 0, 50% 55%, 100% 0" fill="none" stroke="#dfb76c" strokeWidth="1.5" />
            <polyline points="0 100%, 50% 55%, 100% 100%" fill="none" stroke="#dfb76c" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Top greeting banner */}
          <div className="relative z-10 text-center pt-2">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold-400">
              Private Delivery • For Her Eyes Only
            </span>
          </div>

          {/* Golden Wax Seal */}
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-20 w-16 h-16 rounded-full bg-gradient-to-tr from-rose-700 via-wine-600 to-rose-800 border-2 border-gold-400 flex items-center justify-center shadow-[0_0_20px_rgba(223,183,108,0.5)] cursor-pointer"
          >
            <span className="font-serif font-bold text-2xl text-gold-200">B</span>
          </motion.div>

          {/* Open Button Target */}
          <div className="relative z-10 pb-2 flex flex-col items-center gap-1">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-2 rounded-full bg-gold-400 text-midnight-950 font-sans text-xs font-semibold tracking-widest uppercase hover:bg-gold-300 transition-all shadow-lg flex items-center gap-2 group-hover:scale-105"
            >
              <Mail size={14} />
              <span>OPEN</span>
            </button>
            <span className="text-[10px] text-ivory-400/60 font-sans tracking-wider">
              Tap wax seal or button to open
            </span>
          </div>
        </motion.div>
      ) : (
        /* Unfolded Letter Parchment */
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-3xl border border-ivory-400/30 p-8 sm:p-12 md:p-14 shadow-2xl bg-gradient-to-b from-[#fdfbf7] via-[#f7f2ea] to-[#efe6d8] text-midnight-950 overflow-hidden"
        >
          {/* Paper vintage grain texture overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Top Letter Header */}
          <div className="flex justify-between items-baseline border-b border-stone-300/80 pb-4 mb-8">
            <span className="font-serif italic text-sm text-stone-500">
              {letter.date}
            </span>
            <div className="flex items-center gap-1 text-rose-800">
              <Heart size={14} fill="#9f1239" />
              <span className="font-handwriting text-lg font-bold">Forever Us</span>
            </div>
          </div>

          {/* Greeting */}
          <h3 className="font-handwriting text-3xl sm:text-4xl text-stone-900 font-bold mb-6">
            {letter.greeting}
          </h3>

          {/* Multiline Letter Content */}
          <div className="font-handwriting text-xl sm:text-2xl text-stone-800 leading-relaxed sm:leading-loose whitespace-pre-line tracking-wide">
            {letter.content}
          </div>

          {/* Letter Closing & Signature */}
          <div className="mt-10 pt-6 border-t border-stone-300/80 flex flex-col items-end">
            <span className="font-serif italic text-base text-stone-600 mb-1">
              {letter.closing}
            </span>
            <span className="font-handwriting text-3xl sm:text-4xl font-bold text-stone-900">
              {letter.signature}
            </span>
          </div>

          {/* Re-fold Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs font-sans tracking-wider text-stone-500 hover:text-stone-800 transition-colors underline underline-offset-4"
            >
              Fold Letter & Put Back into Envelope
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
