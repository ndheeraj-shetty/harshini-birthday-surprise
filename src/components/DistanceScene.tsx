import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/personalData';
import { PhotoLightbox } from './PhotoLightbox';

export const DistanceScene: React.FC = () => {
  const { nodes } = personalData.longDistance;
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const activeNode = nodes.find((n) => n.id === selectedNodeId) || null;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center my-8">
      {/* Abstract Two-Node Orbit Constellation Map */}
      <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl border border-ivory-400/20 bg-midnight-900/50 backdrop-blur-xl overflow-hidden p-6 flex items-center justify-between shadow-2xl">
        {/* Background celestial radial glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-violet-900/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Connecting SVG Arc */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          {/* Subtle static guide arc */}
          <path
            d="M 120 200 Q 50% 90 85% 200"
            fill="none"
            stroke="rgba(243, 236, 225, 0.1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Glowing pulsing arc */}
          <path
            d="M 120 200 Q 50% 90 85% 200"
            fill="none"
            stroke="url(#glowGradient)"
            strokeWidth="2.5"
          />
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dfb76c" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#dda2b0" stopOpacity="1" />
              <stop offset="100%" stopColor="#c57d8f" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Pulsing signal packet moving along path */}
        <motion.div
          animate={{
            x: ['10%', '85%', '10%'],
            y: ['50%', '30%', '50%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
          }}
          className="absolute w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_15px_#dfb76c] pointer-events-none z-10"
        />

        {/* Left Node: ME */}
        <div className="relative z-20 flex flex-col items-center text-center ml-4 sm:ml-12">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-midnight-800/90 border-2 border-ivory-400/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <span className="font-serif text-xl sm:text-2xl text-ivory-100 font-light">ME</span>
            <span className="text-[10px] text-ivory-400/60 uppercase tracking-widest font-mono">Here</span>
          </motion.div>
          <span className="text-xs text-ivory-300 mt-2 font-sans tracking-wide">Waiting to hold you</span>
        </div>

        {/* Center Orbit Interactive Frequency Nodes */}
        <div className="relative z-20 flex flex-col gap-2.5 items-center justify-center max-w-[200px]">
          <span className="text-[10px] uppercase tracking-widest text-gold-400/70 font-sans mb-1">
            Lifelines of Our Universe
          </span>
          {nodes.map((node) => (
            <motion.button
              key={node.id}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedNodeId(node.id)}
              className="w-full px-3 py-1.5 rounded-full bg-midnight-950/70 border border-ivory-400/20 text-ivory-200 hover:border-gold-400/60 hover:text-white text-[11px] font-sans tracking-wider text-center backdrop-blur-md shadow-md transition-all flex items-center justify-center gap-1.5 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 group-hover:animate-ping" />
              <span>{node.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Right Node: BUJJAMMA */}
        <div className="relative z-20 flex flex-col items-center text-center mr-4 sm:ml-auto sm:mr-12">
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: 'easeInOut' }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-wine-900 to-rose-800 border-2 border-gold-400/60 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(223,183,108,0.3)]"
          >
            <span className="font-serif text-lg sm:text-xl text-ivory-100 font-normal">BUJJAMMA</span>
            <span className="text-[10px] text-gold-400 uppercase tracking-widest font-mono">My Heart</span>
          </motion.div>
          <span className="text-xs text-gold-400/90 mt-2 font-sans tracking-wide">Always on my mind</span>
        </div>
      </div>

      {/* Memory Modal for active frequency node */}
      {activeNode && (
        <PhotoLightbox
          isOpen={!!selectedNodeId}
          onClose={() => setSelectedNodeId(null)}
          title={activeNode.title}
          caption={`${activeNode.subtitle} — ${activeNode.description}`}
          placeholderText={activeNode.placeholderText}
        />
      )}
    </div>
  );
};
