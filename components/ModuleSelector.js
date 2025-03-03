import React from 'react';
import { motion } from 'framer-motion';

const ModuleSelector = ({ currentModule, onModuleChange }) => {
  const modules = [
    {
      id: 1,
      title: "მოდული 1",
      subtitle: "LLM მოდელების საფუძვლები",
      color: "bg-blue-600 hover:bg-blue-700",
      activeColor: "bg-blue-700"
    },
    {
      id: 2,
      title: "მოდული 2",
      subtitle: "AI ინსტრუმენტები პროდუქტიულობისთვის",
      color: "bg-green-600 hover:bg-green-700",
      activeColor: "bg-green-700"
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
          onClick={() => onModuleChange(module.id)}
          className={`flex flex-col items-center px-4 py-2 rounded-full transition-colors ${
            currentModule === module.id 
              ? module.activeColor + ' text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
