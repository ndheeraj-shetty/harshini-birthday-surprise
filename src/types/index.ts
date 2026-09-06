export type ChapterId =
  | 'intro'
  | 'before-us'
  | 'relationship-start'
  | 'hard-times'
  | 'morning-calls'
  | 'long-distance'
  | 'first-meeting'
  | 'her-care'
  | 'game'
  | 'museum'
  | 'future'
  | 'letter'
  | 'final';

export interface ChapterMeta {
  id: ChapterId;
  title: string;
  subtitle?: string;
  index: number;
}

export interface CareQuestion {
  id: string;
  question: string;
  shortLabel: string;
  response: string;
  iconName: string;
}

export interface UniverseMemory {
  id: string;
  title: string;
  date: string;
  summary: string;
  fullStory?: string;
  image?: string;
  audio?: string;
  video?: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  size: number; // star size in px
  glowColor?: string;
  isSecret?: boolean;
}

export type GameActionType =
  | 'beat'
  | 'kiss'
  | 'hug'
  | 'yell'
  | 'tease'
  | 'wake'
  | 'love';

export interface GameActionConfig {
  type: GameActionType;
  label: string;
  emoji: string;
  reactionMessage: string;
  boredomReduction: number;
}

export type CharacterMood =
  | 'neutral'
  | 'knocked'
  | 'blushing'
  | 'hugging'
  | 'nervous'
  | 'embarrassed'
  | 'sleeping'
  | 'waking'
  | 'smiling';

export interface MuseumItem {
  id: string;
  title: string;
  date?: string;
  caption: string;
  type: 'image' | 'video' | 'audio';
  src?: string;
  thumbnail?: string;
  placeholderText?: string;
}

export interface MuseumRoomData {
  id: 'her' | 'us' | 'calls' | 'chaos' | 'first-meeting' | 'little-things';
  name: string;
  title: string;
  description: string;
  iconName: string;
  items: MuseumItem[];
}

export interface BucketListItem {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  tag?: string;
}

export interface DistanceNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mediaType?: 'image' | 'audio' | 'video';
  mediaSrc?: string;
  placeholderText: string;
}
