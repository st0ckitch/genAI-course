import React from 'react';
import AITimeline from './AITimeline';
import ModelComparison from './ModelComparison';
import PromptEngineering from './PromptEngineering';
import TransformerSVG from './TransformerSVG';
import AIToolsGrid from './AIToolsGrid';
import ContentToolsComparison from './ContentToolsComparison';
import VisualContentShowcase from './VisualContentShowcase';

// Import new components for AI history slides
import SymbolicAIExamples from './SymbolicAIExamples';
import DeepLearningExamples from './DeepLearningExamples';
import LLMEvolutionTimeline from './LLMEvolutionTimeline';

// This component resolves and renders custom components from slide data
const ComponentResolver = ({ componentName, props = {} }) => {
  switch (componentName) {
    // Module 1 components
    case 'AITimeline':
      return <AITimeline />;
    case 'ModelComparison':
      return <ModelComparison />;
    case 'PromptEngineering':
      return <PromptEngineering />;
    case 'TransformerSVG':
      return <TransformerSVG />;
      
    // New AI history components
    case 'SymbolicAIExamples':
      return <SymbolicAIExamples />;
    case 'DeepLearningExamples':
      return <DeepLearningExamples />;
    case 'LLMEvolutionTimeline':
      return <LLMEvolutionTimeline />;
      
    // Module 2 components - original versions
    case 'AIToolsGrid':
      return <AIToolsGrid toolType={props.toolType || 'document'} />;
    case 'ContentToolsComparison':
      return <ContentToolsComparison />;
    case 'VisualContentShowcase':
      return <VisualContentShowcase />;
      
    default:
      return <div className="text-red-500">Component "{componentName}" not found</div>;
  }
};

export default ComponentResolver;
