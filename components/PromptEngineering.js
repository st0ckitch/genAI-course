import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PromptExample = ({ title, badPrompt, goodPrompt, explanation }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="p-4 bg-primary-100 dark:bg-primary-900 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-primary-600 dark:text-primary-400">
          {isExpanded ? '▲' : '▼'}
        </span>
      </div>
      
      {isExpanded && (
        <div className="p-4">
          <div className="mb-4">
            <h4 className="text-red-600 dark:text-red-400 font-medium mb-2">არაეფექტური პრომფტი:</h4>
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
              <p className="text-sm font-mono">{badPrompt}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-green-600 dark:text-green-400 font-medium mb-2">ეფექტური პრომფტი:</h4>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
              <p className="text-sm font-mono">{goodPrompt}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">განმარტება:</h4>
            <p className="text-sm">{explanation}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const PromptEngineering = () => {
  const promptExamples = [
    {
      title: "როლისა და კონტექსტის მინიჭება",
      badPrompt: "დამიწერე სტატია ციფრულ მარკეტინგზე.",
      goodPrompt: "წარმოიდგინე, რომ ხარ ციფრული მარკეტინგის ექსპერტი 10 წლიანი გამოცდილებით. დაწერე ინფორმაციული სტატია მცირე ბიზნესებისთვის სოციალური მედიის მარკეტინგის შესახებ, რომელიც მოიცავს პრაქტიკულ რჩევებს შეზღუდული ბიუჯეტის პირობებში.",
      explanation: "ეფექტური პრომფტი განსაზღვრავს კონკრეტულ როლს (ექსპერტი), სამიზნე აუდიტორიას (მცირე ბიზნესები) და კონტექსტს (შეზღუდული ბიუჯეტი), რაც იძლევა უფრო კონკრეტულ და ღირებულ შედეგს."
    },
    {
      title: "ინსტრუქციების დეტალიზაცია",
      badPrompt: "შექმენი მარკეტინგული გეგმა.",
      goodPrompt: "შექმენი 3-თვიანი მარკეტინგული გეგმა ახალი საცხობისთვის თბილისში. გეგმა უნდა მოიცავდეს: 1) სამიზნე აუდიტორიის ანალიზს, 2) სოციალური მედიის სტრატეგიას ბიუჯეტით 1000 ლარი, 3) გრანდ-ოფენინგის ღონისძიების იდეებს, 4) ადგილობრივ პარტნიორობის შესაძლებლობებს. წარმოადგინე შედეგები ნათელი სექციებით და ბულეტ-პოინტებით.",
      explanation: "დეტალური ინსტრუქციები (მკაფიოდ გამოყოფილი სექციებით, კონკრეტული ბიუჯეტით, დროის ჩარჩოთი და ფორმატით) იძლევა უფრო სტრუქტურირებულ და მიზანმიმართულ შედეგს."
    },
    {
      title: "Few-shot სწავლება ნიმუშებით",
      badPrompt: "შექმენი ელ.ფოსტის შაბლონი.",
      goodPrompt: "შექმენი კლიენტების მადლობის ელ.წერილის შაბლონი, რომელიც გამოიყენება პროდუქტის შესყიდვის შემდეგ. აი, მაგალითი შაბლონის სტილისთვის: 'ძვირფასო [სახელი], გმადლობთ ჩვენი [პროდუქტი]-ის შეძენისთვის! ჩვენ ვაფასებთ თქვენს ნდობას და ვიმედოვნებთ, რომ ის გაამართლებს თქვენს მოლოდინებს. აი რამდენიმე რჩევა, როგორ მიიღოთ მაქსიმალური სარგებელი...'",
      explanation: "ნიმუშების მიწოდება LLM-ისთვის (few-shot სწავლება) ეხმარება მოდელს უკეთ გაიგოს სასურველი სტილი, ტონი და ფორმატი, რაც იძლევა უფრო შესაბამის შედეგს."
    },
    {
      title: "ეტაპობრივი მსჯელობის მოთხოვნა",
      badPrompt: "მითხარი, იქნება თუ არა ეს ბიზნეს იდეა წარმატებული.",
      goodPrompt: "გააანალიზე შემდეგი ბიზნეს იდეა: მობილური აპლიკაცია ადგილობრივი ფერმერების ბაზრებისთვის. ნაბიჯ-ნაბიჯ შეაფასე: 1) სამიზნე ბაზრის პოტენციალი, 2) კონკურენტული გარემო, 3) შემოსავლის პოტენციური ნაკადები, 4) ძირითადი გამოწვევები და 5) განხორციელებადობის შეფასება. ყოველი ანალიზის შემდეგ, გამოიტანე კონკრეტული დასკვნა, ვიდრე საბოლოო შეფასებას გააკეთებდე.",
      explanation: "ეტაპობრივი მსჯელობის მოთხოვნა LLM-ებისგან ამცირებს ლოგიკურ შეცდომებს და იძლევა უფრო გააზრებულ, ღრმა ანალიზს, ვიდრე მარტივი დადასტურება/უარყოფის პასუხს."
    },
    {
      title: "გამოსავლის ფორმატის განსაზღვრა",
      badPrompt: "დამიწერე კვირის მენიუ.",
      goodPrompt: "შემიქმენი ერთი კვირის ჯანსაღი კვების მენიუ JSON ფორმატში. ყოველი დღისთვის უნდა იყოს სამი კვება (საუზმე, სადილი, ვახშამი), თითოეული კერძის კალორიებით და მომზადების დროით. გაითვალისწინე მედიტერანული დიეტის პრინციპები და დაურთე საკვანძო ინგრედიენტების ჩამონათვალი. JSON სტრუქტურაში გამოიყენე სწორად დაფორმატებული ქართული.",
      explanation: "ფორმატის მკაფიო მითითება (JSON) და დეტალური სტრუქტურის განსაზღვრა უზრუნველყოფს ორგანიზებულ და ადვილად გამოყენებად შედეგს."
    }
  ];

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-6 text-center">პრომფტ ინჟინერიის ტექნიკები</h2>
      <div className="space-y-2">
        {promptExamples.map((example, index) => (
          <PromptExample 
            key={index}
            title={example.title}
            badPrompt={example.badPrompt}
            goodPrompt={example.goodPrompt}
            explanation={example.explanation}
          />
        ))}
      </div>
    </div>
  );
};

export default PromptEngineering;
