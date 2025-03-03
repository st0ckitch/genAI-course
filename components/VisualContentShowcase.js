import React, { useState } from 'react';
import { motion } from 'framer-motion';

const examplePrompt = `მაღალი ხარისხის, ფოტორეალისტური გამოსახულება თბილისის ძველი ქალაქის ხედით, მტკვრის სანაპიროდან, მზის ჩასვლის დროს, ნარინჯისფერი ცის ფონზე, წინა პლანზე ადამიანები სეირნობენ.`;

const ExampleCard = ({ title, description, prompt, imageSrc, toolName, index }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
        {/* We're using a placeholder since we don't have actual generated images */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
          {/* For demo purposes, we'll use a colored div instead of an actual image */}
          <div 
            className="w-full h-full bg-gradient-to-br from-indigo-300 to-purple-400 flex items-center justify-center"
            style={{ backgroundImage: `url('/api/placeholder/600/400')` }}
          >
            <span className="px-3 py-1 bg-black/50 text-white rounded">{toolName} მიერ გენერირებული გამოსახულება</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full">
            {toolName}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {description}
        </p>
        
        <button
          onClick={() => setShowPrompt(!showPrompt)}
          className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center"
        >
          {showPrompt ? 'დამალე პრომფტი' : 'ნახე პრომფტი'} 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            {showPrompt ? 
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /> :
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            }
          </svg>
        </button>
        
        {showPrompt && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-md"
          >
            <h4 className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">პრომფტი:</h4>
            <p className="text-sm font-mono">{prompt}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const VisualContentShowcase = () => {
  const examples = [
    {
      title: "ურბანული პეიზაჟი",
      description: "თბილისის ხედი, რომელიც აჩვენებს ქალაქის ტრადიციულ და თანამედროვე არქიტექტურის ნაზავს.",
      prompt: examplePrompt,
      toolName: "DALL-E 3"
    },
    {
      title: "პროდუქტის ვიზუალიზაცია",
      description: "კოსმეტიკური პროდუქტის 3D რენდერი, ბრენდირებით და ფოტორეალისტური დეტალებით.",
      prompt: "ფოტორეალისტური კოსმეტიკური კრემის ბოთლი, მინიმალისტური დიზაინით, თეთრი ფონი, სტუდიური განათება, მარკეტინგული გამოსახულება.",
      toolName: "Midjourney"
    },
    {
      title: "მარკეტინგული ბანერი",
      description: "სოციალური მედიის ბანერი ახალი პროდუქტის გამოშვებისთვის, კორპორატიული სტილით.",
      prompt: "სოციალური მედიის ბანერი ახალი სმარტფონის გამოშვებისთვის, მინიმალისტური დიზაინი, ლურჯი და თეთრი ფერები, პროდუქტი ცენტრში, ტექსტისთვის ადგილით.",
      toolName: "Canva AI"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {examples.map((example, index) => (
        <ExampleCard 
          key={index}
          title={example.title}
          description={example.description}
          prompt={example.prompt}
          toolName={example.toolName}
          index={index}
        />
      ))}
    </div>
  );
};

export default VisualContentShowcase;
