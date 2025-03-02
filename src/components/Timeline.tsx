import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
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
        staggerChildren: 0.2,
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0.1 },
    visible: { 
      scaleY: 1,
      transition: { duration: 1.5 }
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

  const circleVariants = {
    hidden: { scale: 0.5 },
    visible: { 
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 200 }
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Always animate to visible
      className="relative mt-16 mb-16 max-w-4xl mx-auto"
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {/* Timeline line */}
      <motion.div 
        variants={lineVariants}
        className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-mediumGray transform -translate-x-1/2"
        style={{ height: '100%', transformOrigin: 'top', opacity: 1, visibility: 'visible' }}
      />

      {items.map((item, index) => (
        <div key={index} className={`flex mb-16 relative ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
          {/* Timeline circle */}
          <motion.div 
            variants={circleVariants}
            className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-primary"
            style={{ opacity: 1, visibility: 'visible' }}
          />
          
          {/* Content container */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`w-[45%] relative ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
            style={{ opacity: 1, visibility: 'visible' }}
          >
            <div className="bg-mediumGray p-6 rounded-md">
              <span className="text-primary font-bold text-lg block mb-2">{item.date}</span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-lightGray">{item.description}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Timeline;
