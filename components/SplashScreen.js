import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          LLM მოდელების საფუძვლები
        </h1>
        <motion.div 
          className="h-1 bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.p
        className="text-lg text-blue-100 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        მოდული 1: თანამედროვე AI-ის საფუძვლების გაცნობა
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
