import React from 'react';
import { motion } from 'framer-motion';
import { CharacterMood } from '../types';

interface GameCharacterProps {
  mood: CharacterMood;
  isShaking: boolean;
}

export const GameCharacter: React.FC<GameCharacterProps> = ({ mood, isShaking }) => {
  return (
    <div
      className={`relative w-48 h-56 sm:w-56 sm:h-64 flex flex-col items-center justify-center transition-transform ${
        isShaking ? 'animate-bounce' : ''
      }`}
    >
      {/* Floating Mood Particles */}
      {mood === 'sleeping' && (
        <motion.div
          animate={{ y: [-5, -25], opacity: [0, 1, 0], x: [0, 10] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute -top-4 right-6 text-xl font-mono text-ivory-300 font-bold pointer-events-none"
        >
          Zzz...
        </motion.div>
      )}

      {mood === 'blushing' && (
        <motion.div
          animate={{ y: [-5, -30], opacity: [0, 1, 0], scale: [0.8, 1.2] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute -top-4 text-2xl pointer-events-none"
        >
          💖
        </motion.div>
      )}

      {mood === 'nervous' && (
        <motion.div
          animate={{ y: [0, 10], opacity: [0.8, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="absolute top-8 right-8 text-lg pointer-events-none"
        >
          💧
        </motion.div>
      )}

      {/* Stylized Cartoon Vector Character */}
      <motion.svg
        viewBox="0 0 200 240"
        className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
        animate={{
          y: mood === 'neutral' ? [0, -6, 0] : mood === 'knocked' ? [0, 15, -5, 0] : 0,
          rotate: mood === 'knocked' ? [-10, 12, -6, 0] : mood === 'hugging' ? [0, -3, 3, 0] : 0,
        }}
        transition={{
          y: { repeat: mood === 'neutral' ? Infinity : 0, duration: 2.5, ease: 'easeInOut' },
          rotate: { duration: 0.5 },
        }}
      >
        <defs>
          <linearGradient id="bodySkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7d5b8" />
            <stop offset="100%" stopColor="#eec19f" />
          </linearGradient>
          <linearGradient id="hoodieGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2b3346" />
            <stop offset="100%" stopColor="#181d28" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="100" cy="225" rx="55" ry="10" fill="rgba(0,0,0,0.35)" />

        {/* Torso / Hoodie */}
        <motion.path
          d="M 65 140 C 50 160 45 210 50 220 L 150 220 C 155 210 150 160 135 140 Z"
          fill="url(#hoodieGrad)"
          stroke="#3d475f"
          strokeWidth="2"
        />

        {/* Hoodie Strings */}
        <line x1="90" y1="145" x2="88" y2="175" stroke="#e5d9c6" strokeWidth="2" strokeLinecap="round" />
        <line x1="110" y1="145" x2="112" y2="175" stroke="#e5d9c6" strokeWidth="2" strokeLinecap="round" />

        {/* Arms / Hands */}
        {mood === 'hugging' ? (
          // Arms wrapped around
          <g>
            <path d="M 50 155 C 30 145 60 190 95 180" fill="none" stroke="#2b3346" strokeWidth="12" strokeLinecap="round" />
            <path d="M 150 155 C 170 145 140 190 105 180" fill="none" stroke="#2b3346" strokeWidth="12" strokeLinecap="round" />
            <circle cx="95" cy="180" r="8" fill="url(#bodySkin)" />
            <circle cx="105" cy="180" r="8" fill="url(#bodySkin)" />
          </g>
        ) : mood === 'embarrassed' ? (
          // Covering face
          <g>
            <path d="M 55 160 Q 65 110 85 95" fill="none" stroke="#2b3346" strokeWidth="12" strokeLinecap="round" />
            <path d="M 145 160 Q 135 110 115 95" fill="none" stroke="#2b3346" strokeWidth="12" strokeLinecap="round" />
            <circle cx="85" cy="95" r="9" fill="url(#bodySkin)" />
            <circle cx="115" cy="95" r="9" fill="url(#bodySkin)" />
          </g>
        ) : (
          // Relaxed arms
          <g>
            <path d="M 60 150 C 45 170 50 195 55 205" fill="none" stroke="#2b3346" strokeWidth="10" strokeLinecap="round" />
            <path d="M 140 150 C 155 170 150 195 145 205" fill="none" stroke="#2b3346" strokeWidth="10" strokeLinecap="round" />
            <circle cx="55" cy="205" r="7" fill="url(#bodySkin)" />
            <circle cx="145" cy="205" r="7" fill="url(#bodySkin)" />
          </g>
        )}

        {/* Head */}
        <circle cx="100" cy="90" r="48" fill="url(#bodySkin)" />

        {/* Hair (messy boyish cut) */}
        <path
          d="M 50 85 C 45 45 80 40 100 40 C 125 40 155 45 150 85 C 145 60 130 52 100 52 C 70 52 55 60 50 85 Z"
          fill="#1c1613"
        />
        <path d="M 65 60 Q 80 75 95 62" fill="#1c1613" />
        <path d="M 95 62 Q 115 78 135 60" fill="#1c1613" />

        {/* Eyes based on mood */}
        {mood === 'sleeping' ? (
          // Sleeping curved closed eyes
          <g stroke="#2b1f1a" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M 75 92 Q 85 99 95 92" />
            <path d="M 105 92 Q 115 99 125 92" />
          </g>
        ) : mood === 'knocked' ? (
          // Dizzy cross eyes
          <g stroke="#2b1f1a" strokeWidth="3" strokeLinecap="round">
            <line x1="77" y1="87" x2="89" y2="99" />
            <line x1="89" y1="87" x2="77" y2="99" />
            <line x1="111" y1="87" x2="123" y2="99" />
            <line x1="123" y1="87" x2="111" y2="99" />
          </g>
        ) : mood === 'blushing' || mood === 'hugging' || mood === 'smiling' ? (
          // Happy squinting curves
          <g stroke="#2b1f1a" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M 77 96 Q 85 88 93 96" />
            <path d="M 107 96 Q 115 88 123 96" />
          </g>
        ) : (
          // Normal open eyes looking forward
          <g fill="#1c1613">
            <circle cx="85" cy="92" r="5" />
            <circle cx="115" cy="92" r="5" />
            <circle cx="87" cy="90" r="1.5" fill="#ffffff" />
            <circle cx="117" cy="90" r="1.5" fill="#ffffff" />
          </g>
        )}

        {/* Blush Cheeks */}
        {(mood === 'blushing' || mood === 'hugging' || mood === 'smiling') && (
          <g fill="#ff7f99" opacity="0.65">
            <ellipse cx="74" cy="102" rx="9" ry="5" />
            <ellipse cx="126" cy="102" rx="9" ry="5" />
          </g>
        )}

        {/* Mouth */}
        {mood === 'knocked' ? (
          <path d="M 85 118 Q 100 110 115 118" stroke="#2b1f1a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        ) : mood === 'nervous' ? (
          <path d="M 88 116 Q 95 112 102 116 Q 108 112 114 116" stroke="#2b1f1a" strokeWidth="2" strokeLinecap="round" fill="none" />
        ) : mood === 'sleeping' ? (
          <ellipse cx="100" cy="116" rx="4" ry="6" fill="#664433" />
        ) : mood === 'smiling' || mood === 'blushing' || mood === 'hugging' ? (
          <path d="M 86 112 Q 100 125 114 112" stroke="#2b1f1a" strokeWidth="2.5" strokeLinecap="round" fill="#b12e58" />
        ) : (
          // Gentle neutral smile
          <path d="M 90 115 Q 100 120 110 115" stroke="#2b1f1a" strokeWidth="2" strokeLinecap="round" fill="none" />
        )}
      </motion.svg>
    </div>
  );
};
