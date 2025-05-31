import React from 'react';
import { Instagram, Twitter, Youtube, Twitch, Heart } from 'lucide-react';
import ContactForm from './ContactForm';
import { socialLinks } from '../../data/animeData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'twitch':
        return <Twitch className="w-5 h-5" />;
      default:
        return null;
    }
  };
  
  return (
    <footer id="contact" className="bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Ahlem Bedoui
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                 • Anime Enthusiast
              </span>
            </h2>
            
            <p className="text-white/80 mb-8 max-w-md">
              Join our community of anime lovers and stay updated with the latest news, 
              reviews, and exclusive content curated by Ahlem Bedoui.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 hover:scale-110 transform"
                  aria-label={link.platform}
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <ContactForm />
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © {currentYear} Ahlem Bedoui. All rights reserved.
          </p>
          
          <p className="text-white/60 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-pink-400" /> for anime fans everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;