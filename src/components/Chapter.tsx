import React from 'react';
import { ChapterId } from '../types';

interface ChapterProps {
  id: ChapterId;
  children: React.ReactNode;
  className?: string;
  isFullHeight?: boolean;
}

export const Chapter: React.FC<ChapterProps> = ({
  id,
  children,
  className = '',
  isFullHeight = true,
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${
        isFullHeight ? 'min-h-[100svh]' : 'min-h-screen'
      } flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-16 md:py-24 z-10 ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {children}
      </div>
    </section>
  );
};
