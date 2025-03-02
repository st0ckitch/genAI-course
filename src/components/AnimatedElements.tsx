import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animated heading component
export const AnimatedHeading = ({ 
  children, 
  className = "",
  delay = 0,
  type = "h2"
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  type?: "h1" | "h2" | "h3" | "h4";
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    // Add this to make animations more reliable
    initialInView: true 
  });

  const variants = {
    hidden: { opacity: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay,
      }
    }
  };

  const HeadingTag = type;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible" // Always animate to visible
      variants={variants}
      className={className}
      // Add a fallback style to ensure content is visible even if animations fail
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {React.createElement(HeadingTag, {}, children)}
    </motion.div>
  );
};

// Animated text component
export const AnimatedText = ({ 
  children, 
  className = "",
  delay = 0.2
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: true
  });

  const variants = {
    hidden: { opacity: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      }
    }
  };

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate="visible" // Always animate to visible
      variants={variants}
      className={className}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {children}
    </motion.p>
  );
};

// Animated card component
export const AnimatedCard = ({ 
  children, 
  className = "",
  delay = 0.3,
  index = 0
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  index?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: true
  });

  const variants = {
    hidden: { opacity: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay + (index * 0.1),
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate="visible" // Always animate to visible
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {children}
    </motion.div>
  );
};

// Animated list
export const AnimatedList = ({ 
  items, 
  className = "",
  itemClassName = "",
  delay = 0.2,
  staggerDelay = 0.1
}: { 
  items: ReactNode[]; 
  className?: string;
  itemClassName?: string;
  delay?: number;
  staggerDelay?: number;
}) => {
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
        delayChildren: delay,
        staggerChildren: staggerDelay,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0.9, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.ul
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Always animate to visible
      className={className}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {items.map((item, index) => (
        <motion.li 
          key={index} 
          variants={itemVariants} 
          className={itemClassName}
          style={{ opacity: 1, visibility: 'visible' }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

// Animated grid component
export const AnimatedGrid = ({ 
  children, 
  className = "",
  delay = 0.3,
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) => {
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
        delayChildren: delay,
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate="visible" // Always animate to visible
      className={className}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {children}
    </motion.div>
  );
};

// Animated grid item
export const AnimatedGridItem = ({ 
  children, 
  className = "",
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  const variants = {
    hidden: { opacity: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
      style={{ opacity: 1, visibility: 'visible' }}
    >
      {children}
    </motion.div>
  );
};
