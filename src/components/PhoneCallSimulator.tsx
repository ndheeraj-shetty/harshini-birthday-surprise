import React, { useState } from 'react';
import { Phone, PhoneOff, PhoneCall, Volume2, Mic, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/personalData';

export const PhoneCallSimulator: React.FC = () => {
  const { callerName, callList, finalRealization } = personalData.morningCalls;
  const [currentCallIndex, setCurrentCallIndex] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentCall = callList[currentCallIndex] || callList[0];

  const handleAnswer = () => {
    setIsAnswered(true);
  };

  const handleHangUp = () => {
    setIsAnswered(false);
    if (currentCallIndex < callList.length - 1) {
      setCurrentCallIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleResetCalls = () => {
    setCurrentCallIndex(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center">
      {/* Smartphone Outer Casing */}
      <div className="relative w-full aspect-[9/18.5] max-h-[640px] bg-black rounded-[48px] p-3 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-4 border-slate-800 flex flex-col overflow-hidden">
        {/* Dynamic Island / Top Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3 border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>

        {/* Screen Background */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-gradient-to-b from-midnight-900 via-midnight-950 to-wine-950/70 p-6 flex flex-col justify-between items-center text-ivory-100 z-10">
          {/* Top Status Bar */}
          <div className="w-full flex justify-between items-center text-[10px] text-ivory-400/80 pt-2 px-2 font-mono">
            <span>07:{15 + currentCallIndex * 7} AM</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <span className="w-4 h-2 rounded-sm border border-ivory-400/80 flex items-center p-0.5">
                <span className="w-full h-full bg-emerald-400 rounded-xs" />
              </span>
            </div>
          </div>

          {/* Caller Details & State */}
          <AnimatePresence mode="wait">
            {!isFinished ? (
              !isAnswered ? (
                // Incoming Call State
                <motion.div
                  key={`incoming-${currentCallIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center text-center my-auto"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(223, 183, 108, 0.4)',
                        '0 0 0 20px rgba(223, 183, 108, 0)',
                        '0 0 0 0 rgba(223, 183, 108, 0)',
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-800 to-wine-600 border-2 border-gold-400/50 flex items-center justify-center mb-4 shadow-xl"
                  >
                    <User size={40} className="text-ivory-100" />
                  </motion.div>

                  <span className="text-xs uppercase tracking-widest text-gold-400 font-sans mb-1">
                    Incoming Call • {currentCall.subtext}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-ivory-100 mb-1">
                    {callerName}
                  </h3>
                  <span className="text-xs text-ivory-400/70 font-sans">
                    Mobile • Ringing...
                  </span>
                </motion.div>
              ) : (
                // Active In-Call State
                <motion.div
                  key={`incall-${currentCallIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center text-center my-auto w-full"
                >
                  <div className="w-20 h-20 rounded-full bg-rose-900/60 border border-gold-400/40 flex items-center justify-center mb-3">
                    <PhoneCall size={32} className="text-gold-400 animate-pulse" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-ivory-100 mb-1">
                    {callerName}
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono tracking-wider mb-6">
                    00:14 • Connected
                  </span>

                  {/* Dialogue Bubble */}
                  <div className="w-full bg-midnight-800/80 border border-ivory-400/20 rounded-2xl p-4 shadow-inner text-left mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 font-sans block mb-1">
                      Bujjamma:
                    </span>
                    <p className="font-serif text-base text-ivory-100 leading-snug">
                      "{currentCall.dialogue}"
                    </p>
                  </div>

                  {/* Kanna reaction */}
                  <div className="w-full bg-wine-950/40 border border-rose-400/20 rounded-xl p-2.5 text-left">
                    <span className="text-[10px] uppercase tracking-wider text-rose-300 font-sans block">
                      Kanna:
                    </span>
                    <p className="text-xs text-ivory-300/80 italic font-sans">
                      "{currentCall.characterReaction}"
                    </p>
                  </div>
                </motion.div>
              )
            ) : (
              // All Calls Completed State
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center my-auto p-4"
              >
                <div className="w-16 h-16 rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center mb-3">
                  ✨
                </div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-sans mb-1">
                  Call Log Summary
                </span>
                <h3 className="font-serif text-xl text-ivory-100 mb-2">
                  "Okay. He's finally awake."
                </h3>
                <p className="text-xs text-ivory-300/80 leading-relaxed font-sans mb-4">
                  {finalRealization}
                </p>
                <button
                  onClick={handleResetCalls}
                  className="px-4 py-2 rounded-full text-xs bg-midnight-800 border border-ivory-400/30 text-ivory-200 hover:border-gold-400 transition-colors"
                >
                  Replay Call Siren ↻
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action Controls */}
          {!isFinished && (
            <div className="w-full pb-4">
              {!isAnswered ? (
                <div className="flex justify-around items-center w-full px-4">
                  {/* Decline button (still rings playfully) */}
                  <button
                    onClick={handleAnswer}
                    className="flex flex-col items-center gap-1 group focus:outline-none"
                    aria-label="Decline call"
                  >
                    <div className="w-14 h-14 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <PhoneOff size={22} />
                    </div>
                    <span className="text-[10px] text-ivory-400/70 font-sans">Decline</span>
                  </button>

                  {/* Answer button */}
                  <button
                    onClick={handleAnswer}
                    className="flex flex-col items-center gap-1 group focus:outline-none"
                    aria-label="Answer call"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-900/50 group-hover:scale-110 transition-transform animate-pulse">
                      <Phone size={22} />
                    </div>
                    <span className="text-[10px] text-ivory-100 font-sans font-medium">Answer</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="flex justify-around w-full opacity-60 text-ivory-300">
                    <Mic size={18} />
                    <Volume2 size={18} />
                  </div>
                  <button
                    onClick={handleHangUp}
                    className="w-full py-3 rounded-full bg-rose-600 text-white flex items-center justify-center gap-2 text-xs font-medium tracking-wide shadow-lg hover:bg-rose-700 transition-colors focus:outline-none"
                  >
                    <PhoneOff size={16} />
                    {currentCallIndex < callList.length - 1 ? 'Cut Call & Try to Sleep' : 'Ready Ayyi College ki Velta! Bye ❤️'}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Home indicator bar */}
          <div className="w-32 h-1 bg-white/30 rounded-full mb-1" />
        </div>
      </div>
    </div>
  );
};
