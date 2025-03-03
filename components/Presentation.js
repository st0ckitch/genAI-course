import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiMaximize, FiMenu } from 'react-icons/fi';
import Slide from './Slide';
import ThemeSwitch from './ThemeSwitch';
import KeyboardControls from './KeyboardControls';
import ModuleSelector from './ModuleSelector';
import { slides } from '../data/slides';
import { module2Slides } from '../data/module2-slides';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresenterMode, setIsPresenterMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState(1);
  
  // Get the slides for the current module
  const currentSlides = currentModule === 1 ? slides : module2Slides;
  const totalSlides = currentSlides.length;

  // Reset slide index when changing modules
  useEffect(() => {
    setCurrentSlide(0);
  }, [currentModule]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
      setIsMenuOpen(false);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen mode: ${e.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const togglePresenterMode = () => {
    setIsPresenterMode(!isPresenterMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleModuleChange = (moduleId) => {
    setCurrentModule(moduleId);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f') {
        toggleFullscreen();
      } else if (e.key === 'p') {
        togglePresenterMode();
      } else if (e.key === 'm') {
        toggleMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className={`slide-container ${isPresenterMode ? 'presenter-mode' : ''}`}>
      {/* Add the ModuleSelector component here */}
      <ModuleSelector currentModule={currentModule} onModuleChange={handleModuleChange} />
      
      {/* Add ThemeSwitch for light/dark mode */}
      <ThemeSwitch />
      
      {/* Add KeyboardControls for help */}
      <KeyboardControls />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Slide 
            content={currentSlides[currentSlide]} 
            slideNumber={currentSlide + 1} 
            totalSlides={totalSlides} 
          />
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 flex gap-3 z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full ${
            currentSlide === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-primary-600 text-white hover:bg-primary-700'
          } transition-colors`}
          aria-label="Previous slide"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`p-3 rounded-full ${
            currentSlide === totalSlides - 1 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-primary-600 text-white hover:bg-primary-700'
          } transition-colors`}
          aria-label="Next slide"
        >
          <FiArrowRight />
        </button>
      </div>

      <div className="fixed top-6 right-6 flex gap-3 z-50">
        <button
          onClick={toggleMenu}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          <FiMenu />
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          aria-label="Toggle fullscreen"
        >
          <FiMaximize />
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 z-50 w-60 max-h-96 overflow-y-auto"
        >
          <h3 className="text-lg font-bold mb-3">Slides</h3>
          <ul className="space-y-2">
            {currentSlides.map((slide, index) => (
              <li key={index}>
                <button
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left px-3 py-2 rounded ${
                    currentSlide === index
                      ? 'bg-primary-500 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {index + 1}. {slide.title.substring(0, 20)}{slide.title.length > 20 ? '...' : ''}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <div className="progress-bar" style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}></div>
    </div>
  );
};

export default Presentation;
