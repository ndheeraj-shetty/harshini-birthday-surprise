import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { universeMemories } from '../data/memories';
import { UniverseMemory } from '../types';
import { PhotoLightbox } from './PhotoLightbox';

export const StarField: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<UniverseMemory | null>(null);
  const [hoveredStar, setHoveredStar] = useState<UniverseMemory | null>(null);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center my-6">
      {/* Interactive Constellation Sky Box */}
      <div className="relative w-full aspect-[16/10] min-h-[360px] sm:min-h-[440px] rounded-3xl border border-ivory-400/20 bg-midnight-950/80 backdrop-blur-xl overflow-hidden shadow-2xl p-4">
        {/* Constellation guide lines connecting stars */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <polyline
            points="18% 26%, 34% 42%, 52% 22%, 74% 35%, 62% 65%, 82% 72%"
            fill="none"
            stroke="#dfb76c"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <polyline
            points="34% 42%, 25% 68%, 46% 84%"
            fill="none"
            stroke="#dda2b0"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>

        {/* Constellation background glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Deterministic Stars */}
        {universeMemories.map((star) => {
          const isHovered = hoveredStar?.id === star.id;

          return (
            <div
              key={star.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
              }}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
              onClick={() => setSelectedMemory(star)}
            >
              {/* Star Core Button */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.5 : [1, 1.25, 1],
                  opacity: isHovered ? 1 : [0.7, 1, 0.7],
                }}
                transition={{
                  repeat: Infinity,
                  duration: star.isSecret ? 1.5 : 3.5,
                  ease: 'easeInOut',
                }}
                className={`relative rounded-full flex items-center justify-center ${
                  star.isSecret ? 'animate-pulse ring-2 ring-gold-400/50' : ''
                }`}
                style={{
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  backgroundColor: star.glowColor || '#dfb76c',
                  boxShadow: `0 0 ${star.size * 1.5}px ${star.glowColor || '#dfb76c'}`,
                }}
              >
                {/* Cross flare */}
                <div className="absolute w-[200%] h-[1px] bg-white/60 pointer-events-none" />
                <div className="absolute h-[200%] w-[1px] bg-white/60 pointer-events-none" />
              </motion.div>

              {/* Star Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30 bg-midnight-900/90 border border-ivory-400/30 px-3 py-1.5 rounded-lg shadow-xl backdrop-blur-md">
                <span className="font-serif text-xs text-ivory-100 block">
                  {star.title}
                </span>
                <span className="font-sans text-[10px] text-gold-400/80 block">
                  {star.date}
                </span>
              </div>
            </div>
          );
        })}

        {/* Legend / Instruction */}
        <div className="absolute bottom-4 left-6 text-xs text-ivory-400/50 font-sans tracking-wider pointer-events-none">
          Tap any glowing star to reveal that memory. One star holds a hidden secret...
        </div>
      </div>

      {/* Memory Lightbox Modal */}
      {selectedMemory && (
        <PhotoLightbox
          isOpen={!!selectedMemory}
          onClose={() => setSelectedMemory(null)}
          title={selectedMemory.title}
          date={selectedMemory.date}
          caption={selectedMemory.fullStory || selectedMemory.summary}
          placeholderText="PHOTO OR AUDIO FOR THIS MEMORY"
          src={selectedMemory.image}
        />
      )}
    </div>
  );
};
