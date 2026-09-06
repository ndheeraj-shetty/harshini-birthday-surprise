import React from 'react';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { DistanceScene } from '../components/DistanceScene';
import { personalData } from '../data/personalData';

export const LongDistance: React.FC = () => {
  const { title, subtitle } = personalData.longDistance;

  return (
    <Chapter id="long-distance">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 05 • Miles Apart
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-4">
            {title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-lg mx-auto leading-relaxed mb-6">
            {subtitle}
          </p>
        </ScrollReveal>

        {/* Abstract Celestial Node Distance Map */}
        <div className="w-full">
          <DistanceScene />
        </div>
      </div>
    </Chapter>
  );
};
