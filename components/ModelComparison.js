import React from 'react';
import { motion } from 'framer-motion';

const ModelComparison = () => {
  const models = [

        {
      name: 'Gemini',
      company: 'Google',
      strengths: ['Google-ის სერვისებთან ინტეგრაცია', 'მულტიმოდალური შესაძლებლობები (Vision, Search)', 'ფაქტობრივი სიზუსტე'],
      weaknesses: ['ნაკლები შემოქმედებითობა', 'შეზღუდული პერსონალიზაციის შესაძლებლობები', 'ზოგადი დანიშნულების ნაკლებობა'],
      color: 'bg-red-500'
    },
        {
      name: 'Claude 3.7',
      company: 'Anthropic',
      strengths: ['ესმის მცირე ენები','საუკეთესოა დეველოპმენტისთვის', 'აქვს დიდი context window', 'დახვეწილი ინსტრუქციების მიყოლა'],
      weaknesses: ['ნაკლები დამხმარე შესაძლებლობები', 'შეზღუდული API', 'შედარებით ნაკლები ცოდნის საბაზა'],
      color: 'bg-purple-500'
    },
    {
      name: 'GPT-4.5',
      company: 'OpenAI',
      strengths: ['დოკუმენტების შექმნის შესაძლებლობა', 'მძლავრი ზოგადი დანიშნულების შესაძლებლობები', 'API-ს მრავალი use case', 'მულტიმოდალური ვერსიები (Vision, Search)'],
      weaknesses: ['უჭირს მცირე რესურსოვან ენებზე საუბარი', 'შედარებით მაღალი ღირებულება', 'დახურული მოდელი', 'გამჭვირვალობის ნაკლებობა'],
      color: 'bg-green-500'
    },
    {
      name: 'Llama 3',
      company: 'Meta',
      strengths: ['open-source წვდომა დეველოპერებისთვის', 'ლოკალური გაშვების შესაძლებლობა', 'აქტიური ეკოსისტემა'],
      weaknesses: ['უჭირს მცირე რესურსოვან ენებზე საუბარი', 'რესურსტევადი დიდი ვერსიებისთვის', 'პატარა context window'],
      color: 'bg-blue-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {models.map((model, index) => (
        <motion.div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          variants={itemVariants}
        >
          <div className={`${model.color} h-2`}></div>
          <div className="p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold">{model.name}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{model.company}</span>
            </div>
            
            <div className="mb-3">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">ძლიერი მხარეები:</h4>
              <ul className="list-disc list-inside text-sm">
                {model.strengths.map((strength, i) => (
                  <li key={i} className="mb-1">{strength}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-1">სუსტი მხარეები:</h4>
              <ul className="list-disc list-inside text-sm">
                {model.weaknesses.map((weakness, i) => (
                  <li key={i} className="mb-1">{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ModelComparison;
