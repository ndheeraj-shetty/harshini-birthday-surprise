import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { personalData } from '../data/personalData';

export const BeforeUs: React.FC = () => {
  const { quote, fragments, message } = personalData.beforeUs;

  return (
    <Chapter id="before-us">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Chapter Title Badge */}
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 01 • The Beginning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-6">
            Funny thing...
          </h2>
        </ScrollReveal>

        {/* Narrative Core Quote */}
        <ScrollReveal delay={0.2}>
          <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-ivory-200/90 font-light leading-relaxed max-w-2xl mb-12">
            "{quote}"
          </blockquote>
        </ScrollReveal>

        {/* Individual Fragments floating cards */}
        <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-4 my-8">
          {fragments.map((frag, idx) => (
            <motion.div
              key={frag}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.12 }}
              className="px-5 py-3 rounded-2xl bg-midnight-900/70 border border-ivory-400/20 text-ivory-200 text-xs sm:text-sm font-sans tracking-wide backdrop-blur-md shadow-lg hover:border-gold-400/50 hover:bg-midnight-800/80 transition-all duration-300"
            >
              ✦ {frag}
            </motion.div>
          ))}
        </div>

        {/* Climax transition */}
        <ScrollReveal delay={0.8}>
          <div className="my-10 p-6 rounded-3xl bg-midnight-900/40 border border-ivory-400/15 max-w-xl">
            <p className="font-serif text-2xl sm:text-3xl text-gold-300 font-normal leading-snug mb-4">
              Somewhere in all of that... <br />
              you became important to me.
            </p>

            {/* Editable personal message */}
            <p className="font-sans text-xs sm:text-sm text-ivory-300/70 leading-relaxed italic border-t border-ivory-400/10 pt-4">
              {message}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Chapter>
  );
};
