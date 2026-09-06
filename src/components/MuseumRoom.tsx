import React from 'react';
import { MuseumRoomData, MuseumItem } from '../types';
import { MediaPlaceholder } from './MediaPlaceholder';

interface MuseumRoomProps {
  room: MuseumRoomData;
  onSelectItem: (item: MuseumItem) => void;
}

export const MuseumRoom: React.FC<MuseumRoomProps> = ({ room, onSelectItem }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Room Header */}
      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-ivory-100 font-light mb-2">
          {room.title}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-ivory-400/70 max-w-lg mx-auto leading-relaxed">
          {room.description}
        </p>
      </div>

      {/* Grid of Exhibit Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {room.items.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="flex flex-col group cursor-pointer"
          >
            <MediaPlaceholder
              type={item.type === 'video' ? 'video' : item.type === 'audio' ? 'audio' : 'photo'}
              title={item.placeholderText || item.title}
              subtitle={item.date}
              src={item.src}
              aspectRatio="square"
              className="w-full transition-all duration-300 group-hover:scale-[1.02]"
            />

            <div className="mt-3 px-1">
              <h4 className="font-serif text-base text-ivory-200 group-hover:text-gold-400 transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-ivory-400/60 line-clamp-2 mt-0.5">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
