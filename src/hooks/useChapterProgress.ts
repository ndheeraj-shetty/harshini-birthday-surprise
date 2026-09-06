import { useState, useEffect, useCallback } from 'react';
import { ChapterId } from '../types';
import { useLocalStorage } from './useLocalStorage';

export const CHAPTER_ORDER: ChapterId[] = [
  'intro',
  'before-us',
  'relationship-start',
  'hard-times',
  'morning-calls',
  'long-distance',
  'first-meeting',
  'her-care',
  'game',
  'museum',
  'future',
  'letter',
  'final',
];

export function useChapterProgress() {
  const [activeChapter, setActiveChapter] = useState<ChapterId>('intro');
  const [visitedChapters, setVisitedChapters] = useLocalStorage<string[]>('bujjamma_visited_chapters', ['intro']);
  const [experienceStarted, setExperienceStarted] = useLocalStorage<boolean>('bujjamma_intro_completed', false);

  // Mark chapter visited
  const markVisited = useCallback((id: ChapterId) => {
    setVisitedChapters((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, [setVisitedChapters]);

  // Scroll to a chapter
  const scrollToChapter = useCallback((id: ChapterId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // IntersectionObserver to detect which chapter is currently in view
  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          const id = entry.target.id as ChapterId;
          if (CHAPTER_ORDER.includes(id)) {
            setActiveChapter(id);
            markVisited(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.35, 0.6],
    });

    CHAPTER_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [markVisited]);

  const currentIndex = CHAPTER_ORDER.indexOf(activeChapter);
  const progressPercentage = Math.round(((currentIndex + 1) / CHAPTER_ORDER.length) * 100);
  const isFullyCompleted = visitedChapters.length >= CHAPTER_ORDER.length;

  return {
    activeChapter,
    currentIndex,
    visitedChapters,
    experienceStarted,
    setExperienceStarted,
    progressPercentage,
    isFullyCompleted,
    scrollToChapter,
    markVisited,
  };
}
