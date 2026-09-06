import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface TimelineStage {
  title: string;
  description?: string;
}

interface TimelineProps {
  stages: TimelineStage[];
}

export const Timeline: React.FC<TimelineProps> = ({ stages }) => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center py-6">
      {stages.map((stage, idx) => {
        const isLast = idx === stages.length - 1;
        return (
          <React.Fragment key={idx}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`w-full p-4 sm:p-5 rounded-2xl border text-center transition-all duration-300 ${
                isLast
                  ? 'bg-wine-900/40 border-gold-400/40 shadow-[0_0_20px_rgba(223,183,108,0.2)]'
                  : 'bg-midnight-900/60 border-ivory-400/20'
              }`}
            >
              <h4
                className={`font-serif text-lg sm:text-xl ${
                  isLast ? 'text-gold-400 font-medium' : 'text-ivory-100'
                }`}
              >
                {stage.title}
              </h4>
              {stage.description && (
                <p className="text-xs font-sans text-ivory-400/70 mt-1">
                  {stage.description}
                </p>
              )}
            </motion.div>

            {!isLast && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 + 0.1 }}
                className="flex items-center justify-center my-1 text-ivory-400/40"
              >
                <ArrowDown size={18} className="animate-bounce" />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
