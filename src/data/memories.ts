// ============================================================================
// MEMORIES & STARFIELD CONSTELLATION DATA
// ============================================================================
// Deterministic coordinates ensure stars do NOT randomly jitter on renders.
// Add or edit your memories here. Stars automatically populate the constellation.
// ============================================================================

import { UniverseMemory } from '../types';

export const universeMemories: UniverseMemory[] = [
  {
    id: 'memory-1',
    title: 'The Spark',
    date: 'August 2025',
    summary: 'The quiet shift from casual words into someone I never wanted to stop talking to.',
    fullStory: '[YOUR MEMORY STORY — Describe the exact feeling when you realized she wasn’t just another person in your life]',
    x: 18,
    y: 26,
    size: 20,
    glowColor: '#dfb76c',
  },
  {
    id: 'memory-2',
    title: 'August 12 Milestone',
    date: 'August 12, 2025',
    summary: 'The day we drew our line in the sand and chose each other.',
    fullStory: '[YOUR MEMORY STORY — The exact moment, conversation, or message that made it official]',
    x: 34,
    y: 42,
    size: 26,
    glowColor: '#dda2b0',
  },
  {
    id: 'memory-3',
    title: 'The 3rd Month Fire',
    date: 'November 2025',
    summary: 'We argued, we cried, we almost broke down. But neither of us let go.',
    fullStory: '[YOUR MEMORY STORY — How surviving those intense early fights made our bond unbreakable]',
    x: 52,
    y: 22,
    size: 18,
    glowColor: '#b12e58',
  },
  {
    id: 'memory-4',
    title: 'Waking the Sleeping Giant',
    date: 'Every College Morning',
    summary: '5+ calls, checking if I was faking wakefulness, making sure I never failed attendance.',
    fullStory: '[YOUR MEMORY STORY — Her stubborn dedication to calling back until she heard footsteps or running water]',
    x: 74,
    y: 35,
    size: 22,
    glowColor: '#dfb76c',
  },
  {
    id: 'memory-5',
    title: 'The Late Night Whispers',
    date: 'Midnight Routine',
    summary: 'When the world falls asleep and it feels like only the two of us exist in the dark.',
    fullStory: '[YOUR MEMORY STORY — Falling asleep with the phone near the pillow, waking up to check if she was still on the call]',
    x: 25,
    y: 68,
    size: 24,
    glowColor: '#c57d8f',
  },
  {
    id: 'memory-6',
    title: 'May 8, 2026',
    date: 'May 8, 2026',
    summary: 'The distance broke. Standing in front of the prettiest girl in the world.',
    fullStory: '[YOUR MEMORY STORY — That breath before the first hug, looking at her eyes in real life for the first time]',
    x: 62,
    y: 65,
    size: 30,
    glowColor: '#f3ece1',
  },
  {
    id: 'memory-7',
    title: 'The Motherly Radar',
    date: 'Every Single Day',
    summary: 'Did you eat? Do you have money? Take care of yourself.',
    fullStory: '[YOUR MEMORY STORY — How she worries about your meals, safety, and health with pure heart]',
    x: 82,
    y: 72,
    size: 20,
    glowColor: '#dfb76c',
  },
  // EASTER EGG #1: Hidden Star
  {
    id: 'secret-star',
    title: '✨ The Secret Nebula',
    date: 'A Little Secret',
    summary: 'You discovered the hidden star, Bujjamma!',
    fullStory: 'Truth is: Even when you yell at me, even when you bully me, you are my favorite person in the entire universe. You make my ordinary days feel magical. Happy Birthday Bangaram! 💖',
    x: 46,
    y: 84,
    size: 16,
    glowColor: '#dfb76c',
    isSecret: true,
  },
];
