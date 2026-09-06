import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Check } from 'lucide-react';
import { personalData } from '../data/personalData';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const BucketList: React.FC = () => {
  const { bucketList } = personalData.future;
  const [completedItems, setCompletedItems] = useLocalStorage<string[]>('bujjamma_bucket_list', []);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {bucketList.map((item, idx) => {
          const isSelected = completedItems.includes(item.id);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onClick={() => toggleItem(item.id)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between select-none ${
                isSelected
                  ? 'bg-wine-950/70 border-gold-400/60 shadow-[0_0_20px_rgba(223,183,108,0.2)]'
                  : 'bg-midnight-900/60 border-ivory-400/20 hover:border-ivory-400/40 hover:bg-midnight-900/80'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-gold-400/80 bg-gold-400/10 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>

                  <div
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-all ${
                      isSelected
                        ? 'border-gold-400 bg-gold-400/20 text-gold-300 font-medium'
                        : 'border-ivory-400/20 text-ivory-400/60'
                    }`}
                  >
                    <Heart size={12} className={isSelected ? 'fill-gold-400 text-gold-400' : ''} />
                    <span>SOMEDAY ❤️</span>
                  </div>
                </div>

                <h4 className="font-serif text-lg sm:text-xl text-ivory-100 font-medium mb-1">
                  {item.title}
                </h4>

                <p className="font-sans text-xs text-ivory-300/70 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-ivory-400/10 flex items-center justify-between text-[11px] text-ivory-400/50 font-sans">
                <span>Promise to keep</span>
                <span className="flex items-center gap-1">
                  {isSelected ? (
                    <span className="text-gold-400 flex items-center gap-1">
                      <Check size={12} /> Marked for our future
                    </span>
                  ) : (
                    'Tap to mark'
                  )}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
