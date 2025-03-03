import React from 'react';
import AITimeline from './AITimeline';
import ModelComparison from './ModelComparison';
import PromptEngineering from './PromptEngineering';
import TransformerSVG from './TransformerSVG';
import AIToolsGrid from './AIToolsGrid';
import ContentToolsComparison from './ContentToolsComparison';
import VisualContentShowcase from './VisualContentShowcase';

// Import enhanced components
import EnhancedAIToolsGrid from './EnhancedAIToolsGrid';
import EnhancedContentToolsComparison from './EnhancedContentToolsComparison';
import EnhancedVisualContentShowcase from './EnhancedVisualContentShowcase';

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
      
    // Module 2 components - original versions
    case 'AIToolsGrid':
      return <AIToolsGrid toolType={props.toolType || 'document'} />;
    case 'ContentToolsComparison':
      return <ContentToolsComparison />;
    case 'VisualContentShowcase':
      return <VisualContentShowcase />;
      
    // Enhanced Module 2 components
    case 'EnhancedAIToolsGrid':
      return <EnhancedAIToolsGrid toolType={props.toolType || 'document'} />;
    case 'EnhancedContentToolsComparison':
      return <EnhancedContentToolsComparison />;
    case 'EnhancedVisualContentShowcase':
      return <EnhancedVisualContentShowcase />;
      
    default:
      return <div className="text-red-500">Component "{componentName}" not found</div>;
  }
};

export default ComponentResolver;
