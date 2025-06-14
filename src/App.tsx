import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import AnimeGrid from './components/anime/AnimeGrid';
import AnimeInfoSection from './components/anime/AnimeInfoSection';
import AnimeNews from './components/anime/AnimeNews';
import Categories from './components/anime/Categories';
import ThankYouProfessor from './components/professor/ThankYouProfessor';
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
    };  }, []);

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-900 dark:text-gray-100 dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
        <CustomCursor />
        <Header />
        <Hero />
        <AnimeGrid />
        <AnimeInfoSection />
        <AnimeNews />
        <ThankYouProfessor />
        <Categories />
        <About />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;