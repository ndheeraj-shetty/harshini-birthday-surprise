import React, { useState } from 'react';
import { Film, Play } from 'lucide-react';
import { MediaPlaceholder } from './MediaPlaceholder';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title = 'YOUR VIDEO GOES HERE',
  className = '',
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  if (!src || hasError) {
    return (
      <MediaPlaceholder
        type="video"
        title={title}
        subtitle="Place your mp4 or webm in /public/media/videos/"
        aspectRatio="video"
        className={className}
      />
    );
  }

  return (
    <div className={`relative w-full aspect-video rounded-3xl overflow-hidden border border-ivory-400/20 bg-black/60 shadow-2xl ${className}`}>
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        onError={() => setHasError(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30">
          <div className="w-16 h-16 rounded-full bg-gold-400/80 text-midnight-950 flex items-center justify-center shadow-lg">
            <Play size={24} className="ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};
