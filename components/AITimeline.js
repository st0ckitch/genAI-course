import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, index }) => {
  return (
    <motion.div 
      className="flex mb-8 relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>
        <div className="h-full w-0.5 bg-primary-200 dark:bg-primary-800" />
      </div>
      
      <div className="pb-4">
        <div className="flex items-baseline mb-1">
          <span className="text-primary-600 dark:text-primary-400 font-bold mr-2">{year}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const AITimeline = () => {
  const timelineData = [
    {
      year: '1950-1980',
      title: 'სიმბოლური AI',
      description: 'წესებზე დაფუძნებული სისტემები, ექსპერტთა სისტემები, ლოგიკური დასკვნა და ტიურინგის ტესტი.'
    },
    {
      year: '1990-2000',
      title: 'სტატისტიკური მიდგომები',
      description: 'მანქანური სწავლება, ადრეული ნეირონული ქსელები, ხელწერის ამოცნობა და თამაშების დამარცხება.'
    },
    {
      year: '2010-2015',
      title: 'ღრმა სწავლების რევოლუცია',
      description: 'CNN, RNN, LSTM და სხვა ღრმა არქიტექტურები; AlexNet, GAN-ები, Word2Vec.'
    },
    {
      year: '2017',
      title: 'ტრანსფორმერის გარღვევა',
      description: 'Google-ის ნაშრომი "Attention is All You Need" ცვლის NLP-ის სფეროს ტრანსფორმერის არქიტექტურით.'
    },
    {
      year: '2018-2023',
      title: 'LLM-ების ეპოქა',
      description: 'GPT სერია, BERT, T5, LLaMa და სხვა გიგანტური ენობრივი მოდელები; მასშტაბირების ეფექტები.'
    },
    {
      year: '2024-დღემდე',
      title: 'მულტიმოდალური AI',
      description: 'ტექსტის, სურათის, აუდიოს და ვიდეოს ინტეგრირებული მოდელები, მათ შორის DALL-E, Midjourney, GPT-4V და Gemini.'
    }
  ];

  return (
    <div className="py-4">
      <div className="space-y-2">
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={index} 
            year={item.year} 
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AITimeline;
