import { useState, useEffect, useRef, useCallback } from 'react';
import { mediaData } from '../data/mediaData';

export interface AudioState {
  isPlaying: boolean;
  isMuted: boolean;
  volume: number; // 0 to 1
  currentTrack: string | null;
  trackName: string;
  hasAudioSource: boolean;
}

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.6);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [trackName, setTrackName] = useState<string>('Nuvvena • Anand');
  const [hasAudioSource, setHasAudioSource] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthOscRef = useRef<OscillatorNode[] | null>(null);
  const synthGainRef = useRef<GainNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    audio.addEventListener('error', () => {
      // Missing audio file is completely normal in Phase 1
      setHasAudioSource(false);
    });

    audio.addEventListener('canplay', () => {
      setHasAudioSource(true);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    if (synthGainRef.current && audioContextRef.current) {
      synthGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : volume * 0.05,
        audioContextRef.current.currentTime
      );
    }
  }, [volume, isMuted]);

  // Gentle procedural ambient synth if no mp3 is provided
  const startGentleSynth = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      if (synthOscRef.current) return; // already active

      const ctx = audioContextRef.current;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(isMuted ? 0 : volume * 0.04, ctx.currentTime);
      gain.connect(ctx.destination);
      synthGainRef.current = gain;

      // Soft meditative chord (C - G - E mellow frequencies)
      const freqs = [130.81, 196.00, 261.63, 329.63];
      const oscs = freqs.map((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(gain);
        osc.start();
        return osc;
      });

      synthOscRef.current = oscs;
    } catch {
      // AudioContext unavailable or blocked
    }
  }, [isMuted, volume]);

  const stopGentleSynth = useCallback(() => {
    if (synthOscRef.current) {
      synthOscRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      synthOscRef.current = null;
    }
  }, []);

  // Play a specific track type or fallback with continuous play check
  const playTrack = useCallback((type: 'perfect' | 'nuvvena' | 'intro' | 'emotional' | 'game' | 'finale') => {
    // Map song types to audio sources
    const trackSrc = (type === 'perfect' ? mediaData.audio.perfect : type === 'nuvvena' ? mediaData.audio.nuvvena : mediaData.audio[type])?.trim();

    // Human-friendly title
    const songDisplayName =
      type === 'perfect' || trackSrc?.includes('perfect')
        ? 'Perfect • Ed Sheeran'
        : type === 'nuvvena' || trackSrc?.includes('nuvvena')
        ? 'Nuvvena • Anand'
        : `${type.toUpperCase()} • Soundtrack`;

    // If the exact track is already active and playing, DO NOT restart it!
    if (audioRef.current && currentTrack === trackSrc && isPlaying) {
      return;
    }

    if (trackSrc && audioRef.current) {
      if (!audioRef.current.src || !audioRef.current.src.includes(trackSrc)) {
        audioRef.current.src = trackSrc;
      }
      setCurrentTrack(trackSrc);
      setTrackName(songDisplayName);

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasAudioSource(true);
            setTrackName(songDisplayName);
            stopGentleSynth();
          })
          .catch((err: unknown) => {
            const error = err as { name?: string };
            if (error && error.name === 'NotAllowedError') {
              // Browser blocked autoplay waiting for user gesture
              setIsPlaying(false);
              setHasAudioSource(true);
              setTrackName(songDisplayName);

              // Auto-unlock as soon as user touches or clicks anywhere
              const unlockOnInteraction = () => {
                if (audioRef.current && (audioRef.current.paused || audioRef.current.currentTime === 0)) {
                  audioRef.current.play()
                    .then(() => {
                      setIsPlaying(true);
                      setHasAudioSource(true);
                      setTrackName(songDisplayName);
                      stopGentleSynth();
                    })
                    .catch(() => {});
                }
                cleanup();
              };

              const cleanup = () => {
                window.removeEventListener('click', unlockOnInteraction);
                window.removeEventListener('pointerdown', unlockOnInteraction);
                window.removeEventListener('touchstart', unlockOnInteraction);
                window.removeEventListener('keydown', unlockOnInteraction);
                window.removeEventListener('scroll', unlockOnInteraction);
              };

              window.addEventListener('click', unlockOnInteraction, { once: true, passive: true });
              window.addEventListener('pointerdown', unlockOnInteraction, { once: true, passive: true });
              window.addEventListener('touchstart', unlockOnInteraction, { once: true, passive: true });
              window.addEventListener('keydown', unlockOnInteraction, { once: true, passive: true });
              window.addEventListener('scroll', unlockOnInteraction, { once: true, passive: true });
            } else {
              // Actual missing file or decode error
              setHasAudioSource(false);
              startGentleSynth();
              setIsPlaying(true);
              setTrackName(songDisplayName + ' (Waiting for audio file)');
            }
          });
      }
    } else {
      // Fallback ambient hum
      startGentleSynth();
      setIsPlaying(true);
      setTrackName(songDisplayName);
    }
  }, [currentTrack, isPlaying, startGentleSynth, stopGentleSynth]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      if (audioRef.current && hasAudioSource) {
        audioRef.current.pause();
      }
      stopGentleSynth();
      setIsPlaying(false);
    } else {
      if (audioRef.current && hasAudioSource && currentTrack) {
        audioRef.current.play().catch(() => startGentleSynth());
      } else {
        startGentleSynth();
      }
      setIsPlaying(true);
    }
  }, [isPlaying, hasAudioSource, currentTrack, startGentleSynth, stopGentleSynth]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return {
    isPlaying,
    isMuted,
    volume,
    setVolume,
    currentTrack,
    trackName,
    hasAudioSource,
    togglePlay,
    toggleMute,
    playTrack,
    startGentleSynth,
  };
}
