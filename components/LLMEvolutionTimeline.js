import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, parameterCount, breakthrough, index, isLeft }) => {
  const formatParams = (count) => {
    if (count >= 1e9) {
      return `${(count / 1e9).toFixed(count < 10e9 ? 1 : 0)}B`;
    } else if (count >= 1e6) {
      return `${(count / 1e6).toFixed(0)}M`;
    } else {
      return `${count.toLocaleString()}`;
    }
  };

  return (
    <motion.div 
      className={`flex mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Center line with year bubble */}
      <div className="flex-none w-20 relative">
        <div className="h-full w-0.5 bg-blue-300 dark:bg-blue-700 absolute left-1/2"></div>
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white absolute top-0 left-1/2 transform -translate-x-1/2 font-bold text-sm">
          {year}
        </div>
      </div>
      
      {/* Content box */}
      <div className={`flex-grow ${isLeft ? 'ml-4' : 'mr-4'} bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{title}</h3>
          {parameterCount && (
            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
              {formatParams(parameterCount)} პარამეტრი
            </span>
          )}
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{description}</p>
        
        {breakthrough && (
          <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-md border-l-4 border-blue-500">
            <span className="block text-xs font-semibold mb-1 text-blue-800 dark:text-blue-300">გარღვევა:</span>
            <p className="text-sm text-blue-900 dark:text-blue-200">{breakthrough}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const LLMEvolutionTimeline = () => {
  const timelineData = [
    {
      year: "2018",
      title: "BERT",
      description: "Bidirectional Encoder Representations from Transformers - Google-ის ენკოდერ-ტიპის მოდელი, რომელიც იყენებს ორი მიმართულებით კონტექსტის დამუშავებას.",
      parameterCount: 340000000,
      breakthrough: "ბიდირექციული კონტექსტის გამოყენება შერჩევისას, რამაც მნიშვნელოვნად გააუმჯობესა NLP ამოცანების შედეგები."
    },
    {
      year: "2019",
      title: "GPT-2",
      description: "OpenAI-ის დეკოდერ-ტიპის მოდელი, უნივერსალური, არასპეციფიური ტრანსფორმერი, რომელსაც შეეძლო შთამბეჭდავი ტექსტის გენერაცია.",
      parameterCount: 1500000000,
      breakthrough: "კოჰერენტული, გრძელი ტექსტის გენერაცია, რამაც გამოიწვია დებატები ეთიკაზე და ზოგიერთი ვერსიის გამოშვების შეფერხება."
    },
    {
      year: "2020",
      title: "GPT-3",
      description: "OpenAI-ის რევოლუციური მოდელი, რომელმაც აჩვენა 'ემერჯენტული' თვისებები - უნარები, რომლებიც არ იყო კონკრეტულად დაგეგმილი.",
      parameterCount: 175000000000,
      breakthrough: "Few-shot და zero-shot სწავლება, რომლის დროსაც მოდელმა შეძლო ახალი ამოცანების შესრულება მცირე ან ნულოვანი მაგალითებით."
    },
    {
      year: "2021",
      title: "DALL-E",
      description: "OpenAI-ის ტექსტიდან-გამოსახულებისკენ მოდელი, GPT-3-ის ვარიანტი, რომელიც ქმნის გამოსახულებებს ტექსტური აღწერილობიდან.",
      parameterCount: 12000000000,
      breakthrough: "მულტიმოდალური AI-ის დასაწყისი, რომელსაც შეეძლო ტექსტიდან გამოსახულებების შექმნა კონცეპტუალური გაგებით."
    },
    {
      year: "2022",
      title: "ChatGPT",
      description: "GPT-3.5-ზე დაფუძნებული დიალოგური ინტერფეისი, რომელიც ოპტიმიზირებულია კონვერსაციისთვის RLHF (მანქანური სწავლება ადამიანის უკუკავშირით) გამოყენებით.",
      parameterCount: null,
      breakthrough: "AI ჩატბოტების მასობრივი ადოპტაცია - ChatGPT გახდა ისტორიაში ყველაზე სწრაფად მზარდი მომხმარებლების ბაზის მქონე აპლიკაცია."
    },
    {
      year: "2023",
      title: "GPT-4 და მულტიმოდალობა",
      description: "OpenAI-ის მოდელი ტექსტისა და გამოსახულებების გაგების შესაძლებლობით; გაუმჯობესებული მსჯელობით და ნაკლები ჰალუცინაციებით.",
      parameterCount: null,
      breakthrough: "მულტიმოდალური გაგება და გამოსახულებების დამუშავება; სხვადასხვა დომენში ექსპერტების დონის პასუხები."
    },
    {
      year: "2023",
      title: "Llama 2 და ღია მოდელები",
      description: "Meta-ს ღია წვდომის მოდელი, რომელიც ხელმისაწვდომია კვლევისა და კომერციული გამოყენებისთვის.",
      parameterCount: 70000000000,
      breakthrough: "მაღალი ხარისხის LLM-ების დემოკრატიზაცია და ლოკალურად გაშვების შესაძლებლობა."
    }
  ];

  return (
    <div className="py-8 px-4 relative max-w-3xl mx-auto">
      {/* Main timeline with alternating items */}
      <div className="relative">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            parameterCount={item.parameterCount}
            breakthrough={item.breakthrough}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default LLMEvolutionTimeline;
