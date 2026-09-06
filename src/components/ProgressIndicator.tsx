import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChapterId } from '../types';
import { CHAPTER_ORDER } from '../hooks/useChapterProgress';

interface ProgressIndicatorProps {
  activeChapter: ChapterId;
  onSelectChapter: (id: ChapterId) => void;
  isVisible: boolean;
}

const CHAPTER_LABELS: Record<ChapterId, string> = {
  'intro': 'Entrance',
  'before-us': 'Before Us',
  'relationship-start': 'August 12, 2025',
  'hard-times': 'The Hard Part',
  'morning-calls': 'Morning Calls',
  'long-distance': 'Long Distance',
  'first-meeting': 'May 8, 2026',
  'her-care': 'Her Care',
  'game': 'Bully Me',
  'museum': 'Bujjamma Archive',
  'future': 'Hyderabad & Future',
  'letter': 'My Letter',
  'final': 'Final Reveal',
};

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  activeChapter,
  onSelectChapter,
  isVisible,
}) => {
  const [hoveredChapter, setHoveredChapter] = useState<ChapterId | null>(null);

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 select-none"
      aria-label="Chapter progress"
    >
      {/* Background connector line */}
      <div className="absolute top-2 bottom-2 w-[1px] bg-ivory-400/10 pointer-events-none" />

      {CHAPTER_ORDER.map((id, index) => {
        const isActive = activeChapter === id;
        const isHovered = hoveredChapter === id;

        return (
          <div
            key={id}
            className="relative flex items-center group py-1"
            onMouseEnter={() => setHoveredChapter(id)}
            onMouseLeave={() => setHoveredChapter(null)}
          >
            {/* Dot button */}
            <button
              onClick={() => onSelectChapter(id)}
              aria-label={`Jump to chapter ${CHAPTER_LABELS[id]}`}
              className={`relative z-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-400 ${
                isActive
                  ? 'w-3 h-3 bg-gold-400 ring-4 ring-gold-400/20 shadow-[0_0_12px_rgba(223,183,108,0.8)]'
                  : 'w-1.5 h-1.5 bg-ivory-400/30 hover:bg-ivory-200 hover:scale-150'
              }`}
            />

            {/* Tooltip on hover */}
            {(isHovered || isActive) && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 14 }}
                exit={{ opacity: 0, x: 8 }}
                className="absolute left-full whitespace-nowrap bg-midnight-900/90 border border-ivory-400/20 px-2.5 py-1 rounded-md text-[11px] font-sans tracking-wide text-ivory-200 backdrop-blur-md pointer-events-none shadow-xl"
              >
                <span className="text-gold-400/70 mr-1.5 font-mono">0{index + 1}</span>
                {CHAPTER_LABELS[id]}
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.nav>
  );
};
