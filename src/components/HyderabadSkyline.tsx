import React from 'react';
import { motion } from 'framer-motion';

export const HyderabadSkyline: React.FC = () => {
  return (
    <div className="relative w-full h-64 sm:h-80 my-8 overflow-hidden rounded-3xl border border-ivory-400/20 bg-gradient-to-b from-midnight-950 via-wine-950/40 to-midnight-900 shadow-2xl flex items-end">
      {/* Evening twilight moon/glow */}
      <div className="absolute top-6 right-16 w-16 h-16 rounded-full bg-gold-400/20 blur-xl pointer-events-none" />
      <div className="absolute top-8 right-20 w-8 h-8 rounded-full border border-gold-400/40 bg-ivory-100/10 pointer-events-none" />

      {/* Atmospheric mist */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Distant skyline layer */}
      <svg
        viewBox="0 0 1000 240"
        className="w-full h-44 sm:h-56 opacity-30 text-slate-800 fill-current pointer-events-none"
        preserveAspectRatio="none"
      >
        <rect x="50" y="100" width="30" height="140" />
        <rect x="90" y="70" width="45" height="170" />
        <rect x="150" y="110" width="35" height="130" />
        <rect x="210" y="85" width="50" height="155" />
        <polygon points="280,240 310,120 340,240" />
        <rect x="680" y="90" width="40" height="150" />
        <rect x="730" y="60" width="55" height="180" />
        <rect x="800" y="105" width="45" height="135" />
        <rect x="860" y="80" width="60" height="160" />
      </svg>

      {/* Prominent Architectural Silhouette (Charminar stylized monument arches & minarets) */}
      <svg
        viewBox="0 0 800 200"
        className="absolute bottom-0 w-full h-40 sm:h-48 fill-midnight-950 text-midnight-950 pointer-events-none"
        preserveAspectRatio="none"
      >
        {/* Base and grand arches */}
        <rect x="300" y="70" width="200" height="130" />
        <path d="M 330 200 A 30 50 0 0 1 390 200 Z" fill="#0b0d13" />
        <path d="M 410 200 A 30 50 0 0 1 470 200 Z" fill="#0b0d13" />
        <path d="M 350 140 A 50 40 0 0 1 450 140 Z" fill="#0b0d13" />

        {/* 4 Corner Minarets */}
        {/* Minaret 1 */}
        <rect x="290" y="20" width="16" height="180" />
        <polygon points="286,20 298,2 310,20" />
        <ellipse cx="298" cy="40" rx="12" ry="4" fill="#dfb76c" opacity="0.3" />

        {/* Minaret 2 */}
        <rect x="335" y="35" width="14" height="165" />
        <polygon points="332,35 342,18 352,35" />

        {/* Minaret 3 */}
        <rect x="450" y="35" width="14" height="165" />
        <polygon points="447,35 457,18 467,35" />

        {/* Minaret 4 */}
        <rect x="494" y="20" width="16" height="180" />
        <polygon points="490,20 502,2 514,20" />
        <ellipse cx="502" cy="40" rx="12" ry="4" fill="#dfb76c" opacity="0.3" />
      </svg>

      {/* Floating City Street Sparks / Lights */}
      <div className="absolute inset-0 flex items-center justify-around z-20 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + (i % 3),
              delay: (i * 0.3) % 2,
            }}
            className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_8px_#dfb76c]"
          />
        ))}
      </div>
    </div>
  );
};
