import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioControllerProps {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  trackName: string;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onChangeVolume: (volume: number) => void;
}

export const AudioController: React.FC<AudioControllerProps> = ({
  isPlaying,
  isMuted,
  volume,
  trackName,
  onTogglePlay,
  onToggleMute,
  onChangeVolume,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex items-center gap-2 bg-midnight-900/80 backdrop-blur-md border border-ivory-400/20 px-3 py-2 rounded-full shadow-lg shadow-black/40 text-ivory-200 text-xs"
      >
        {/* Play / Pause Toggle */}
        <button
          onClick={onTogglePlay}
          className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-ivory-100 focus:outline-none focus:ring-1 focus:ring-gold-400"
          title={isPlaying ? 'Pause music' : 'Play music'}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
        </button>

        {/* Music Pulse Icon + Track Name */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none max-w-[140px] sm:max-w-[200px]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Music
            size={13}
            className={`text-gold-400 ${isPlaying ? 'animate-bounce' : 'opacity-50'}`}
          />
          <span className="truncate tracking-wide text-[11px] font-sans text-ivory-300">
            {trackName}
          </span>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={onToggleMute}
          className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-ivory-100 focus:outline-none focus:ring-1 focus:ring-gold-400"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={14} className="text-rose-400" /> : <Volume2 size={14} />}
        </button>

        {/* Settings / Volume expander */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-ivory-400 focus:outline-none"
          title="Audio Settings"
        >
          <Sliders size={12} />
        </button>
      </motion.div>

      {/* Expanded volume popover */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            className="absolute right-0 top-full mt-2 p-3 bg-midnight-900/95 border border-ivory-400/20 rounded-2xl shadow-2xl backdrop-blur-xl w-52 text-xs flex flex-col gap-2"
          >
            <div className="flex justify-between items-center text-ivory-400 text-[10px] tracking-wider uppercase">
              <span>Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => onChangeVolume(parseFloat(e.target.value))}
              className="w-full accent-gold-400 h-1 bg-midnight-800 rounded-lg cursor-pointer"
            />
            <p className="text-[10px] text-ivory-400/70 italic mt-1 text-center">
              Add soundtrack to /public/media/audio/
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
