import React from 'react';
import { motion } from 'framer-motion';

interface ChapterTransitionProps {
  glowColor?: string;
  variant?: 'line' | 'star' | 'dots';
}

export const ChapterTransition: React.FC<ChapterTransitionProps> = ({
  glowColor = 'rgba(223, 183, 108, 0.3)',
  variant = 'line',
}) => {
  return (
    <div className="w-full flex justify-center items-center py-12 pointer-events-none z-10">
      {variant === 'line' && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-[1px] w-32 md:w-64 bg-gradient-to-r from-transparent via-ivory-400/30 to-transparent"
          style={{
            boxShadow: `0 0 12px ${glowColor}`,
          }}
        />
      )}

      {variant === 'star' && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-ivory-400/40 text-xs tracking-widest"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-ivory-400/20" />
          <span>✦</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-ivory-400/20" />
        </motion.div>
      )}

      {variant === 'dots' && (
        <div className="flex gap-2 opacity-40">
          <span className="w-1 h-1 rounded-full bg-ivory-400 animate-pulse" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse delay-100" />
          <span className="w-1 h-1 rounded-full bg-ivory-400 animate-pulse delay-200" />
        </div>
      )}
    </div>
  );
};
