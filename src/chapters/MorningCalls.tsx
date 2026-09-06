import React from 'react';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { PhoneCallSimulator } from '../components/PhoneCallSimulator';

export const MorningCalls: React.FC = () => {
  return (
    <Chapter id="morning-calls">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 04 • Daily Ritual
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-4">
            The Morning Siren
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-md mx-auto leading-relaxed mb-8">
            Every single college morning, a stubborn battle between my sleep and her relentless calls.
          </p>
        </ScrollReveal>

        {/* Smartphone Simulator */}
        <div className="w-full my-4">
          <PhoneCallSimulator />
        </div>
      </div>
    </Chapter>
  );
};
