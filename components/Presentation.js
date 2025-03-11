import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiMaximize, FiMenu } from 'react-icons/fi';
import Slide from './Slide';
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
          className="fixed top-20 right-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-4 z-50 w-72 max-h-96 overflow-y-auto"
        >
          <h3 className="text-lg font-bold mb-3">Navigation</h3>
          
          {/* Module Selector inside menu */}
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Select Module:</h4>
            <div className="flex gap-2">
              <button
                onClick={() => handleModuleChange(1)}
                className={`px-3 py-2 rounded flex-1 text-center text-sm ${
                  currentModule === 1 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Module 1: LLM Fundamentals
              </button>
              <button
                onClick={() => handleModuleChange(2)}
                className={`px-3 py-2 rounded flex-1 text-center text-sm ${
                  currentModule === 2 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Module 2: AI Tools
              </button>
            </div>
          </div>
          
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Current Module Slides:</h4>
          <ul className="space-y-1">
            {currentSlides.map((slide, index) => (
              <li key={index}>
                <button
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left px-3 py-2 rounded text-sm ${
                    currentSlide === index
                      ? 'bg-primary-500 text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {index + 1}. {slide.title.substring(0, 30)}{slide.title.length > 30 ? '...' : ''}
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
