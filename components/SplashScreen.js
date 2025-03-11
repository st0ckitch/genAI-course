import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  // Set a timeout to trigger the completion callback
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // 5 seconds for the full animation experience
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          LLM მოდელების საფუძვლები
        </h1>
        <motion.div 
          className="h-1 bg-white rounded-full mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.p
        className="text-xl text-blue-100 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        მოდული 1: თანამედროვე AI-ის საფუძვლების გაცნობა
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
