import React from 'react';
import AITimeline from './AITimeline';
import ModelComparison from './ModelComparison';
import PromptEngineering from './PromptEngineering';

// This component resolves and renders custom components from slide data
const ComponentResolver = ({ componentName }) => {
  switch (componentName) {
    case 'AITimeline':
      return <AITimeline />;
    case 'ModelComparison':
      return <ModelComparison />;
    case 'PromptEngineering':
      return <PromptEngineering />;
    default:
      return <div className="text-red-500">Component "{componentName}" not found</div>;
  }
};

export default ComponentResolver;
