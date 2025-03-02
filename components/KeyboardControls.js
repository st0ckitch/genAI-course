import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHelpCircle, FiX } from 'react-icons/fi';

const KeyboardControls = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const controlsList = [
    { key: 'Space / →', action: 'შემდეგი სლაიდი' },
    { key: '←', action: 'წინა სლაიდი' },
    { key: 'F', action: 'სრულეკრანიანი რეჟიმი' },
    { key: 'P', action: 'პრეზენტატორის რეჟიმი' },
    { key: 'M', action: 'სლაიდების მენიუ' },
  ];

  return (
    <>
      <button
        onClick={toggleVisibility}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
        aria-label="Keyboard controls help"
      >
        <FiHelpCircle />
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 left-6 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-64"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg">კლავიატურის კონტროლი</h3>
              <button 
                onClick={toggleVisibility}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <FiX />
              </button>
            </div>
            <ul className="space-y-2">
              {controlsList.map((control, index) => (
                <li key={index} className="flex justify-between">
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">
                    {control.key}
                  </kbd>
                  <span className="text-gray-700 dark:text-gray-300">{control.action}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default KeyboardControls;
