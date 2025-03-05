import React from 'react';
import { motion } from 'framer-motion';

const ModelCard = ({ name, year, description, achievement, architectureType, index }) => {
  // Define colors based on architecture type
  const getColorsByType = (type) => {
    switch(type) {
      case 'CNN':
        return { bg: 'from-blue-500 to-blue-700', border: 'border-blue-600', light: 'bg-blue-100' };
      case 'RNN/LSTM':
        return { bg: 'from-green-500 to-green-700', border: 'border-green-600', light: 'bg-green-100' };
      case 'GAN':
        return { bg: 'from-purple-500 to-purple-700', border: 'border-purple-600', light: 'bg-purple-100' };
      case 'Embedding':
        return { bg: 'from-red-500 to-red-700', border: 'border-red-600', light: 'bg-red-100' };
      default:
        return { bg: 'from-gray-500 to-gray-700', border: 'border-gray-600', light: 'bg-gray-100' };
    }
  };
  
  const colors = getColorsByType(architectureType);
  
  return (
    <motion.div 
      className={`rounded-lg overflow-hidden shadow-lg border ${colors.border}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`bg-gradient-to-r ${colors.bg} p-3 text-white`}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="text-xs opacity-90">{year}</span>
        </div>
        <div className="text-xs uppercase mt-1 opacity-80">{architectureType}</div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-800">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{description}</p>
        
        <div className={`${colors.light} dark:bg-opacity-20 p-2 rounded text-sm`}>
          <strong className="block text-xs uppercase mb-1">მიღწევა:</strong>
          {achievement}
        </div>
      </div>
    </motion.div>
  );
};

const DeepLearningExamples = () => {
  const models = [
    {
      name: "AlexNet",
      year: "2012",
      architectureType: "CNN",
      description: "AlexNet იყო რევოლუციური კონვოლუციური ნეირონული ქსელი, რომელმაც მოიგო ImageNet გამოწვევა და გამოიწვია ღრმა სწავლების რენესანსი.",
      achievement: "შეამცირა საკლასიფიკაციო შეცდომა 26%-დან 15.3%-მდე, რაც იყო უპრეცედენტო გაუმჯობესება კომპიუტერულ ხედვაში."
    },
    {
      name: "Word2Vec",
      year: "2013",
      architectureType: "Embedding",
      description: "Google-ის მკვლევარების მიერ შექმნილი მეთოდი სიტყვების ვექტორულ სივრცეში წარმოსადგენად, სადაც სემანტიკურად მსგავსი სიტყვები ახლოს არიან.",
      achievement: "შექმნა სიტყვების ვექტორული წარმოდგენები, რომლებზეც შესაძლებელია ალგებრული ოპერაციები: king - man + woman = queen."
    },
    {
      name: "LSTM ქსელები",
      year: "1997→2014",
      architectureType: "RNN/LSTM",
      description: "Long Short-Term Memory არქიტექტურა შეიქმნა 1997 წელს, მაგრამ ფართო გამოყენება ჰპოვა 2014-2015 წლებში სხვადასხვა NLP ამოცანებში.",
      achievement: "გადაჭრა 'გაქრობადი გრადიენტის' პრობლემა და შესაძლებელი გახადა გრძელი მიმდევრობების დამუშავება თარგმანისა და ტექსტის გენერაციისთვის."
    },
    {
      name: "GAN-ები",
      year: "2014",
      architectureType: "GAN",
      description: "Generative Adversarial Network წარმოადგინა იან გუდფელოუმ, სადაც ორი ქსელი (გენერატორი და დისკრიმინატორი) ერთმანეთის წინააღმდეგ ეჯიბრებიან.",
      achievement: "შექმნა უპრეცედენტოდ რეალისტური სინთეტიკური გამოსახულებები და გახსნა გზა იმაჯინაციური AI-სთვის."
    },
    {
      name: "ResNet",
      year: "2015",
      architectureType: "CNN",
      description: "Residual Network, Microsoft-ის კვლევითი გუნდის მიერ შექმნილი, შემოიტანა 'skip connection'-ები, რომლებიც საშუალებას იძლევა შეიქმნას ძალიან ღრმა ქსელები.",
      achievement: "გაზარდა სიზუსტე ImageNet-ზე და შესაძლებელი გახადა 150+ შრიანი ქსელების ტრენინგი, გადაჭრა რა 'გაქრობადი გრადიენტის' პრობლემა."
    },
    {
      name: "DeepFace",
      year: "2014",
      architectureType: "CNN",
      description: "Facebook-ის (ახლა Meta) მიერ შექმნილი სახის ამოცნობის სისტემა, რომელიც იყენებდა ღრმა კონვოლუციურ ნეირონულ ქსელს.",
      achievement: "მიაღწია 97.35% სიზუსტეს სახის ამოცნობაში, რაც მიუახლოვდა ადამიანების დონეს (97.53%)."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
      {models.map((model, index) => (
        <ModelCard 
          key={index}
          name={model.name}
          year={model.year}
          architectureType={model.architectureType}
          description={model.description}
          achievement={model.achievement}
          index={index}
        />
      ))}
    </div>
  );
};

export default DeepLearningExamples;
