import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import ComponentResolver from './ComponentResolver';
import dynamic from 'next/dynamic';
import LogoComponent from './LogoComponent';

// Dynamic import with no SSR to avoid issues with missing dependencies
const PromptEvaluator = dynamic(
  () => import('./PromptEvaluator'),
  { 
    ssr: false,
    loading: () => <div className="p-4 text-center">Loading Prompt Evaluator...</div>
  }
);

const Slide = ({ content, slideNumber, totalSlides }) => {
  const { 
    title, 
    subtitle, 
    content: slideContent, 
    notes, 
    background, 
    type, 
    codeBlock, 
    component,
    interactivePrompt, // New property for interactive prompt evaluator
    promptConfig // Configuration for the prompt evaluator
  } = content;

  // Animation variants for slide elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const renderSlideContent = () => {
    // If there's a component specified, render that component
    if (component) {
      return (
        <motion.div
          variants={itemVariants}
          className="w-full"
        >
          <ComponentResolver 
            componentName={component} 
            props={content.componentProps || {}}
          />
        </motion.div>
      );
    }
    
    if (type === 'code' && codeBlock) {
      return (
        <div className="w-full overflow-hidden rounded-lg">
          <SyntaxHighlighter
            language={codeBlock.language || 'javascript'}
            style={nightOwl}
            showLineNumbers
            wrapLines
            className="text-sm md:text-base"
          >
            {codeBlock.code}
          </SyntaxHighlighter>
        </div>
      );
    }

    if (Array.isArray(slideContent)) {
      return slideContent.map((item, index) => {
        if (typeof item === 'string') {
          return (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-lg md:text-xl mb-4"
            >
              {item}
            </motion.p>
          );
        }

        if (item.type === 'list' && Array.isArray(item.items)) {
          return (
            <motion.ul
              key={index}
              variants={itemVariants}
              className="list-disc list-inside space-y-2 mb-6"
            >
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="text-lg md:text-xl">
                  {listItem}
                </li>
              ))}
            </motion.ul>
          );
        }

        if (item.type === 'numbered-list' && Array.isArray(item.items)) {
          return (
            <motion.ol
              key={index}
              variants={itemVariants}
              className="list-decimal list-inside space-y-2 mb-6"
            >
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="text-lg md:text-xl">
                  {listItem}
                </li>
              ))}
            </motion.ol>
          );
        }

        if (item.type === 'quote') {
          return (
            <motion.blockquote
              key={index}
              variants={itemVariants}
              className="border-l-4 border-primary-500 pl-4 italic my-6"
            >
              <p className="text-xl md:text-2xl">{item.text}</p>
              {item.author && (
                <footer className="text-right mt-2 text-gray-600 dark:text-gray-400">
                  — {item.author}
                </footer>
              )}
            </motion.blockquote>
          );
        }

        if (item.type === 'image') {
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="my-6 flex justify-center"
            >
              <img 
                src={item.src} 
                alt={item.alt || 'Slide image'} 
                className={`max-h-[60vh] object-contain ${item.className || ''}`}
              />
              {item.caption && (
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.caption}
                </p>
              )}
            </motion.div>
          );
        }

        return null;
      });
    }

    // Default case - just a text block
    return (
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl"
      >
        {slideContent}
      </motion.p>
    );
  };

  // Set background styles
  const backgroundStyle = {};
  if (background) {
    if (background.color) {
      backgroundStyle.backgroundColor = background.color;
    }
    if (background.image) {
      backgroundStyle.backgroundImage = `url(${background.image})`;
      backgroundStyle.backgroundSize = 'cover';
      backgroundStyle.backgroundPosition = 'center';
    }
    if (background.gradient) {
      backgroundStyle.backgroundImage = background.gradient;
    }
  }

  // Override background for the first slide to ensure text visibility
  const finalBackgroundStyle = slideNumber === 1 ? 
    { backgroundColor: 'white' } : backgroundStyle;
    
  return (
    <div 
      className="slide-content"
      style={finalBackgroundStyle}
    >
      {/* Add the logo component to ALL slides (removed the slideNumber condition) */}
      <LogoComponent />
      
      <motion.div
        className="max-w-6xl mx-auto w-full overflow-y-auto max-h-[85vh] pt-24" /* Added pt-24 (padding-top) to create space for the logo */
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {title && (
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: '#f97171' }} // Coral/salmon color like in the screenshot
          >
            {title}
          </motion.h1>
        )}
        
        {subtitle && (
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-8 text-gray-600"
          >
            {subtitle}
          </motion.h2>
        )}
        
        <motion.div 
          variants={containerVariants}
          className="slide-body"
        >
          {renderSlideContent()}
          
          {/* Add interactive prompt evaluator if specified */}
          {interactivePrompt && (
            <motion.div 
              variants={itemVariants}
              className="mt-8 mb-4"
            >
              <PromptEvaluator 
                exerciseType={promptConfig?.type || 'business'} 
                criteria={promptConfig?.criteria || []}
                apiKey={promptConfig?.apiKey}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      
      {notes && (
        <div className="presenter-notes">
          <h3 className="text-sm font-semibold mb-2">პრეზენტატორის შენიშვნები:</h3>
          <div className="text-sm">{notes}</div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-4 text-sm text-gray-500 dark:text-gray-400">
        {slideNumber} / {totalSlides}
      </div>
    </div>
  );
};

export default Slide;
