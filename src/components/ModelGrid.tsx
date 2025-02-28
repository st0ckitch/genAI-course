import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Model {
  name: string;
  versions: string[];
  description: string;
}

interface ModelGridProps {
  models: Model[];
}

const ModelGrid: React.FC<ModelGridProps> = ({ models }) => {
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
        staggerChildren: 0.1,
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

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
    >
      {models.map((model, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="bg-mediumGray p-6 rounded-md flex flex-col h-full"
        >
          <h4 className="text-xl font-semibold mb-4">{model.name}</h4>
          <motion.ul 
            variants={listVariants}
            className="mb-4 space-y-2 list-disc list-inside flex-grow"
          >
            {model.versions.map((version, versionIndex) => (
              <motion.li key={versionIndex} variants={listItemVariants}>
                {version}
              </motion.li>
            ))}
          </motion.ul>
          <p className="text-sm text-lightGray">{model.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ModelGrid;
