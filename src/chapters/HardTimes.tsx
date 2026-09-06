import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { Timeline } from '../components/Timeline';
import { personalData } from '../data/personalData';

export const HardTimes: React.FC = () => {
  const { title, stages, summary, resolution } = personalData.hardTimes;

  const timelineStages = [
    { title: 'Misunderstanding', description: 'When words got lost across the distance' },
    { title: 'Conversation', description: 'Staying on call even when angry' },
    { title: 'Understanding', description: 'Listening to the pain underneath the words' },
    { title: 'Stronger Bond', description: 'Realizing nothing can pull us apart' },
  ];

  return (
    <Chapter id="hard-times" className="bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-sans font-medium mb-3 block">
            Chapter 03 • The Storm
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-12">
            {title}
          </h2>
        </ScrollReveal>

        {/* Sequential Words with atmospheric darkening */}
        <div className="flex flex-col gap-6 my-6 w-full max-w-md">
          {stages.map((stage, idx) => (
            <motion.div
              key={stage.word}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex items-baseline justify-between border-b border-ivory-400/10 pb-3"
            >
              <span
                className={`font-serif text-2xl sm:text-3xl tracking-wide ${
                  idx === stages.length - 1 ? 'text-gold-400 font-medium' : 'text-ivory-200'
                }`}
              >
                {stage.word}
              </span>
              <span className="text-xs text-ivory-400/60 font-sans italic text-right">
                {stage.subtext}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Growth Timeline */}
        <ScrollReveal delay={0.4} className="w-full my-12">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400/80 font-sans block mb-6">
            The Rhythm of How We Grew
          </span>
          <Timeline stages={timelineStages} />
        </ScrollReveal>

        {/* Culminating Staying Narrative */}
        <ScrollReveal delay={0.6} className="max-w-xl mt-6">
          <blockquote className="font-serif text-xl sm:text-2xl text-ivory-100 font-light leading-relaxed mb-4">
            "{summary}"
          </blockquote>
          <p className="font-serif italic text-base sm:text-lg text-gold-400/90 leading-relaxed">
            "{resolution}"
          </p>
        </ScrollReveal>
      </div>
    </Chapter>
  );
};
