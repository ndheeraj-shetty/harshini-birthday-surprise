import React, { useEffect } from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  caption?: string;
  date?: string;
  src?: string;
  placeholderText?: string;
  type?: 'image' | 'video' | 'audio';
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  onClose,
  title,
  caption,
  date,
  src,
  placeholderText,
  type = 'image',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-midnight-950/90 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-midnight-900/80 border border-ivory-400/20 text-ivory-200 hover:text-white hover:border-gold-400 transition-all z-50"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative max-w-4xl w-full bg-midnight-900 border border-ivory-400/25 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Area */}
            <div className="w-full md:w-3/5 bg-black/40 flex items-center justify-center min-h-[300px] md:min-h-[480px] p-6 relative">
              {src ? (
                type === 'video' ? (
                  <video
                    src={src}
                    controls
                    className="max-h-[70vh] w-auto rounded-xl shadow-lg"
                    autoPlay={false}
                  />
                ) : (
                  <img
                    src={src}
                    alt={title}
                    className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg"
                  />
                )
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-ivory-400/30 rounded-2xl w-full h-full">
                  <Sparkles className="w-10 h-10 text-gold-400/70 mb-4 animate-pulse" />
                  <span className="font-serif text-lg text-ivory-100 uppercase tracking-widest mb-2">
                    {placeholderText || 'YOUR MEDIA WILL LIVE HERE'}
                  </span>
                  <p className="text-xs text-ivory-400/60 max-w-xs leading-relaxed font-sans">
                    Place your high-res photo or video in <code className="text-gold-400/80">/public/media/</code> to display it in this frame.
                  </p>
                </div>
              )}
            </div>

            {/* Information / Caption Area */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-ivory-400/15">
              <div>
                {date && (
                  <div className="flex items-center gap-2 text-gold-400 text-xs tracking-wider uppercase font-sans mb-3">
                    <Calendar size={13} />
                    <span>{date}</span>
                  </div>
                )}
                <h3 className="font-serif text-2xl text-ivory-100 font-light mb-4">
                  {title}
                </h3>
                {caption && (
                  <p className="font-sans text-sm text-ivory-300/80 leading-relaxed font-light">
                    {caption}
                  </p>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-ivory-400/10">
                <span className="text-[11px] text-ivory-400/40 uppercase tracking-widest">
                  Memory of Bujjamma
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
