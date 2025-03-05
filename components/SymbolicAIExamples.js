import React from 'react';
import { motion } from 'framer-motion';

const ExampleBox = ({ title, description, year, developer, impact, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border-l-4 border-blue-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
          {year}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{description}</p>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>შემქმნელი: {developer}</span>
        <span>{impact}</span>
      </div>
    </motion.div>
  );
};

const SymbolicAIExamples = () => {
  const examples = [
    {
      title: "ELIZA",
      year: "1966",
      developer: "ჯოზეფ ვეიზენბაუმი (MIT)",
      description: "ერთ-ერთი პირველი ჩატბოტი, რომელიც იყენებდა უბრალო პატერნის შესაბამისობას ფსიქოთერაპევტის საუბრის იმიტაციისთვის. ბევრმა მომხმარებელმა მიაწერა მას ადამიანური გაგების უნარი.",
      impact: "პირველი ნაბიჯი ბუნებრივი ენის დამუშავებაში"
    },
    {
      title: "SHRDLU",
      year: "1970",
      developer: "ტერი ვინოგრადი (MIT)",
      description: "პროგრამა, რომელიც იღებდა ბუნებრივი ენის ბრძანებებს კუბების სამყაროში მანიპულირებისთვის. დაამტკიცა, რომ შეზღუდულ დომენში შესაძლებელია ენის გაგება.",
      impact: "ბუნებრივი ენის გაგება შეზღუდულ კონტექსტში"
    },
    {
      title: "MYCIN",
      year: "1972",
      developer: "ედვარდ შორტლიფი (სტენფორდი)",
      description: "სამედიცინო ექსპერტული სისტემა, რომელიც იყენებდა 600-მდე წესს ბაქტერიული ინფექციების იდენტიფიცირებისთვის. ხშირად აღემატებოდა სიზუსტით დამწყებ ექიმებს.",
      impact: "ექსპერტული სისტემების მოძრაობის დასაწყისი"
    },
    {
      title: "DENDRAL",
      year: "1965",
      developer: "ედვარდ ფეიგენბაუმი (სტენფორდი)",
      description: "პირველი ექსპერტული სისტემა, რომელიც შეიქმნა ქიმიური ანალიზისთვის. ის იყენებდა მასს-სპექტრომეტრიის მონაცემებს ორგანული ნაერთების გასაანალიზებლად.",
      impact: "პირველი წარმატებული ექსპერტული სისტემა"
    },
    {
      title: "PROLOG",
      year: "1972",
      developer: "ალენ კოლმერო (მარსელის უნივერსიტეტი)",
      description: "ლოგიკური პროგრამირების ენა, რომელიც ფოკუსირებულია ფორმალურ ლოგიკაზე. ძირითადად გამოიყენებოდა AI კვლევისთვის, განსაკუთრებით ბუნებრივი ენის დამუშავებაში.",
      impact: "ლოგიკური პროგრამირების საფუძველი"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
      {examples.map((example, index) => (
        <ExampleBox 
          key={index}
          title={example.title}
          year={example.year}
          developer={example.developer}
          description={example.description}
          impact={example.impact}
          index={index}
        />
      ))}
    </div>
  );
};

export default SymbolicAIExamples;
