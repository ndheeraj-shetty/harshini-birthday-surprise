import React from 'react';
import { motion } from 'framer-motion';
import { GameActionType } from '../types';
import { gameActions } from '../data/gameData';

interface GameControlsProps {
  onTriggerAction: (type: GameActionType) => void;
  disabled?: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onTriggerAction,
  disabled = false,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-wrap justify-center gap-2.5 sm:gap-3 p-2">
      {gameActions.map((action) => (
        <motion.button
          key={action.type}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.94 }}
          disabled={disabled}
          onClick={() => onTriggerAction(action.type)}
          className="min-h-[48px] px-4 py-2.5 rounded-2xl bg-midnight-900/80 border border-ivory-400/20 text-ivory-200 hover:text-white hover:border-gold-400/50 hover:bg-midnight-800/90 shadow-md backdrop-blur-md flex items-center gap-2 text-xs sm:text-sm font-sans tracking-wider transition-all focus:outline-none focus:ring-1 focus:ring-gold-400 select-none active:scale-95"
          aria-label={action.label}
        >
          <span className="text-base sm:text-lg">{action.emoji}</span>
          <span className="font-medium">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
};
