import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { museumRooms } from '../data/museumData';
import { MuseumRoom } from './MuseumRoom';
import { MuseumItem } from '../types';
import { PhotoLightbox } from './PhotoLightbox';

export const Museum: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState<string>(museumRooms[0].id);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<MuseumItem | null>(null);

  const activeRoom = museumRooms.find((r) => r.id === activeRoomId) || museumRooms[0];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center my-6">
      {/* Wing / Room Selector Tabs */}
      <div className="w-full flex overflow-x-auto pb-3 mb-8 no-scrollbar justify-start sm:justify-center gap-2 px-2">
        {museumRooms.map((room) => {
          const isActive = room.id === activeRoomId;
          return (
            <button
              key={room.id}
              onClick={() => setActiveRoomId(room.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 shrink-0 ${
                isActive
                  ? 'bg-gold-400 text-midnight-950 font-semibold shadow-[0_0_15px_rgba(223,183,108,0.4)]'
                  : 'bg-midnight-900/60 border border-ivory-400/20 text-ivory-300 hover:border-ivory-400/40 hover:text-ivory-100'
              }`}
            >
              {room.name}
            </button>
          );
        })}
      </div>

      {/* Active Room Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRoom.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="w-full"
        >
          <MuseumRoom
            room={activeRoom}
            onSelectItem={(item) => setSelectedLightboxItem(item)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Fullscreen Lightbox */}
      {selectedLightboxItem && (
        <PhotoLightbox
          isOpen={!!selectedLightboxItem}
          onClose={() => setSelectedLightboxItem(null)}
          title={selectedLightboxItem.title}
          caption={selectedLightboxItem.caption}
          date={selectedLightboxItem.date}
          src={selectedLightboxItem.src}
          placeholderText={selectedLightboxItem.placeholderText}
          type={selectedLightboxItem.type}
        />
      )}
    </div>
  );
};
