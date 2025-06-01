import React, { useState } from 'react';
import AnimeCard from './AnimeCard';
import { animeData, categories } from '../../data/animeData';

const AnimeGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredAnime = selectedCategory
    ? animeData.filter((anime) => anime.category === selectedCategory)
    : animeData;
  
  return (
    <section id="featured" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text">
            Featured Anime
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore Ahlem's carefully curated collection of anime masterpieces, 
          featuring stunning artwork and captivating storylines.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.slice(0, 8).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGrid;