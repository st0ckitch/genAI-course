import React from 'react';
import AITimeline from './AITimeline';
import ModelComparison from './ModelComparison';
import PromptEngineering from './PromptEngineering';
import TransformerSVG from './TransformerSVG';

// This component resolves and renders custom components from slide data
const ComponentResolver = ({ componentName }) => {
  switch (componentName) {
    case 'AITimeline':
      return <AITimeline />;
    case 'ModelComparison':
      return <ModelComparison />;
    case 'PromptEngineering':
      return <PromptEngineering />;
    case 'TransformerSVG':
      return <TransformerSVG />;
    default:
      return <div className="text-red-500">Component "{componentName}" not found</div>;
  }
};

export default ComponentResolver;
