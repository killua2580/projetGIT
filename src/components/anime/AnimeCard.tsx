import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { AnimeCardProps } from '../../types';

const AnimeCard: React.FC<AnimeCardProps> = ({ 
  title, 
  image, 
  category, 
  rating 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
      
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 w-full p-4 z-20">
        <div className="flex justify-between items-center mb-2">
          <span className="px-2 py-1 text-xs font-semibold bg-pink-500 text-white rounded-full">
            {category}
          </span>
          <div className="flex items-center text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-white text-sm">{rating}</span>
          </div>
        </div>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
      
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-pink-500/80 to-purple-600/80 flex items-center justify-center flex-col p-6 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } z-30`}
      >
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white text-center mb-4">
          A captivating anime series featuring stunning visuals and an engaging storyline.
        </p>
        <button className="px-4 py-2 bg-white text-pink-500 rounded-full font-semibold hover:bg-pink-100 transition-colors">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default AnimeCard;