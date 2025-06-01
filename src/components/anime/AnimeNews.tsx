import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { animeNews } from '../../data/animeData';
import { AnimeNews } from '../../types';

const NewsCard: React.FC<{ news: AnimeNews; index: number }> = ({ news, index }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getDelayClass = (index: number) => {
    switch (index) {
      case 0: return '';
      case 1: return 'animation-delay-200';
      case 2: return 'animation-delay-400';
      case 3: return 'animation-delay-600';
      default: return 'animation-delay-800';
    }
  };

  return (    <article 
      className={`group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-400/20 animate-fadeIn cursor-pointer transform hover:scale-105 ${getDelayClass(index)}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-semibold rounded-full">
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-cyan-300 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(news.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{news.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
          {news.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {news.excerpt}
        </p>
        
        <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:text-emerald-400 transition-colors">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

const AnimeNewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-emerald-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 transform skew-y-1"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4 animate-fadeIn">
            Latest <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">Anime News</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-lg max-w-2xl mx-auto animate-fadeIn animation-delay-300">
            Stay updated with the latest happenings in the anime world, from industry news to cultural insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {animeNews.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimeNewsSection;
