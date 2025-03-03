import React, { useState } from 'react';
import { motion } from 'framer-motion';

const examplePrompt = `მაღალი ხარისხის, ფოტორეალისტური გამოსახულება თბილისის ძველი ქალაქის ხედით, მტკვრის სანაპიროდან, მზის ჩასვლის დროს, ნარინჯისფერი ცის ფონზე, წინა პლანზე ადამიანები სეირნობენ.`;

const ExampleCard = ({ title, description, prompt, imageSrc, toolName, sampleImages, index, useCases }) => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
        {/* Image showcase */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* For demo purposes, we'll use colored divs instead of actual images */}
          <div 
            className="w-full h-full bg-gradient-to-br from-indigo-300 to-purple-400 flex items-center justify-center"
            style={{ 
              backgroundImage: `url('/api/placeholder/600/400')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className="px-3 py-1 bg-black/50 text-white rounded">{toolName} მიერ გენერირებული</span>
          </div>
        </div>
        
        {/* Image navigation dots */}
        {sampleImages && sampleImages.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {sampleImages.map((_, i) => (
              <button 
                key={i}
                className={`w-2 h-2 rounded-full ${i === activeImage ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setActiveImage(i)}
                aria-label={`Image ${i+1}`}
              />
            ))}
          </div>
        )}
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
        
        {useCases && (
          <div className="mb-3">
            <h4 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">გამოყენების შემთხვევები</h4>
            <div className="flex flex-wrap gap-1">
              {useCases.map((useCase, i) => (
                <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        )}
        
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

const PromptingTips = () => {
  return (
    <motion.div
      className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6 border border-blue-200 dark:border-blue-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="font-bold text-lg text-blue-800 dark:text-blue-300 mb-2">სურათების გენერაციის პრომფტების რჩევები</h3>
      <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 text-sm">
        <li>იყავით <strong>დეტალური და კონკრეტული</strong> - მიუთითეთ სცენა, სტილი, ფერები, განათება</li>
        <li>გამოიყენეთ <strong>მხატვრობის მიმდინარეობები</strong> (რეალიზმი, იმპრესიონიზმი, სიურეალიზმი)</li>
        <li>მიუთითეთ <strong>ტექნიკური დეტალები</strong> - გარჩევადობა, თანაფარდობა, ფოკუსი</li>
        <li>განსაზღვრეთ <strong>კომპოზიცია</strong> - წინა, შუა და უკანა პლანები</li>
        <li><strong>ექსპერიმენტი მოახდინეთ</strong> სხვადასხვა პრომფტებით და შეადარეთ შედეგები</li>
      </ul>
    </motion.div>
  );
};

const EnhancedVisualContentShowcase = () => {
  const examples = [
    {
      title: "ურბანული პეიზაჟი",
      description: "თბილისის ხედი, რომელიც აჩვენებს ქალაქის ტრადიციულ და თანამედროვე არქიტექტურის ნაზავს.",
      prompt: examplePrompt,
      toolName: "DALL-E 3",
      sampleImages: [1, 2, 3], // Placeholder for multiple samples
      useCases: ["ტურიზმი", "ვებგვერდი", "ბროშურა", "სოციალური მედია"]
    },
    {
      title: "პროდუქტის ვიზუალიზაცია",
      description: "კოსმეტიკური პროდუქტის 3D რენდერი, ბრენდირებით და ფოტორეალისტური დეტალებით.",
      prompt: "ფოტორეალისტური კოსმეტიკური კრემის ბოთლი, მინიმალისტური დიზაინით, თეთრი ფონი, სტუდიური განათება, მარკეტინგული გამოსახულება.",
      toolName: "Midjourney",
      sampleImages: [1, 2], // Placeholder for multiple samples
      useCases: ["ელ-კომერცია", "რეკლამა", "ბრენდინგი", "პროდუქტის პროტოტიპი"]
    },
    {
      title: "მარკეტინგული ბანერი",
      description: "სოციალური მედიის ბანერი ახალი პროდუქტის გამოშვებისთვის, კორპორატიული სტილით.",
      prompt: "სოციალური მედიის ბანერი ახალი სმარტფონის გამოშვებისთვის, მინიმალისტური დიზაინი, ლურჯი და თეთრი ფერები, პროდუქტი ცენტრში, ტექსტისთვის ადგილით.",
      toolName: "Canva AI",
      sampleImages: [1, 2, 3, 4], // Placeholder for multiple samples
      useCases: ["Facebook", "LinkedIn", "ვებსაიტი", "Email"]
    }
  ];

  return (
    <div className="space-y-6">
      <PromptingTips />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <ExampleCard 
            key={index}
            title={example.title}
            description={example.description}
            prompt={example.prompt}
            toolName={example.toolName}
            sampleImages={example.sampleImages}
            useCases={example.useCases}
            index={index}
          />
        ))}
      </div>
      
      <motion.div 
        className="mt-6 text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="font-semibold mb-2">როგორ ავირჩიოთ სწორი ინსტრუმენტი?</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          DALL-E 3 - ფოტორეალისტური გამოსახულებებისთვის და ზუსტი პრომფტის კონტროლისთვის<br />
          Midjourney - მხატვრული და შემოქმედებითი სტილის გამოსახულებებისთვის<br />
          Canva AI - მარტივი მარკეტინგული და ბიზნეს გრაფიკისთვის<br />
        </p>
      </motion.div>
    </div>
  );
};

export default EnhancedVisualContentShowcase;
