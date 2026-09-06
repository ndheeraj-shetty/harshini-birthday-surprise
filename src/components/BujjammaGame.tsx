import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameCharacter } from './GameCharacter';
import { GameControls } from './GameControls';
import { useGameState } from '../hooks/useGameState';
import { gameBoredomConfig } from '../data/gameData';
import { Trophy, Sparkles, RefreshCw } from 'lucide-react';

export const BujjammaGame: React.FC = () => {
  const {
    boredom,
    currentMood,
    reactionText,
    isScreenShaking,
    interactionsCount,
    easterEggUnlocked,
    triggerAction,
    resetBoredom,
  } = useGameState();

  const isBoredomZero = boredom === 0;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-6">
      {/* Top Boredom Status Meter */}
      <div className="w-full max-w-md bg-midnight-900/70 border border-ivory-400/20 rounded-2xl p-4 shadow-lg backdrop-blur-md mb-6">
        <div className="flex justify-between items-center text-xs font-sans tracking-widest uppercase mb-2">
          <span className="text-ivory-300 flex items-center gap-1.5">
            <span>BUJJAMMA'S BOREDOM</span>
            {isBoredomZero && <span className="text-gold-400">✨ Solved!</span>}
          </span>
          <span className="font-mono text-gold-400 font-bold">{boredom}%</span>
        </div>

        {/* Meter progress bar */}
        <div className="w-full h-3 bg-midnight-950 rounded-full overflow-hidden p-0.5 border border-ivory-400/10">
          <motion.div
            className={`h-full rounded-full transition-all duration-300 ${
              boredom > 50
                ? 'bg-gradient-to-r from-rose-600 to-amber-500'
                : boredom > 20
                ? 'bg-gradient-to-r from-amber-500 to-gold-400'
                : 'bg-gradient-to-r from-gold-400 to-emerald-400'
            }`}
            style={{ width: `${boredom}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] text-ivory-400/50 mt-1.5 font-sans">
          <span>Taps: {interactionsCount}</span>
          <span>Goal: Reduce to 0%</span>
        </div>
      </div>

      {/* Speech / Reaction Bubble */}
      <div className="relative min-h-[56px] flex items-center justify-center mb-2 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={reactionText}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-midnight-850/90 border border-gold-400/30 px-5 py-2.5 rounded-2xl shadow-xl backdrop-blur-md text-center max-w-sm"
          >
            <p className="font-serif text-sm sm:text-base text-ivory-100 italic">
              "{reactionText}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Avatar Stage */}
      <div className="relative w-full flex justify-center items-center my-4">
        <GameCharacter mood={currentMood} isShaking={isScreenShaking} />
      </div>

      {/* Action Controls */}
      <div className="w-full mt-2">
        <GameControls onTriggerAction={triggerAction} disabled={isBoredomZero} />
      </div>

      {/* 0% Boredom Victory Banner / Easter Egg #3 */}
      <AnimatePresence>
        {isBoredomZero && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-md mt-6 p-6 rounded-3xl bg-gradient-to-tr from-wine-950 via-midnight-900 to-midnight-800 border-2 border-gold-400 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-gold-400/20 border border-gold-400 flex items-center justify-center mb-3">
              <Trophy className="text-gold-400" size={24} />
            </div>

            <h4 className="font-serif text-xl text-ivory-100 font-medium mb-1">
              {gameBoredomConfig.easterEggBadge}
            </h4>

            <p className="font-serif text-base text-gold-300 italic mb-2">
              "{gameBoredomConfig.zeroBoredomMessage}"
            </p>

            <p className="text-xs font-sans text-ivory-300/80 mb-4 leading-relaxed">
              {gameBoredomConfig.easterEggQuote}
            </p>

            <button
              onClick={resetBoredom}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs bg-midnight-800 border border-ivory-400/30 text-ivory-200 hover:border-gold-400 transition-colors"
            >
              <RefreshCw size={12} />
              Play Again & Bully Me More
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
