import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  slides: { id: string; title: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState<string>(slides[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (const slide of slides) {
        const element = document.getElementById(slide.id);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
          setActiveSlide(slide.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides]);

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col gap-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(slide.id)}
            className="group relative flex items-center"
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          >
            <motion.div 
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSlide === slide.id ? 'bg-primary' : 'bg-lightGray bg-opacity-30'
              }`}
              whileHover={{ scale: 1.2 }}
            />
            <div className="invisible group-hover:visible ml-3 py-1 px-2 rounded-md bg-darkGray text-sm whitespace-nowrap">
              {slide.title}
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Navigation;
