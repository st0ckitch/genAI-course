import React from 'react';

const TransformerSVG = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 600 400" 
      className="w-full h-auto max-w-3xl mx-auto my-6"
    >
      {/* Background */}
      <rect width="600" height="400" fill="#f8fafc" rx="10" ry="10" />
      
      {/* Encoder section */}
      <rect x="50" y="50" width="200" height="300" fill="#dbeafe" rx="8" ry="8" stroke="#0369a1" strokeWidth="2" />
      <text x="150" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0369a1">ენკოდერი</text>
      
      {/* Self-Attention block */}
      <rect x="75" y="80" width="150" height="60" fill="#bfdbfe" rx="5" ry="5" />
      <text x="150" y="115" textAnchor="middle" fontSize="14" fill="#1e40af">მულტი-თვითყურადღება</text>
      
      {/* Feed Forward block */}
      <rect x="75" y="170" width="150" height="60" fill="#bfdbfe" rx="5" ry="5" />
      <text x="150" y="205" textAnchor="middle" fontSize="14" fill="#1e40af">წინაგადამცემი ქსელი</text>
      
      {/* Add & Norm arrows */}
      <line x1="150" y1="140" x2="150" y2="170" stroke="#0369a1" strokeWidth="2" />
      <circle cx="150" cy="155" r="10" fill="#dbeafe" stroke="#0369a1" />
      <text x="150" y="159" textAnchor="middle" fontSize="12" fill="#0369a1">+</text>
      
      <line x1="150" y1="230" x2="150" y2="260" stroke="#0369a1" strokeWidth="2" />
      <circle cx="150" cy="245" r="10" fill="#dbeafe" stroke="#0369a1" />
      <text x="150" y="249" textAnchor="middle" fontSize="12" fill="#0369a1">+</text>
      
      {/* Decoder section */}
      <rect x="350" y="50" width="200" height="300" fill="#fef3c7" rx="8" ry="8" stroke="#ea580c" strokeWidth="2" />
      <text x="450" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#ea580c">დეკოდერი</text>
      
      {/* Masked Self-Attention block */}
      <rect x="375" y="80" width="150" height="60" fill="#fde68a" rx="5" ry="5" />
      <text x="450" y="115" textAnchor="middle" fontSize="14" fill="#b45309">მასკირებული თვითყურადღება</text>
      
      {/* Cross-Attention block */}
      <rect x="375" y="170" width="150" height="60" fill="#fde68a" rx="5" ry="5" />
      <text x="450" y="205" textAnchor="middle" fontSize="14" fill="#b45309">ჯვარედინი ყურადღება</text>
      
      {/* Feed Forward block in decoder */}
      <rect x="375" y="260" width="150" height="60" fill="#fde68a" rx="5" ry="5" />
      <text x="450" y="295" textAnchor="middle" fontSize="14" fill="#b45309">წინაგადამცემი ქსელი</text>
      
      {/* Decoder Add & Norm arrows */}
      <line x1="450" y1="140" x2="450" y2="170" stroke="#ea580c" strokeWidth="2" />
      <circle cx="450" cy="155" r="10" fill="#fef3c7" stroke="#ea580c" />
      <text x="450" y="159" textAnchor="middle" fontSize="12" fill="#ea580c">+</text>
      
      <line x1="450" y1="230" x2="450" y2="260" stroke="#ea580c" strokeWidth="2" />
      <circle cx="450" cy="245" r="10" fill="#fef3c7" stroke="#ea580c" />
      <text x="450" y="249" textAnchor="middle" fontSize="12" fill="#ea580c">+</text>
      
      {/* Connection between encoder and decoder */}
      <path d="M 250 115 C 300 115, 300 205, 375 205" fill="none" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,3" />
      <path d="M 250 205 C 300 205, 300 205, 375 205" fill="none" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,3" />
      
      {/* Input and Output */}
      <text x="150" y="370" textAnchor="middle" fontSize="16" fill="#0369a1">შეყვანა</text>
      <text x="450" y="370" textAnchor="middle" fontSize="16" fill="#ea580c">გამოტანა</text>
      
      {/* Arrows */}
      <path d="M 150 350 L 150 330" fill="none" stroke="#0369a1" strokeWidth="2" markerEnd="url(#arrowhead)" />
      <path d="M 450 330 L 450 350" fill="none" stroke="#ea580c" strokeWidth="2" markerEnd="url(#arrowhead)" />
      
      {/* Arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#4b5563" />
        </marker>
      </defs>
    </svg>
  );
};

export default TransformerSVG;
