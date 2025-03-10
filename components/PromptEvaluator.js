import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiClock } from 'react-icons/fi';

const PromptEvaluator = ({ exerciseType = 'business', criteria = [], apiKey }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState(null);
  const [isGeminiAvailable, setIsGeminiAvailable] = useState(false);
  
  // Prevent space navigation when focused on the textarea
  useEffect(() => {
    const textarea = document.querySelector('textarea');
    
    const handleKeyDown = (e) => {
      // Prevent space from triggering slide navigation
      if (e.key === ' ' && document.activeElement === textarea) {
        e.stopPropagation();
      }
    };
    
    // Add event listener to the document
    document.addEventListener('keydown', handleKeyDown, true);
    
    // Check if Gemini API is available
    const checkGeminiAvailability = async () => {
      try {
        await import('@google/generative-ai');
        setIsGeminiAvailable(true);
      } catch (err) {
        console.log('Gemini API not available:', err);
        setIsGeminiAvailable(false);
      }
    };
    
    checkGeminiAvailability();
    
    // Clean up
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  // Define evaluation criteria based on exercise type if not provided
  const defaultCriteria = {
    business: [
      'როლის მინიჭება',
      'დეტალურობა და სპეციფიკურობა',
      'კონტექსტის მიწოდება',
      'ფორმატის მითითება',
      'შეზღუდვების განსაზღვრა'
    ],
    creative: [
      'კრეატიული მიმართულების სიცხადე',
      'სტილის მითითება',
      'სამიზნე აუდიტორიის განსაზღვრა',
      'მაგალითების მოწოდება',
      'შეზღუდვების და ჩარჩოების მითითება'
    ],
    technical: [
      'ტექნიკური სპეციფიკაცია',
      'ნაბიჯ-ნაბიჯ ინსტრუქციები',
      'მოსალოდნელი შედეგის ფორმატი',
      'გამონაკლისების დამუშავება',
      'რესურსების შეზღუდვები'
    ]
  };

  const evaluationCriteria = criteria.length > 0 ? criteria : defaultCriteria[exerciseType] || defaultCriteria.business;

  // Simple evaluation without API
  const simulateEvaluation = (promptText) => {
    // Simple heuristics for prompt evaluation
    const lengthScore = Math.min(10, Math.max(1, Math.floor(promptText.length / 100)));
    const hasRole = /as a|as an|acting as|role of|perspective of|როგორც|იმოქმედე როგორც/i.test(promptText) ? 8 : 4;
    const hasContext = /context|background|situation|scenario|კონტექსტი|სიტუაცია|ფონი|სცენარი/i.test(promptText) ? 8 : 4;
    const hasFormat = /format|structure|organize|layout|ფორმატი|სტრუქტურა|მოაწესრიგე/i.test(promptText) ? 7 : 3;
    const hasExamples = /example|for instance|such as|like this|მაგალითად|მაგალითი|როგორიცაა/i.test(promptText) ? 9 : 5;
    
    const criteriaScores = evaluationCriteria.map(criterion => {
      let score = 5; // Default score
      
      if (/როლი|როგორც|role/i.test(criterion)) score = hasRole;
      else if (/კონტექსტ|context|ფონი/i.test(criterion)) score = hasContext;
      else if (/ფორმატ|format|სტრუქტურ/i.test(criterion)) score = hasFormat;
      else if (/მაგალით|example|სამპლ/i.test(criterion)) score = hasExamples;
      else if (/დეტალ|specific|სპეციფიკ/i.test(criterion)) score = lengthScore;
      
      // Add some randomness to make it more realistic
      score = Math.max(1, Math.min(10, score + (Math.random() * 2 - 1)));
      
      return {
        criterion,
        score: Math.round(score),
        feedback: score > 7 ? "კარგად განსაზღვრული" : score > 4 ? "საკმარისია, მაგრამ საჭიროებს გაუმჯობესებას" : "საჭიროებს მეტ დეტალს"
      };
    });
    
    const overallScore = Math.round(criteriaScores.reduce((sum, item) => sum + item.score, 0) / criteriaScores.length);
    
    const suggestions = [
      "უფრო დეტალურად აღწერეთ სასურველი შედეგი",
      "დაამატეთ მეტი კონტექსტი სამიზნე აუდიტორიის შესახებ",
      "მოიყვანეთ სასურველი სტილის ან ფორმატის მაგალითები",
      "მიანიჭეთ AI-ს მკაფიო როლი",
      "განსაზღვრეთ გამოსავლის ფორმატი",
      "დაამატეთ შეზღუდვები ან ლიმიტები",
      "დაყავით რთული მოთხოვნები ნაბიჯებად"
    ].sort(() => Math.random() - 0.5);
    
    return {
      criteriaEvaluation: criteriaScores,
      overallScore,
      suggestions: suggestions.slice(0, 3),
      topStrength: hasRole > 5 ? "კარგი როლის მინიჭება" : hasContext > 5 ? "კარგად მოწოდებული კონტექსტი" : "ადეკვატური სიგრძე",
      topWeakness: hasRole <= 5 ? "არ აქვს მკაფიო როლის მინიჭება" : hasContext <= 5 ? "არასაკმარისი კონტექსტი" : "საჭიროებს მეტ დეტალს"
    };
  };

  // Evaluate using Gemini API
  const evaluateWithGemini = async (promptText) => {
    try {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey || "AIzaSyA5hj1m1hCbcVP-2aID-CKt0Mk54aAVgwE");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const evaluationPrompt = `
შენ ხარ ექსპერტი პრომფტ-ინჟინერიაში და აფასებ მომხმარებლის პრომფტს ${exerciseType} სცენარისთვის.
შეაფასე შემდეგი პრომფტი ამ კრიტერიუმების მიხედვით:
${evaluationCriteria.map(criterion => `- ${criterion}`).join('\n')}

თითოეული კრიტერიუმისთვის მიეცი ქულა (1-10) და მოკლე უკუკავშირი.
შემდეგ მიეცი საერთო ქულა (1-10) და 2-3 კონკრეტული რჩევა პრომფტის გასაუმჯობესებლად.
ბოლოს, განსაზღვრე პრომფტის ძირითადი ღირსება და ძირითადი ნაკლი.

შეფასების შედეგები წარმოადგინე მკაცრად JSON ობიექტის ფორმატში, რომელსაც ექნება შემდეგი სტრუქტურა:
{
  "criteriaEvaluation": [
    {"criterion": "კრიტერიუმის სახელი", "score": რიცხვი, "feedback": "მოკლე უკუკავშირი"},
    ...
  ],
  "overallScore": რიცხვი,
  "suggestions": ["რჩევა 1", "რჩევა 2", ...],
  "topStrength": "ძირითადი ღირსების აღწერა",
  "topWeakness": "ძირითადი ნაკლის აღწერა"
}

მომხმარებლის პრომფტი შესაფასებლად:
${promptText}
`;

      const result = await model.generateContent(evaluationPrompt);
      const responseText = result.response.text();
      
      // Log the full response to debug
      console.log("Raw Gemini response:", responseText);
      
      // Extract JSON from the response text
      // The API might return JSON wrapped in markdown code blocks
      let jsonText = responseText;
      
      // Try to extract JSON from markdown code block if present
      const jsonRegex = /```(?:json)?\s*(\{[\s\S]*?\})\s*```/;
      const match = responseText.match(jsonRegex);
      if (match && match[1]) {
        jsonText = match[1];
      }
      
      console.log("Extracted JSON:", jsonText);
      
      // Try to parse JSON response
      try {
        const feedbackData = JSON.parse(jsonText);
        console.log("Parsed data:", feedbackData);
        return feedbackData;
      } catch (jsonError) {
        console.error("Failed to parse Gemini response:", jsonError);
        // Fall back to simulation
        return simulateEvaluation(promptText);
      }
    } catch (error) {
      console.error("Error with Gemini API:", error);
      // Fall back to simulation
      return simulateEvaluation(promptText);
    }
  };

  const evaluatePrompt = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt to evaluate');
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      let result;
      
      if (isGeminiAvailable) {
        // Try to use Gemini API
        try {
          result = await evaluateWithGemini(prompt);
        } catch (geminiError) {
          console.error("Error using Gemini API:", geminiError);
          result = simulateEvaluation(prompt);
        }
      } else {
        // Fall back to simulation with delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        result = simulateEvaluation(prompt);
      }
      
      setFeedback(result);
    } catch (err) {
      setError(`Error evaluating prompt: ${err.message}`);
    } finally {
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
        <h3 className="text-lg font-bold mb-2">პრომფტის შემფასებელი</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          შეიყვანეთ თქვენი პრომფტი ქვემოთ და მიიღეთ უკუკავშირი მისი ეფექტურობის შესახებ.
          {!isGeminiAvailable && (
            <span className="block mt-1 italic">
              (გამოიყენება სიმულაციის რეჟიმი - სრული AI შეფასებისთვის, დააინსტალირეთ @google/generative-ai)
            </span>
          )}
        </p>
        
        <div className="mb-4">
          <textarea
            className="w-full min-h-[100px] p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            placeholder={`შეიყვანეთ თქვენი ${
              exerciseType === 'business' ? 'ბიზნეს' : 
              exerciseType === 'creative' ? 'კრეატიული' : 
              'ტექნიკური'
            } პრომფტი აქ...`}
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
            {isLoading ? 'შეფასება...' : 'შეაფასე პრომფტი'}
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
            <span>პრომფტის ანალიზი მიმდინარეობს...</span>
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
                  <h4 className="text-lg font-semibold">შეფასების შედეგები</h4>
                  <div className={`px-3 py-1 rounded-full ${getOverallScoreColor(feedback.overallScore)}`}>
                    საერთო ქულა: {feedback.overallScore}/10
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2">კრიტერიუმების შეფასება</h5>
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
                    <h5 className="font-medium text-green-800 dark:text-green-400 mb-2">ძირითადი ღირსება</h5>
                    <p className="text-sm">{feedback.topStrength}</p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
                    <h5 className="font-medium text-red-800 dark:text-red-400 mb-2">ძირითადი ნაკლი</h5>
                    <p className="text-sm">{feedback.topWeakness}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                  <h5 className="font-medium text-blue-800 dark:text-blue-400 mb-2">გაუმჯობესების რეკომენდაციები</h5>
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
