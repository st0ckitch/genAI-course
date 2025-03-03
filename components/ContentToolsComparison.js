import React from 'react';
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

const ContentToolsComparison = () => {
  const tools = [
    {
      name: "Copy.AI",
      features: [
        "სოციალური მედია",
        "ბლოგები",
        "პროდუქტის აღწერა",
        "ელ.ფოსტა",
        "SEO ოპტიმიზაცია",
        "A/B ტესტის ვარიანტები",
        "უფასო ვერსია",
        "API ინტეგრაცია"
      ]
    },
    {
      name: "Jasper.AI",
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
      ]
    },
    {
      name: "uCraft.io",
      features: [
        "სოციალური მედია",
        "ბლოგები",
        "პროდუქტის აღწერა",
        "SEO ოპტიმიზაცია",
        "უფასო ვერსია",
        "ვებსაიტის ინტეგრაცია"
      ]
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

  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="py-3 px-4 text-left">ფუნქცია / ინსტრუმენტი</th>
            {tools.map((tool, index) => (
              <th key={index} className="py-3 px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tool.name}
                </motion.div>
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
  );
};

export default ContentToolsComparison;
