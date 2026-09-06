import React from 'react';
import { Chapter } from '../components/Chapter';
import { FinalReveal } from '../components/FinalReveal';
import { EasterEggController } from '../components/EasterEgg';

interface FinalChapterProps {
  onReplay: () => void;
  isFullyCompleted: boolean;
}

export const FinalChapter: React.FC<FinalChapterProps> = ({ onReplay, isFullyCompleted }) => {
  return (
    <Chapter id="final" className="bg-midnight-950">
      <div className="w-full flex flex-col items-center">
        {/* Climax Milestone & Wishes */}
        <FinalReveal onReplay={onReplay} />

        {/* Easter Egg Trigger Bar */}
        <EasterEggController isWebsiteCompleted={isFullyCompleted} />
      </div>
    </Chapter>
  );
};
