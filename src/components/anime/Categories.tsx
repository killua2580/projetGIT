import React from 'react';
import { categories } from '../../data/animeData';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-transparent bg-clip-text">
            Explore Categories
          </span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover anime across different genres, each with its unique style and storytelling approach.
        </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category}
              className="group bg-gray-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-br hover:from-cyan-400/90 hover:to-emerald-500/90"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors">
                {category}
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-white/90 transition-colors">
                {Math.floor(Math.random() * 20) + 5} series
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;