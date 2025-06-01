import React from 'react';
import { useParallax } from '../../hooks/useScrollPosition';

const About: React.FC = () => {
  const parallaxOffset = useParallax(0.3);
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-900 via-cyan-800 to-cyan-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white dark:text-gray-100 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/5746254/pexels-photo-5746254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      
      <div 
        className="container mx-auto px-4 relative z-10"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            About Ahlem Bedoui
          </h2>
          
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-lg p-8 shadow-xl dark:shadow-gray-900/50">
            <p className="text-lg mb-6 leading-relaxed">
              Ahlem Bedoui is a passionate anime enthusiast, curator, and cultural ambassador who has dedicated her life to celebrating and promoting the artistry of Japanese animation.
            </p>
            
            <p className="text-lg mb-6 leading-relaxed">
              With an exceptional eye for detail and a deep understanding of anime's cultural significance, Ahlem has built a community where fans can connect, share, and explore the rich tapestry of stories and visuals that make anime a unique art form.
            </p>
            
            <p className="text-lg leading-relaxed">
              Her dedication to preserving the authenticity of anime while making it accessible to new audiences has earned her recognition among fans and creators alike. This site is a tribute to her contributions and a gateway to the worlds she has helped others discover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;