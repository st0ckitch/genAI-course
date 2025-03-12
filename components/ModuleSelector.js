import React from 'react';
import { motion } from 'framer-motion';

const ModuleSelector = ({ currentModule, onModuleChange }) => {
  const modules = [
    {
      id: 1,
      title: "მოდული 1",
      subtitle: "LLM მოდელების საფუძვლები",
      color: "bg-[#f97171] hover:bg-[#e56060]",
      activeColor: "bg-[#e56060]"
    },
    {
      id: 2,
      title: "მოდული 2",
      subtitle: "AI ინსტრუმენტები პროდუქტიულობისთვის",
      color: "bg-gray-300 text-gray-500 cursor-not-allowed",
      activeColor: "bg-gray-400 text-gray-600 cursor-not-allowed"
    }
  ];

  return (
    <motion.div 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg p-1 flex"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {modules.map((module) => (
        <button
          key={module.id}
          onClick={() => module.id === 1 ? onModuleChange(module.id) : null}
          className={`flex flex-col items-center px-4 py-2 rounded-full transition-colors ${
            currentModule === module.id 
              ? module.activeColor
              : module.color
          }`}
        >
          <span className="font-medium">{module.title}</span>
          <span className="text-xs">{module.subtitle}</span>
        </button>
      ))}
    </motion.div>
  );
};

export default ModuleSelector;
