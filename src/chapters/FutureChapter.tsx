import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { BucketList } from '../components/BucketList';
import { HyderabadSkyline } from '../components/HyderabadSkyline';
import { personalData } from '../data/personalData';

export const FutureChapter: React.FC = () => {
  const { title, subtitle, staggeredLines } = personalData.future;

  return (
    <Chapter id="future">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-3 block">
            Chapter 10 • The Horizon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-100 font-light mb-3">
            {title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-lg mx-auto leading-relaxed mb-6">
            {subtitle}
          </p>
        </ScrollReveal>

        {/* Hyderabad Skyline & Staggered Cinematic Text */}
        <div className="w-full max-w-4xl my-6">
          <HyderabadSkyline />

          {/* Staggered Lines */}
          <div className="my-8 flex flex-col gap-2">
            {staggeredLines.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.25 }}
                className={`font-serif ${
                  idx === staggeredLines.length - 1
                    ? 'text-2xl sm:text-3xl text-gold-300 font-normal mt-2'
                    : 'text-lg sm:text-xl text-ivory-200/90 font-light italic'
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Interactive Someday Bucket List */}
        <ScrollReveal delay={0.4} className="w-full mt-8">
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-sans block mb-3">
            Our Bucket List For Tomorrow
          </span>
          <p className="font-sans text-xs text-ivory-400/60 mb-6">
            Tap to mark each wish as a promise for when we're together.
          </p>
          <BucketList />
        </ScrollReveal>
      </div>
    </Chapter>
  );
};
