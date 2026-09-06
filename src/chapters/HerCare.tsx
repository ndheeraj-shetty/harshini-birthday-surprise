import React from 'react';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { CareCard } from '../components/CareCard';
import { personalData } from '../data/personalData';

export const HerCare: React.FC = () => {
  const { title } = personalData.herCare;

  return (
    <Chapter id="her-care">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 07 • Silent Protection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-4 max-w-2xl">
            {title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-md mx-auto leading-relaxed mb-6">
            In every ordinary question you ask, there is an extraordinary amount of love and worry.
          </p>
        </ScrollReveal>

        {/* 5 Interactive Care Dimensions */}
        <div className="w-full">
          <CareCard />
        </div>
      </div>
    </Chapter>
  );
};
