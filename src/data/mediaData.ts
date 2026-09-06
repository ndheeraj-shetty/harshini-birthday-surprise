// ============================================================================
// MEDIA REGISTRY — PLUG AND PLAY MEDIA CONFIGURATION
// ============================================================================

export interface MediaConfig {
  relationship: {
    images: string[];
  };
  firstMeeting: {
    images: string[];
    videos: string[];
  };
  her: {
    images: string[];
  };
  us: {
    images: string[];
  };
  calls: {
    images: string[];
    audio: string[];
  };
  chaos: {
    images: string[];
  };
  littleThings: {
    images: string[];
  };
  audio: {
    perfect?: string;
    nuvvena?: string;
    intro: string;
    emotional: string;
    game: string;
    finale: string;
  };
}

export const mediaData: MediaConfig = {
  // Chapter 2 Milestone (August 12): photo 3
  relationship: {
    images: [
      '/media/photos/relationship/photo-3.jpeg',
    ],
  },

  // Chapter 6 First Meeting (May 8): photo 5
  firstMeeting: {
    images: [
      '/media/photos/first-meeting/photo-5.jpeg',
    ],
    videos: [],
  },

  // Museum - Her: photo 1, photo 2, photo 15, photo 6
  her: {
    images: [
      '/media/photos/her/photo-1.jpeg',
      '/media/photos/her/photo-2.jpeg',
      '/media/photos/her/photo-15.jpg',
      '/media/photos/her/photo-6.jpeg',
    ],
  },

  // Museum - Us: photo 3, photo 5
  us: {
    images: [
      '/media/photos/us/photo-3.jpeg',
      '/media/photos/us/photo-5.jpeg',
    ],
  },

  // Museum - First Video Call: photo 4
  calls: {
    images: [
      '/media/photos/calls/photo-4.jpeg',
    ],
    audio: [],
  },

  // Museum - Chaos: photo 7, photo 8, photo 9, photo 10, photo 11, photo 12
  chaos: {
    images: [
      '/media/photos/chaos/photo-7.jpeg',
      '/media/photos/chaos/photo-8.jpeg',
      '/media/photos/chaos/photo-9.jpeg',
      '/media/photos/chaos/photo-10.jpeg',
      '/media/photos/chaos/photo-11.jpeg',
      '/media/photos/chaos/photo-12.jpeg',
    ],
  },

  // Museum - Little Things: photo 13, photo 14
  littleThings: {
    images: [
      '/media/photos/little-things/photo-13.jpeg',
      '/media/photos/little-things/photo-14.jpeg',
    ],
  },

  audio: {
    nuvvena: "/media/audio/nuvvena.mp3",
    intro: "/media/audio/nuvvena.mp3",
    emotional: "/media/audio/nuvvena.mp3",
    game: "/media/audio/nuvvena.mp3",
    finale: "/media/audio/nuvvena.mp3",
  },
};

/**
 * Safe accessor: returns media URL or null if empty
 */
export function getFirstMedia(list: string[] | undefined): string | null {
  if (!list || list.length === 0) return null;
  const first = list[0]?.trim();
  return first ? first : null;
}
