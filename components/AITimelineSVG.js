import React from 'react';

const AITimelineSVG = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 300" 
      className="w-full h-auto max-w-4xl mx-auto my-6"
    >
      {/* Timeline line */}
      <line x1="100" y1="150" x2="700" y2="150" stroke="#0ea5e9" strokeWidth="4" />
      
      {/* 1950-1980 */}
      <circle cx="100" cy="150" r="15" fill="#0ea5e9" />
      <text x="100" y="120" textAnchor="middle" fontSize="14" fontWeight="bold">1950s</text>
      <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#4b5563">სიმბოლური AI</text>
      
      {/* 1990-2000 */}
      <circle cx="225" cy="150" r="15" fill="#0ea5e9" />
      <text x="225" y="120" textAnchor="middle" fontSize="14" fontWeight="bold">1990s</text>
      <text x="225" y="190" textAnchor="middle" fontSize="12" fill="#4b5563">სტატისტიკური მოდელები</text>
      
      {/* 2010-2015 */}
      <circle cx="350" cy="150" r="15" fill="#0ea5e9" />
      <text x="350" y="120" textAnchor="middle" fontSize="14" fontWeight="bold">2010-2015</text>
      <text x="350" y="190" textAnchor="middle" fontSize="12" fill="#4b5563">ღრმა სწავლება</text>
      
      {/* 2017 */}
      <circle cx="475" cy="150" r="15" fill="#0ea5e9" />
      <text x="475" y="120" textAnchor="middle" fontSize="14" fontWeight="bold">2017</text>
      <text x="475" y="190" textAnchor="middle" fontSize="12" fill="#4b5563">ტრანსფორმერები</text>
      
      {/* 2018-2023 */}
      <circle cx="600" cy="150" r="15" fill="#0ea5e9" />
      <text x="600" y="120" textAnchor="middle" fontSize="14" fontWeight="bold">2018-2023</text>
      <text x="600" y="190" textAnchor="middle" fontSize="12" fill="#4b5563">LLM ეპოქა</text>
      
      {/* 2024+ */}
      <circle cx="700" cy="150" r="15" fill="#0ea5e9" />
      <text x="700" y="120" textAnchor="middle" fontSize="14" fontWeight="bold">2024+</text>
      <text x="700" y="190" textAnchor="middle" fontSize="12" fill="#4b5563">მულტიმოდალური AI</text>
      
      {/* Key milestones */}
      <text x="100" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">ტიურინგის ტესტი</text>
      <text x="225" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">მანქანური სწავლება</text>
      <text x="350" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">CNN, RNN, LSTM</text>
      <text x="475" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">Attention is All You Need</text>
      <text x="600" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">GPT, BERT, T5</text>
      <text x="700" y="220" textAnchor="middle" fontSize="10" fill="#6b7280">GPT-4V, Gemini</text>
    </svg>
  );
};

export default AITimelineSVG;
