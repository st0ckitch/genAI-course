import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Presentation from '../components/Presentation';
import SplashScreen from '../components/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Add a class to the body element for dark mode support
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    // Force scrollbars to always beimport React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Presentation from '../components/Presentation';
import SplashScreen from '../components/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Add a class to the body element for dark mode support
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    // Force scrollbars to always be visible to prevent layout shifts
    document.body.style.overflowY = 'scroll';
    
    // Prevent body from scrolling while maintaining scrollable slides
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <Presentation />
    </main>
  );
}
