import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../components/Chapter';
import { ScrollReveal } from '../components/ScrollReveal';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { personalData } from '../data/personalData';
import { mediaData } from '../data/mediaData';

export const FirstMeeting: React.FC = () => {
  const { title, subtitle, quote1, quote2, memoryNote } = personalData.firstMeeting;
  const meetingPhotos = mediaData.firstMeeting.images;

  return (
    <Chapter id="first-meeting" className="bg-gradient-to-b from-transparent via-rose-950/20 to-transparent">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <ScrollReveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-sans font-medium mb-4 block">
            Chapter 06 • The Reality
          </span>
        </ScrollReveal>

        {/* Date Display */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 my-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-gold-400 font-light tracking-tighter">
              {personalData.relationship.firstMeetingDay}
            </span>
            <span className="text-[10px] sm:text-xs text-ivory-400/60 font-mono tracking-widest uppercase">
              DAY
            </span>
          </motion.div>

          <span className="font-serif text-4xl sm:text-6xl text-ivory-400/40">/</span>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-ivory-100 font-light tracking-tighter">
              {personalData.relationship.firstMeetingMonth}
            </span>
            <span className="text-[10px] sm:text-xs text-ivory-400/60 font-mono tracking-widest uppercase">
              MONTH
            </span>
          </motion.div>

          <span className="font-serif text-4xl sm:text-6xl text-ivory-400/40">/</span>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-5xl sm:text-7xl md:text-8xl text-gold-400 font-light tracking-tighter">
              {personalData.relationship.firstMeetingYear}
            </span>
            <span className="text-[10px] sm:text-xs text-ivory-400/60 font-mono tracking-widest uppercase">
              YEAR
            </span>
          </motion.div>
        </div>

        {/* Subtitle */}
        <ScrollReveal delay={0.4}>
          <h3 className="font-serif text-xl sm:text-3xl text-ivory-100 uppercase tracking-[0.2em] font-light mt-2 mb-8">
            {subtitle}
          </h3>
        </ScrollReveal>

        {/* Poetic quote */}
        <ScrollReveal delay={0.5}>
          <div className="my-6">
            <p className="font-serif italic text-lg sm:text-xl text-ivory-300/80 mb-1">
              "{quote1}"
            </p>
            <p className="font-serif text-xl sm:text-2xl text-gold-300 font-light">
              "{quote2}"
            </p>
          </div>
        </ScrollReveal>

        {/* Photo Display */}
        <ScrollReveal delay={0.6} className="w-full max-w-md mx-auto my-8">
          <MediaPlaceholder
            type="photo"
            title="May 8th • Our Special Moment"
            subtitle="The day distance disappeared"
            src={meetingPhotos[0]}
            aspectRatio="portrait"
            className="w-full shadow-2xl"
          />
        </ScrollReveal>

        {/* Personal Memory Note Block */}
        <ScrollReveal delay={0.8} className="w-full max-w-xl mt-4">
          <div className="p-6 rounded-2xl bg-midnight-900/60 border border-ivory-400/15 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-sans block mb-2">
              The May 8 Memory
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
