import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Lock, Unlock, Heart, Sparkles, X, KeyRound } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import confetti from 'canvas-confetti';

interface EasterEggProps {
  isWebsiteCompleted?: boolean;
}

export const EasterEggController: React.FC<EasterEggProps> = ({ isWebsiteCompleted = false }) => {
  const [dontClickCount, setDontClickCount] = useLocalStorage<number>('bujjamma_dont_click_taps', 0);
  const [showDontClickModal, setShowDontClickModal] = useState<boolean>(false);
  const [showVaultModal, setShowVaultModal] = useState<boolean>(false);

  // Vault Lock State
  const [isVaultUnlocked, setIsVaultUnlocked] = useLocalStorage<boolean>('bujjamma_vault_unlocked', false);
  const [passcodeAttempt, setPasscodeAttempt] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const handleDontClick = () => {
    setDontClickCount((prev) => prev + 1);
    setShowDontClickModal(true);
  };

  const handleUnlockAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanAttempt = passcodeAttempt.trim().toLowerCase();

    if (cleanAttempt === 'dharsh') {
      setIsVaultUnlocked(true);
      setErrorMessage('');

      // Confetti celebration
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#dfb76c', '#dda2b0', '#c57d8f', '#ff70a6'],
      });
    } else {
      setIsShaking(true);
      setErrorMessage('Tappu bangaram! Correct special name gurthu chesuko 😉');
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <>
      {/* Floating Easter Egg triggers container */}
      <div className="w-full flex flex-wrap justify-center items-center gap-4 py-8 z-30">
        {/* Easter Egg #2: "DON'T CLICK" Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleDontClick}
          className="px-4 py-1.5 rounded-full bg-rose-950/40 border border-rose-800/40 text-rose-300 text-[11px] font-sans tracking-wider uppercase hover:border-rose-500 transition-all flex items-center gap-1.5"
        >
          <AlertCircle size={12} />
          <span>DON'T CLICK</span>
        </motion.button>

        {/* Easter Egg #4: Secret Memory Vault */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => {
            setShowVaultModal(true);
            setErrorMessage('');
            setPasscodeAttempt('');
          }}
          className="px-4 py-1.5 rounded-full bg-gold-950/50 border border-gold-400/80 text-gold-300 text-[11px] font-sans tracking-wider uppercase hover:bg-gold-900/70 transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(223,183,108,0.25)] animate-pulse"
        >
          {isVaultUnlocked ? <Unlock size={12} className="text-emerald-400" /> : <Lock size={12} />}
          <span>{isVaultUnlocked ? 'SECRET MEMORY VAULT (UNLOCKED)' : 'SECRET MEMORY VAULT 🔒'}</span>
        </motion.button>
      </div>

      {/* "DON'T CLICK" Modal */}
      <AnimatePresence>
        {showDontClickModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowDontClickModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-midnight-900 border border-rose-500/40 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDontClickModal(false)}
                className="absolute top-4 right-4 text-ivory-400/60 hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="w-14 h-14 rounded-full bg-rose-900/40 border border-rose-500/50 flex items-center justify-center mx-auto mb-4 text-rose-300">
                <AlertCircle size={28} />
              </div>

              <h4 className="font-serif text-xl sm:text-2xl text-ivory-100 font-medium mb-3 leading-snug">
                "nenu click cheyyadu ani cheppina kuda click chesaav kadha. asalu na maata antae lekka ledu"
              </h4>

              <div className="my-5 p-4 rounded-2xl bg-midnight-950/80 border border-gold-400/30 shadow-inner">
                <p className="font-serif italic text-sm text-gold-400/90 mb-2">
                  sarle neeku oka vishayam cheppali....
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-gold-300 to-rose-400 font-bold tracking-wide">
                  love u so much bujji bangaram ❤️
                </p>
              </div>

              <button
                onClick={() => setShowDontClickModal(false)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-wine-700 to-rose-700 text-white text-xs font-sans tracking-wider uppercase hover:opacity-90 transition-opacity shadow-lg"
              >
                Love You Too ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Memory Vault Modal (With Question & Lock) */}
      <AnimatePresence>
        {showVaultModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
            onClick={() => setShowVaultModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-midnight-900 border-2 border-gold-400 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center relative shadow-[0_0_60px_rgba(223,183,108,0.35)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVaultModal(false)}
                className="absolute top-4 right-4 text-ivory-400/60 hover:text-white"
              >
                <X size={18} />
              </button>

              {!isVaultUnlocked ? (
                /* LOCKED STATE: QUESTION & PASSCODE PROMPT */
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400/20 border-2 border-gold-400 flex items-center justify-center mx-auto mb-4 text-gold-400 shadow-[0_0_20px_rgba(223,183,108,0.3)]">
                    <Lock size={30} />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-sans block mb-1">
                    Passcode Protected Vault
                  </span>

                  <h4 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-light mb-2">
                    Security Question
                  </h4>

                  {/* The User's Question */}
                  <div className="p-4 rounded-2xl bg-midnight-950/80 border border-gold-400/30 w-full my-4">
                    <p className="font-serif italic text-lg sm:text-xl text-gold-300">
                      "what is the special name we both have?"
                    </p>
                  </div>

                  {/* Passcode Form */}
                  <form onSubmit={handleUnlockAttempt} className="w-full max-w-sm flex flex-col items-center gap-3">
                    <div className={`w-full relative transition-transform ${isShaking ? 'animate-bounce' : ''}`}>
                      <input
                        type="text"
                        value={passcodeAttempt}
                        onChange={(e) => {
                          setPasscodeAttempt(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder="Type our special name..."
                        className="w-full px-4 py-3 rounded-xl bg-midnight-950 border border-ivory-400/30 text-center font-sans text-sm text-ivory-100 placeholder:text-ivory-400/40 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                        autoFocus
                      />
                    </div>

                    {errorMessage && (
                      <p className="text-xs text-rose-400 font-sans tracking-wide animate-pulse">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-400 text-midnight-950 text-xs font-sans font-bold tracking-widest uppercase hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <KeyRound size={14} />
                      <span>Unlock Vault</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* UNLOCKED STATE: THE SECRET MEMORY CONTENT */
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.35)]">
                    <Unlock size={32} />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-sans block mb-1">
                    Vault Unlocked • DHARSH Forever ✨
                  </span>

                  <h4 className="font-serif text-3xl text-ivory-100 font-light mb-3">
                    Our Secret Sanctuary
                  </h4>

                  <p className="font-serif text-base text-ivory-200/90 italic leading-relaxed mb-6">
                    "Thank you for being my Dharsh, my Bujjamma, and my whole world.
                    No matter how many miles stand between us today, tomorrow belongs to us."
                  </p>

                  <div className="p-4 rounded-2xl bg-midnight-950 border border-ivory-400/15 mb-6 text-left w-full">
                    <div className="flex items-center gap-2 text-gold-400 text-xs font-sans tracking-wide uppercase mb-1">
                      <Heart size={14} className="fill-gold-400" />
                      <span>The Final Promise</span>
                    </div>
                    <p className="text-xs text-ivory-300/80 font-sans leading-relaxed">
                      I promise to wake up on the first call one day, to never let misunderstandings win, to walk every inch of Hyderabad with you, and to love you more with every passing sunrise.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowVaultModal(false)}
                      className="px-6 py-2.5 rounded-full bg-gold-400 text-midnight-950 text-xs font-sans font-semibold tracking-wider uppercase hover:bg-gold-300 transition-colors"
                    >
                      Hold This Memory Close
                    </button>

                    <button
                      onClick={() => {
                        setIsVaultUnlocked(false);
                        setPasscodeAttempt('');
                      }}
                      className="px-4 py-2.5 rounded-full bg-midnight-800 border border-ivory-400/20 text-ivory-400 text-xs font-sans hover:text-ivory-200 transition-colors"
                      title="Lock the vault again"
                    >
                      Lock 🔒
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
