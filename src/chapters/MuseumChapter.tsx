import React from 'react';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { Museum } from '../components/Museum';

export const MuseumChapter: React.FC = () => {
  return (
    <Chapter id="museum">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 09 • The Archive
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light tracking-wide mb-3">
            THE BUJJAMMA ARCHIVE
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-md mx-auto leading-relaxed mb-6">
            Five wings filled with the moments, voices, smiles, and chaos that belong entirely to you.
          </p>
        </ScrollReveal>

        {/* 6-Wing Gallery Museum */}
        <div className="w-full">
          <Museum />
        </div>
      </div>
    </Chapter>
  );
};
