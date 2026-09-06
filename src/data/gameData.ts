// ============================================================================
// BUJJAMMA MINI-GAME DATA & CHARACTER BEHAVIOR
// ============================================================================
// Configures actions, quotes, animations, and boredom system.
// ============================================================================

import { GameActionConfig } from '../types';

export const gameActions: GameActionConfig[] = [
  {
    type: 'beat',
    label: 'BEAT HIM',
    emoji: '🥊',
    reactionMessage: 'Okay okay! I deserved that.',
    boredomReduction: 12,
  },
  {
    type: 'kiss',
    label: 'KISS HIM',
    emoji: '💋',
    reactionMessage: 'System malfunctioning...',
    boredomReduction: 15,
  },
  {
    type: 'hug',
    label: 'HUG HIM',
    emoji: '🤗',
    reactionMessage: 'Okay... stay like this for a while.',
    boredomReduction: 14,
  },
  {
    type: 'yell',
    label: 'YELL AT HIM',
    emoji: '😤',
    reactionMessage: 'Yes, Bujjamma.',
    boredomReduction: 10,
  },
  {
    type: 'tease',
    label: 'TEASE HIM',
    emoji: '😂',
    reactionMessage: 'Stoppp...',
    boredomReduction: 10,
  },
  {
    type: 'wake',
    label: 'WAKE HIM UP',
    emoji: '😴',
    reactionMessage: 'Still sleeping... tap to wake!',
    boredomReduction: 18,
  },
  {
    type: 'love',
    label: 'LOVE HIM',
    emoji: '❤️',
    reactionMessage: 'Yeah... I know.',
    boredomReduction: 16,
  },
];

export const wakeUpStages = [
  'hmm...',
  'five more minutes...',
  'muffled groan into pillow...',
  'Okay, okay! I\'m awake!',
];

export const gameBoredomConfig = {
  initialBoredom: 100,
  zeroBoredomMessage: 'Congratulations. You successfully wasted time with me.',
  easterEggBadge: 'Master Bully of the Year 🏆',
  easterEggQuote: 'You have reduced your boredom to 0%! You earned 1000 hugs and unlimited pampering privileges.',
};
