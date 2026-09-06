import React, { useState } from 'react';
import { Utensils, Wallet, MapPin, AlarmClock, HeartPulse, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/personalData';

export const CareCard: React.FC = () => {
  const { cards, motherlyQuote } = personalData.herCare;
  const [openedCardIds, setOpenedCardIds] = useState<string[]>([]);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    if (!openedCardIds.includes(id)) {
      setOpenedCardIds((prev) => [...prev, id]);
    }
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  const allOpened = openedCardIds.length >= cards.length;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Utensils':
        return <Utensils size={20} className="text-gold-400" />;
      case 'Wallet':
        return <Wallet size={20} className="text-emerald-400" />;
      case 'MapPin':
        return <MapPin size={20} className="text-rose-400" />;
      case 'AlarmClock':
        return <AlarmClock size={20} className="text-amber-400" />;
      case 'HeartPulse':
      default:
        return <HeartPulse size={20} className="text-rose-500" />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center my-6">
      {/* Progress counter */}
      <div className="flex items-center gap-2 mb-6 text-xs text-ivory-400/80 font-sans tracking-wider">
        <span>Tap each care dimension:</span>
        <span className="text-gold-400 font-mono font-medium">
          [{openedCardIds.length} / {cards.length} explored]
        </span>
      </div>

      {/* Accordion / Expandable Care Cards */}
      <div className="w-full flex flex-col gap-3">
        {cards.map((card, idx) => {
          const isOpen = activeCardId === card.id;
          const isOpenedBefore = openedCardIds.includes(card.id);

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-midnight-900/90 border-gold-400/50 shadow-[0_0_25px_rgba(223,183,108,0.15)]'
                  : 'bg-midnight-900/50 border-ivory-400/20 hover:border-ivory-400/40'
              }`}
            >
              {/* Card Header Click Target */}
              <button
                onClick={() => toggleCard(card.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-midnight-800 border border-ivory-400/10 flex items-center justify-center shrink-0">
                    {getIcon(card.iconName)}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-ivory-100 font-medium tracking-wide">
                      "{card.question}"
                    </h4>
                    <span className="text-xs text-ivory-400/60 font-sans">
                      {card.shortLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {isOpenedBefore && (
                    <CheckCircle2 size={16} className="text-gold-400/80" />
                  )}
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={18} className="text-ivory-400/60" />
                  </motion.div>
                </div>
              </button>

              {/* Card Body Reveal */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-ivory-400/10 px-5 pb-5 pt-3 bg-midnight-950/40"
                  >
                    <p className="font-serif italic text-sm sm:text-base text-ivory-200/90 leading-relaxed pl-14">
                      {card.response}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Culminating Motherly Quote Reveal */}
      <AnimatePresence>
        {allOpened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-wine-950/60 via-midnight-900/80 to-wine-950/60 border border-gold-400/40 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold-400/5 blur-2xl pointer-events-none" />
            <span className="text-xs uppercase tracking-widest text-gold-400 font-sans block mb-2">
              Unspoken Truth
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-ivory-100 font-light leading-relaxed">
              "{motherlyQuote}"
            </blockquote>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
