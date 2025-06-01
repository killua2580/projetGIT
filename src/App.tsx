import { useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AnimeGrid from './components/anime/AnimeGrid';
import AnimeInfoSection from './components/anime/AnimeInfoSection';
import AnimeNews from './components/anime/AnimeNews';
import Categories from './components/anime/Categories';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import CustomCursor from './components/common/CustomCursor';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = 'Thank You Ahlem Bedoui | Anime Appreciation';
    
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
    return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <CustomCursor />
      <Header />
      <Hero />
      <AnimeGrid />
      <AnimeInfoSection />
      <AnimeNews />
      <Categories />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;