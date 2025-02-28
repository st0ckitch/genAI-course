import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PromptComparisonProps {
  weakPrompt: string;
  strongPrompt: string;
  weakPoints: string[];
  strongPoints: string[];
}

const PromptComparison: React.FC<PromptComparisonProps> = ({
  weakPrompt,
  strongPrompt,
  weakPoints,
  strongPoints
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col md:flex-row gap-8 mt-8"
    >
      <motion.div variants={itemVariants} className="flex-1">
        <div className="text-xl font-semibold mb-4 text-center">სუსტი პრომფტი</div>
        <div className="bg-mediumGray p-6 rounded-md font-mono text-lg mb-6 border-l-4 border-lightGray">
          {weakPrompt}
        </div>
        <div className="text-lg mb-2">პრობლემები:</div>
        <ul className="text-lightGray list-disc list-inside space-y-2">
          {weakPoints.map((point, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={itemVariants} className="flex-1">
        <div className="text-xl font-semibold mb-4 text-center">ძლიერი პრომფტი</div>
        <div className="bg-mediumGray p-6 rounded-md font-mono text-lg mb-6 border-l-4 border-primary">
          {strongPrompt}
        </div>
        <div className="text-lg mb-2">უპირატესობები:</div>
        <ul className="text-lightGray list-disc list-inside space-y-2">
          {strongPoints.map((point, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.5 + (index * 0.1) }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default PromptComparison;
