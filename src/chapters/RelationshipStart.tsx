import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { personalData } from '../data/personalData';
import { mediaData, getFirstMedia } from '../data/mediaData';

export const RelationshipStart: React.FC = () => {
  const { startDay, startMonth, startYear, milestoneQuote } = personalData.relationship;
  const { memoryNote } = personalData.relationshipStart;
  const relationshipPhoto = getFirstMedia(mediaData.relationship.images);

  return (
    <Chapter id="relationship-start">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-4 block">
            Chapter 02 • The Milestone
          </span>
        </ScrollReveal>

        {/* Dramatic Monolithic Date Reveal */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 my-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-ivory-100 font-light tracking-tighter">
              {startDay}
            </span>
            <span className="text-[10px] sm:text-xs text-ivory-400/60 font-mono tracking-widest uppercase">
              DAY
            </span>
          </motion.div>

          <span className="font-serif text-4xl sm:text-6xl text-gold-400/40">/</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-gold-400 font-light tracking-tighter">
              {startMonth}
            </span>
            <span className="text-[10px] sm:text-xs text-ivory-400/60 font-mono tracking-widest uppercase">
              MONTH
            </span>
          </motion.div>

          <span className="font-serif text-4xl sm:text-6xl text-gold-400/40">/</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-ivory-100 font-light tracking-tighter">
              {startYear}
            </span>
            <span className="text-[10px] sm:text-xs text-ivory-400/60 font-mono tracking-widest uppercase">
              YEAR
            </span>
          </motion.div>
        </div>

        {/* Milestone Title */}
        <ScrollReveal delay={0.5}>
          <h3 className="font-serif text-xl sm:text-3xl text-ivory-100 uppercase tracking-[0.2em] font-light mt-4 mb-8">
            {milestoneQuote}
          </h3>
        </ScrollReveal>

        {/* Empty Cinematic Photo Frame */}
        <ScrollReveal delay={0.6} className="w-full max-w-md my-6">
          <MediaPlaceholder
            type="photo"
            title="ADD RELATIONSHIP PHOTO"
            subtitle="Save photo to /public/media/photos/relationship/"
            src={relationshipPhoto || undefined}
            aspectRatio="square"
            className="w-full shadow-2xl"
          />
        </ScrollReveal>

        {/* Personal Memory Note Block */}
        <ScrollReveal delay={0.8} className="w-full max-w-xl mt-6">
          <div className="p-6 rounded-2xl bg-midnight-900/60 border border-ivory-400/15 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-sans block mb-2">
              Memory Archive
            </span>
            <p className="font-serif italic text-sm sm:text-base text-ivory-300/80 leading-relaxed">
              {memoryNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Chapter>
  );
};
