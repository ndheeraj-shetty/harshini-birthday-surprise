import React, { useEffect } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { AudioController } from './components/AudioController';
import { ProgressIndicator } from './components/ProgressIndicator';
import { ChapterTransition } from './components/ChapterTransition';

// All 14 Chapters
import { Intro } from './chapters/Intro';
import { BeforeUs } from './chapters/BeforeUs';
import { RelationshipStart } from './chapters/RelationshipStart';
import { HardTimes } from './chapters/HardTimes';
import { MorningCalls } from './chapters/MorningCalls';
import { LongDistance } from './chapters/LongDistance';
import { FirstMeeting } from './chapters/FirstMeeting';
import { HerCare } from './chapters/HerCare';
import { GameChapter } from './chapters/GameChapter';
import { MuseumChapter } from './chapters/MuseumChapter';
import { FutureChapter } from './chapters/FutureChapter';
import { LetterChapter } from './chapters/LetterChapter';
import { FinalChapter } from './chapters/FinalChapter';

// Hooks
import { useAudio } from './hooks/useAudio';
import { useChapterProgress } from './hooks/useChapterProgress';

export const App: React.FC = () => {
  const {
    isPlaying,
    isMuted,
    volume,
    trackName,
    togglePlay,
    toggleMute,
    setVolume,
    playTrack,
  } = useAudio();

  const {
    activeChapter,
    experienceStarted,
    setExperienceStarted,
    isFullyCompleted,
    scrollToChapter,
  } = useChapterProgress();

  const handleEnterExperience = () => {
    setExperienceStarted(true);
    playTrack('nuvvena');
    // Smoothly scroll down to Chapter 1
    setTimeout(() => {
      scrollToChapter('before-us');
    }, 300);
  };

  const handleReplay = () => {
    scrollToChapter('intro');
    playTrack('nuvvena');
  };

  // Play "Nuvvena" immediately from the very start of the website
  useEffect(() => {
    playTrack('nuvvena');
  }, [playTrack]);

  return (
    <div className="relative min-h-screen bg-midnight-950 text-ivory-100 selection:bg-rose-900 selection:text-ivory-100 font-sans">
      {/* Background Ambience (canvas stars, radial glows, film grain) */}
      <AmbientBackground />

      {/* Floating Audio Controller */}
      <AudioController
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        trackName={trackName}
        onTogglePlay={togglePlay}
        onToggleMute={toggleMute}
        onChangeVolume={setVolume}
      />

      {/* Chapter Progress Navigator */}
      <ProgressIndicator
        activeChapter={activeChapter}
        onSelectChapter={scrollToChapter}
        isVisible={experienceStarted}
      />

      {/* Main Continuous Cinematic Scroll Experience */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Chapter 1: Secret Entrance */}
        <Intro
          onEnter={handleEnterExperience}
          isStarted={experienceStarted}
          isPlaying={isPlaying}
          onStartAudio={() => playTrack('nuvvena')}
        />

        {/* Chapter 2: Before Us */}
        <ChapterTransition variant="star" />
        <BeforeUs />

        {/* Chapter 3: August 12, 2025 */}
        <ChapterTransition variant="line" glowColor="rgba(223, 183, 108, 0.4)" />
        <RelationshipStart />

        {/* Chapter 4: The Hard Part */}
        <ChapterTransition variant="dots" />
        <HardTimes />

        {/* Chapter 5: Morning Calls */}
        <ChapterTransition variant="line" glowColor="rgba(221, 162, 176, 0.4)" />
        <MorningCalls />

        {/* Chapter 6: Long Distance */}
        <ChapterTransition variant="star" />
        <LongDistance />

        {/* Chapter 7: May 8, 2026 */}
        <ChapterTransition variant="line" glowColor="rgba(223, 183, 108, 0.5)" />
        <FirstMeeting />

        {/* Chapter 8: Her Care */}
        <ChapterTransition variant="dots" />
        <HerCare />

        {/* Chapter 8: Bujjamma Game */}
        <ChapterTransition variant="line" glowColor="rgba(177, 46, 88, 0.4)" />
        <GameChapter />

        {/* Chapter 11: Memory Museum */}
        <ChapterTransition variant="dots" />
        <MuseumChapter />

        {/* Chapter 12: Our Future */}
        <ChapterTransition variant="line" glowColor="rgba(223, 183, 108, 0.4)" />
        <FutureChapter />

        {/* Chapter 13: Personal Letter */}
        <ChapterTransition variant="star" />
        <LetterChapter />

        {/* Chapter 14: Final Reveal */}
        <ChapterTransition variant="line" glowColor="rgba(223, 183, 108, 0.8)" />
        <FinalChapter onReplay={handleReplay} isFullyCompleted={isFullyCompleted} />
      </main>
    </div>
  );
};

export default App;
