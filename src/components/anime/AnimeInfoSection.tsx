import React, { useState } from 'react';
import { Star, Calendar, Film, Building2, Play, Award } from 'lucide-react';
import { featuredAnimeInfo } from '../../data/animeData';
import { AnimeInfo } from '../../types';

const AnimeInfoCard: React.FC<{ anime: AnimeInfo; index: number }> = ({ anime, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDelayClass = (index: number) => {
    switch (index) {
      case 0: return '';
      case 1: return 'animation-delay-300';
      case 2: return 'animation-delay-600';
      default: return 'animation-delay-900';
    }
  };

  return (    <div 
      className={`bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-500 animate-fadeIn group cursor-pointer ${getDelayClass(index)}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={anime.image} 
          alt={anime.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full">
            <Star className="w-4 h-4 fill-current" />
            <span>{anime.rating}</span>
          </div>
        </div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold mb-2">{anime.title}</h3>
          <div className="flex flex-wrap gap-2">
            {anime.genre.slice(0, 3).map((genre, i) => (
              <span 
                key={i}
                className="px-2 py-1 bg-cyan-500/80 text-white text-xs rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {/* Meta Information */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-cyan-300">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{anime.year}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <Film className="w-4 h-4" />
            <span className="text-sm">{anime.episodes} episodes</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-300">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">{anime.studio}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300">
            <Award className="w-4 h-4" />
            <span className="text-sm">Top Rated</span>
          </div>
        </div>
        
        {/* Description */}
        <p className={`text-gray-300 leading-relaxed transition-all duration-300 ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
        }`}>
          {anime.description}
        </p>
        
        {/* Expand/Collapse Button */}
        <button 
          className="mt-4 text-cyan-400 hover:text-emerald-400 text-sm font-semibold transition-colors flex items-center gap-1"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <svg 
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const AnimeInfoSection: React.FC = () => {
  return (
    <section id="anime-info" className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-emerald-400 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-cyan-300 rounded-full animate-float animation-delay-600"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4 animate-fadeIn">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">Anime Info</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-lg max-w-2xl mx-auto animate-fadeIn animation-delay-300">
            Discover detailed information about the most beloved anime series and films that have shaped the industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredAnimeInfo.map((anime, index) => (
            <AnimeInfoCard key={anime.id} anime={anime} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105">
            Explore More Anime
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimeInfoSection;
