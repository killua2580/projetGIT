import React from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import ParticleBackground from './ParticleBackground';
import FloatingElement from './FloatingElement';
import { useParallax } from '../../hooks/useScrollPosition';

const Hero: React.FC = () => {
  const parallaxOffset = useParallax(0.5);
  
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-pink-900"
    >
      <ParticleBackground />
      
      {/* Floating elements */}
      <FloatingElement className="top-1/4 left-1/5 text-pink-300" delay={0}>
        <Star className="w-8 h-8 animate-pulse" />
      </FloatingElement>
      <FloatingElement className="top-1/3 right-1/4 text-purple-300" delay={1.5}>
        <Sparkles className="w-6 h-6 animate-pulse" />
      </FloatingElement>
      <FloatingElement className="bottom-1/4 right-1/5 text-blue-300" delay={1}>
        <Star className="w-10 h-10 animate-pulse" />
      </FloatingElement>
      <FloatingElement className="bottom-1/3 left-1/4 text-pink-200" delay={0.5}>
        <Sparkles className="w-12 h-12 animate-pulse" />
      </FloatingElement>
      
      <div 
        className="container mx-auto px-4 z-10 text-center"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeIn">
          <span className="block">Thank You</span>
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            Ahlem Bedoui
          </span>
        </h1>
        
        <div className="flex justify-center items-center mb-8 animate-fadeIn animation-delay-300">
          <Heart className="text-pink-400 w-6 h-6 mr-2 animate-pulse" />
          <p className="text-xl md:text-2xl text-white font-light">
            For Your Passion and Dedication to Anime Culture
          </p>
          <Heart className="text-pink-400 w-6 h-6 ml-2 animate-pulse" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeIn animation-delay-600">
          <Button 
            variant="primary" 
            size="lg"
            icon={<Sparkles className="w-5 h-5" />}
          >
            Explore Gallery
          </Button>
          <Button 
            variant="outline" 
            size="lg"
          >
            About Ahlem
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#featured" 
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;