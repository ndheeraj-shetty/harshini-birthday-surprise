import React from 'react';
import { motion } from 'framer-motion';

interface CinematicTextProps {
  text: string;
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'quote' | 'whisper';
  className?: string;
  delay?: number;
}

export const CinematicText: React.FC<CinematicTextProps> = ({
  text,
  variant = 'p',
  className = '',
  delay = 0,
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'h1':
        return 'font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-ivory-100 leading-tight text-center';
      case 'h2':
        return 'font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-100 font-normal tracking-wide text-center';
      case 'h3':
        return 'font-sans uppercase text-xs md:text-sm tracking-[0.25em] text-gold-400/90 font-medium text-center';
      case 'quote':
        return 'font-serif italic text-xl sm:text-2xl md:text-3xl text-ivory-200/90 font-light leading-relaxed text-center max-w-2xl';
      case 'whisper':
        return 'font-sans text-xs md:text-sm text-ivory-400/60 tracking-wider text-center max-w-md';
      case 'p':
      default:
        return 'font-sans text-sm sm:text-base md:text-lg text-ivory-300/80 leading-relaxed text-center max-w-xl font-light';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`${getStyles()} ${className}`}
    >
      {text}
    </motion.div>
  );
};
