import React, { useState } from 'react';
import { Camera, Film, Mic, Sparkles, Image as ImageIcon } from 'lucide-react';

interface MediaPlaceholderProps {
  type?: 'photo' | 'video' | 'audio' | 'memory';
  title?: string;
  subtitle?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto';
  src?: string;
  alt?: string;
  onClick?: () => void;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  type = 'photo',
  title = 'YOUR MEMORY WILL LIVE HERE',
  subtitle = 'Drop your file into /public/media/ to personalize',
  className = '',
  aspectRatio = 'square',
  src,
  alt = 'Memory placeholder',
  onClick,
}) => {
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'wide':
        return 'aspect-[16/9]';
      case 'auto':
        return '';
      case 'square':
      default:
        return 'aspect-square';
    }
  };

  const renderIcon = () => {
    switch (type) {
      case 'video':
        return <Film className="w-8 h-8 text-gold-400/60 mb-2 group-hover:scale-110 transition-transform duration-300" />;
      case 'audio':
        return <Mic className="w-8 h-8 text-rose-400/70 mb-2 group-hover:scale-110 transition-transform duration-300" />;
      case 'memory':
        return <Sparkles className="w-8 h-8 text-gold-400/70 mb-2 group-hover:scale-110 transition-transform duration-300" />;
      case 'photo':
      default:
        return <Camera className="w-8 h-8 text-ivory-400/60 mb-2 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  // If real src is provided and hasn't errored
  if (src && !imageFailed) {
    return (
      <div
        onClick={onClick}
        className={`relative overflow-hidden rounded-2xl border border-ivory-400/20 group cursor-pointer bg-midnight-900/60 ${getAspectClass()} ${className}`}
      >
        <img
          src={src}
          alt={alt}
          onError={() => setImageFailed(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs text-ivory-200 tracking-wider font-sans">{title}</span>
        </div>
      </div>
    );
  }

  // Designed intentional placeholder frame
  return (
    <div
      onClick={onClick}
      className={`relative group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-ivory-400/20 bg-midnight-900/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-gold-400/40 hover:bg-midnight-900/60 shadow-xl ${getAspectClass()} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Ambient glowing backdrop corner lights */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/10 transition-colors" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-900/10 rounded-full blur-2xl group-hover:bg-rose-900/20 transition-colors" />

      {/* Subtle corner decorative brackets */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-ivory-400/30 group-hover:border-gold-400/60 transition-colors" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-ivory-400/30 group-hover:border-gold-400/60 transition-colors" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-ivory-400/30 group-hover:border-gold-400/60 transition-colors" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-ivory-400/30 group-hover:border-gold-400/60 transition-colors" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-[260px]">
        <div className="w-14 h-14 rounded-full bg-midnight-800/80 border border-ivory-400/10 flex items-center justify-center mb-3 group-hover:border-gold-400/30 group-hover:shadow-[0_0_15px_rgba(223,183,108,0.15)] transition-all">
          {renderIcon()}
        </div>

        <h4 className="font-serif tracking-wider text-xs sm:text-sm text-ivory-200 uppercase font-medium mb-1">
          {title}
        </h4>

        {subtitle && (
          <p className="font-sans text-[11px] text-ivory-400/50 leading-relaxed max-w-[200px]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
