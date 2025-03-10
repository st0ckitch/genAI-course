import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiClock } from 'react-icons/fi';

const PromptEvaluator = ({ exerciseType = 'business', criteria = [], apiKey }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState(null);

  // Define evaluation criteria based on exercise type if not provided
  const defaultCriteria = {
    business: [
      'Clarity and specificity',
      'Role assignment',
      'Context provided',
      'Format specifications',
      'Relevant constraints'
    ],
    creative: [
      'Creative direction clarity',
      'Style specifications',
      'Target audience definition',
      'Examples provided',
      'Constraints and limitations'
    ],
    technical: [
      'Technical specificity',
      'Step-by-step instructions',
      'Expected output format',
      'Edge case handling',
      'Resource constraints'
    ]
  };

  const evaluationCriteria = criteria.length > 0 ? criteria : defaultCriteria[exerciseType] || defaultCriteria.business;

  // Simple evaluation without API
  const simulateEvaluation = (promptText) => {
    // Simple heuristics for prompt evaluation
    const lengthScore = Math.min(10, Math.max(1, Math.floor(promptText.length / 100)));
    const hasRole = /as a|as an|acting as|role of|perspective of/i.test(promptText) ? 8 : 4;
    const hasContext = /context|background|situation|scenario/i.test(promptText) ? 8 : 4;
    const hasFormat = /format|structure|organize|layout/i.test(promptText) ? 7 : 3;
    const hasExamples = /example|for instance|such as|like this/i.test(promptText) ? 9 : 5;
    
    const criteriaScores = evaluationCriteria.map(criterion => {
      let score = 5; // Default score
      
      if (/role|expert|perspective/i.test(criterion)) score = hasRole;
      else if (/context|background/i.test(criterion)) score = hasContext;
      else if (/format|structure|output/i.test(criterion)) score = hasFormat;
      else if (/example|sample/i.test(criterion)) score = hasExamples;
      else if (/specific|detail/i.test(criterion)) score = lengthScore;
      
      // Add some randomness to make it more realistic
      score = Math.max(1, Math.min(10, score + (Math.random() * 2 - 1)));
      
      return {
        criterion,
        score: Math.round(score),
        feedback: score > 7 ? "Well defined" : score > 4 ? "Adequate but could improve" : "Needs more detail"
      };
    });
    
    const overallScore = Math.round(criteriaScores.reduce((sum, item) => sum + item.score, 0) / criteriaScores.length);
    
    const suggestions = [
      "Be more specific about the desired outcome",
      "Add more context about the target audience",
      "Include examples of the style or format you want",
      "Assign a clearer role to the AI",
      "Specify the format for the output",
      "Add constraints or limitations",
      "Break down complex requests into steps"
    ].sort(() => Math.random() - 0.5);
    
    return {
      criteriaEvaluation: criteriaScores,
      overallScore,
      suggestions: suggestions.slice(0, 3),
      topStrength: hasRole > 5 ? "Good role assignment" : hasContext > 5 ? "Good context provision" : "Adequate length",
      topWeakness: hasRole <= 5 ? "Lacks clear role assignment" : hasContext <= 5 ? "Insufficient context" : "Could be more detailed"
    };
  };

  const evaluatePrompt = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt to evaluate');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // Simply use the simulation for now
      setTimeout(() => {
        setFeedback(simulateEvaluation(prompt));
        setIsLoading(false);
      }, 1500); // Add a short delay to simulate processing
    } catch (err) {
      setError(`Error evaluating prompt: ${err.message}`);
      setIsLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-500';
    if (score >= 5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getOverallScoreColor = (score) => {
    if (score >= 8) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    if (score >= 5) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Prompt Evaluator</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Enter your prompt below and get feedback on how effective it is.
        </p>
        
        <div className="mb-4">
          <textarea
            className="w-full min-h-[100px] p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            placeholder={`Enter your ${exerciseType} prompt here...`}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end mb-4">
          <button
            onClick={evaluatePrompt}
            disabled={isLoading || prompt.trim() === ''}
            className={`px-4 py-2 rounded-md text-white ${
              isLoading || prompt.trim() === '' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? 'Evaluating...' : 'Evaluate Prompt'}
          </button>
        </div>
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 dark:bg-red-900/30 p-4 rounded-md mb-4 text-red-800 dark:text-red-400"
          >
            <div className="flex items-start">
              <FiAlertTriangle className="mt-1 mr-2 flex-shrink-0" />
              <div>{error}</div>
            </div>
          </motion.div>
        )}
        
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center p-8"
          >
            <FiClock className="animate-spin text-blue-500 mr-2" />
            <span>Analyzing your prompt...</span>
          </motion.div>
        )}
        
        {feedback && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4"
          >
            {feedback.rawResponse ? (
              <div className="p-4 bg-gray-100 dark:bg-gray-900 rounded-md">
                <pre className="whitespace-pre-wrap text-sm">{feedback.rawResponse}</pre>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">Evaluation Results</h4>
                  <div className={`px-3 py-1 rounded-full ${getOverallScoreColor(feedback.overallScore)}`}>
                    Overall Score: {feedback.overallScore}/10
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Criteria Evaluation</h5>
                  <div className="space-y-2">
                    {feedback.criteriaEvaluation?.map((item, index) => (
                      <div key={index} className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                        <span>{item.criterion}</span>
                        <span className={getScoreColor(item.score)}>
                          {item.score}/10 - {item.feedback}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                    <h5 className="font-medium text-green-800 dark:text-green-400 mb-2">Top Strength</h5>
                    <p className="text-sm">{feedback.topStrength}</p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                    <h5 className="font-medium text-red-800 dark:text-red-400 mb-2">Top Weakness</h5>
                    <p className="text-sm">{feedback.topWeakness}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                  <h5 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Improvement Suggestions</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {feedback.suggestions?.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PromptEvaluator;
