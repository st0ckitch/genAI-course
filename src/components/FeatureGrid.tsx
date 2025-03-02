import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Feature {
  title: string;
  description: string;
  examples?: string;
}

interface FeatureGridProps {
  features: Feature[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: true
  });

  const containerVariants = {
    hidden: { opacity: 0.9 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0.9, y: 20 },
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
      animate="visible" // Always animate to visible
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-mediumGray p-6 rounded-md relative"
          style={{ opacity: 1, visibility: 'visible' }}
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.3 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
            style={{ opacity: 1, visibility: 'visible' }}
          />
          <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
          <p className="text-lightGray mb-4">{feature.description}</p>
          {feature.examples && (
            <p className="text-sm mt-2">
              <span className="text-primary font-medium">მაგალითები:</span> {feature.examples}
            </p>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureGrid;
