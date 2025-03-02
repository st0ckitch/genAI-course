import React, { useState, useEffect } from 'react';
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
  }, []);

  return (
    <main>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Presentation />
    </main>
  );
}
