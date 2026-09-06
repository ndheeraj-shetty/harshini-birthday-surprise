import React from 'react';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { BujjammaGame } from '../components/BujjammaGame';

export const GameChapter: React.FC = () => {
  return (
    <Chapter id="game" className="bg-gradient-to-b from-transparent via-midnight-900/40 to-transparent">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-sans font-medium mb-3 block">
            Chapter 08 • The Playroom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-2">
            Bored, Bujjamma?
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-gold-400/90 mb-1">
            Fine. You can bully me here.
          </p>
          <p className="font-sans text-xs text-ivory-400/60 max-w-md mx-auto leading-relaxed mb-6">
            Tap the buttons below to unleash your mood on my cartoon self.
          </p>
        </ScrollReveal>

        {/* Master Mini-Game */}
        <div className="w-full">
          <BujjammaGame />
        </div>
      </div>
    </Chapter>
  );
};
