import React from 'react';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { LetterEnvelope } from '../components/LetterEnvelope';
import { personalData } from '../data/personalData';

export const LetterChapter: React.FC = () => {
  const { title, subtitle } = personalData.letter;

  return (
    <Chapter id="letter" className="bg-gradient-to-b from-transparent via-wine-950/20 to-midnight-950">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 11 • The Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-3">
            {title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-md mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
        </ScrollReveal>

        {/* 3D Wax-sealed Interactive Envelope */}
        <div className="w-full">
          <LetterEnvelope />
        </div>
      </div>
    </Chapter>
  );
};
