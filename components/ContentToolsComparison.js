import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeatureRow = ({ feature, tools, index }) => {
  return (
    <motion.tr
      className="border-b border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <td className="py-3 px-4 font-medium">{feature}</td>
      {tools.map((tool, i) => (
        <td key={i} className="py-3 px-4 text-center">
          {tool.features.includes(feature) ? (
            <span className="text-green-500 text-xl">✓</span>
          ) : (
            <span className="text-red-500 text-xl">✗</span>
          )}
        </td>
      ))}
    </motion.tr>
  );
};

const ToolDetailsModal = ({ tool, onClose }) => {
  if (!tool) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{tool.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{tool.url}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            ✕
          </button>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">აღწერა</h3>
          <p className="text-gray-700 dark:text-gray-300">{tool.description}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">ძირითადი ფუნქციები</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {tool.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">უპირატესობები</h3>
          <ul className="list-disc list-inside text-green-600 dark:text-green-400 space-y-1">
            {tool.advantages.map((adv, index) => (
              <li key={index}>{adv}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">შეზღუდვები</h3>
          <ul className="list-disc list-inside text-red-600 dark:text-red-400 space-y-1">
            {tool.limitations.map((lim, index) => (
              <li key={index}>{lim}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">იდეალური გამოყენება</h3>
          <p className="text-gray-700 dark:text-gray-300">{tool.idealUse}</p>
        </div>
        
        <div className="text-right">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
          >
            დახურვა
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EnhancedContentToolsComparison = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  
  const tools = [
    {
      name: "Copy.AI",
      url: "copy.ai",
      description: "სოციალური მედიის კონტენტის, ბლოგების, პროდუქტის აღწერილობებისა და სხვა მარკეტინგული ტექსტების გენერირების ინსტრუმენტი.",
      features: [
        "სოციალური მედია",
        "ბლოგები",
        "პროდუქტის აღწერა",
        "ელ.ფოსტა",
        "SEO ოპტიმიზაცია",
        "A/B ტესტის ვარიანტები",
        "უფასო ვერსია",
        "API ინტეგრაცია"
      ],
      advantages: [
        "ფართო კონტენტის ტიპების მხარდაჭერა",
        "ინტუიციური ინტერფეისი დამწყებთათვის",
        "შაბლონების დიდი არჩევანი",
        "მარტივი მიწოდების პროცესი"
      ],
      limitations: [
        "ზოგჯერ ზედაპირული შედეგები რთული თემებისთვის",
        "შეზღუდული პერსონალიზაცია უფასო ვერსიაში",
        "ნაკლებად მოქნილი ვიდრე Jasper.AI"
      ],
      idealUse: "იდეალურია მცირე ბიზნესებისა და მარკეტოლოგებისთვის, რომლებსაც სჭირდებათ სწრაფი და მარტივი კონტენტის შექმნა სოციალური მედიისა და მარკეტინგული კამპანიებისთვის."
    },
    {
      name: "Jasper.AI",
      url: "jasper.ai",
      description: "მაღალი ხარისხის კრეატიული და მარკეტინგული კონტენტის გენერირების ინსტრუმენტი სხვადასხვა ფორმატში და ენაზე.",
      features: [
        "სოციალური მედია",
        "ბლოგები",
        "პროდუქტის აღწერა",
        "ელ.ფოსტა",
        "SEO ოპტიმიზაცია",
        "A/B ტესტის ვარიანტები",
        "უფასო ვერსია",
        "API ინტეგრაცია",
        "გუნდური თანამშრომლობა",
        "ბრენდის ტონი"
      ],
      advantages: [
        "მაღალი ხარისხის, დახვეწილი კონტენტი",
        "ბრენდის ხმის მემორიზება და კონსისტენტურობა",
        "გუნდური კოლაბორაციის ფუნქციები",
        "SEO ინტეგრაცია Surfer-თან"
      ],
      limitations: [
        "შედარებით მაღალი ფასი",
        "სწავლის უფრო მაღალი მრუდი",
        "კონტენტის გადამოწმება მაინც საჭიროა"
      ],
      idealUse: "იდეალურია საშუალო და მსხვილი კომპანიებისთვის, რომლებიც ეძებენ მაღალი ხარისხის კონტენტს და გუნდურ თანამშრომლობას."
    },
    {
      name: "uCraft.io",
      url: "ucraft.io",
      description: "ვებგვერდის ტექსტის, SEO-ოპტიმიზირებული კონტენტისა და ვებ კოპირაითინგის ინსტრუმენტი.",
      features: [
        "სოციალური მედია",
        "ბლოგები",
        "პროდუქტის აღწერა",
        "SEO ოპტიმიზაცია",
        "უფასო ვერსია",
        "ვებსაიტის ინტეგრაცია"
      ],
      advantages: [
        "ვებგვერდის შექმნასთან ინტეგრაცია",
        "SEO-ზე ფოკუსირებული კონტენტი",
        "ვებგვერდის ელემენტების ავტომატური გენერირება",
        "მარტივი გამოყენება"
      ],
      limitations: [
        "ნაკლები ფუნქციონალობა ვიდრე სპეციალიზებულ ინსტრუმენტებში",
        "არ აქვს ემეილ მარკეტინგის მხარდაჭერა",
        "შეზღუდული გუნდური ფუნქციები"
      ],
      idealUse: "იდეალურია ინდივიდუალური მეწარმეებისა და მცირე ბიზნესებისთვის, რომლებსაც სჭირდებათ ვებგვერდის კონტენტის შექმნა SEO ოპტიმიზაციით."
    }
  ];

  const allFeatures = [
    "სოციალური მედია",
    "ბლოგები",
    "პროდუქტის აღწერა",
    "ელ.ფოსტა",
    "SEO ოპტიმიზაცია",
    "A/B ტესტის ვარიანტები",
    "ბრენდის ტონი",
    "გუნდური თანამშრომლობა",
    "უფასო ვერსია",
    "API ინტეგრაცია",
    "ვებსაიტის ინტეგრაცია"
  ];

  const handleToolClick = (tool) => {
    setSelectedTool(tool);
  };

  const closeModal = () => {
    setSelectedTool(null);
  };

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">ფუნქცია / ინსტრუმენტი</th>
              {tools.map((tool, index) => (
                <th key={index} className="py-3 px-4 text-center">
                  <motion.button
                    className="w-full hover:underline focus:outline-none"
                    onClick={() => handleToolClick(tool)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {tool.name}
                  </motion.button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allFeatures.map((feature, index) => (
              <FeatureRow
                key={index}
                feature={feature}
                tools={tools}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          დააკლიკეთ ინსტრუმენტის სახელს ზევით, რომ ნახოთ დეტალური ინფორმაცია. 
          შედარებითი ცხრილი გაჩვენებთ თითოეული ინსტრუმენტის შესაძლებლობებს.
        </p>
      </div>

      {/* Tool details modal */}
      {selectedTool && (
        <ToolDetailsModal tool={selectedTool} onClose={closeModal} />
      )}
    </div>
  );
};

export default EnhancedContentToolsComparison;
