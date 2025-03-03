import React from 'react';
import { motion } from 'framer-motion';

const ToolCard = ({ name, category, description, url, icon, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start mb-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mr-3">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-green-600 dark:text-green-400">{category}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
      {url && (
        <div className="flex justify-end">
          <span className="text-xs text-gray-500 dark:text-gray-400 italic">{url}</span>
        </div>
      )}
    </motion.div>
  );
};

const AIToolsGrid = ({ toolType }) => {
  const documentTools = [
    {
      name: "ChatGPT",
      category: "ტექსტების და დოკუმენტების შექმნა",
      description: "დოკუმენტების, ანგარიშების, მემოების და სხვა ტექსტური მასალის გენერირება და რედაქტირება.",
      url: "openai.com/chatgpt",
      icon: "📝"
    },
    {
      name: "Notion AI",
      category: "ჩანაწერების და დოკუმენტები",
      description: "ჩანაწერების, იდეების და სამუშაო დოკუმენტების გაუმჯობესება და ავტომატური გენერაცია.",
      url: "notion.so",
      icon: "📋"
    },
    {
      name: "Microsoft Copilot",
      category: "Microsoft 365 ინტეგრაცია",
      description: "Word-ში და PowerPoint-ში ინტეგრირებული AI ასისტენტი დოკუმენტების და პრეზენტაციების შესაქმნელად.",
      url: "microsoft.com/copilot",
      icon: "🔤"
    },
    {
      name: "Google Docs AI",
      category: "Google Workspace",
      description: "Google Docs-ში ინტეგრირებული AI ფუნქციები: შეჯამება, ტექსტის გენერაცია და ფორმატირება.",
      url: "workspace.google.com",
      icon: "📄"
    },
    {
      name: "Beautiful.ai",
      category: "პრეზენტაციების შექმნა",
      description: "AI-ით მართული პრეზენტაციების შექმნა ავტომატური დიზაინით და კონტენტის რეკომენდაციებით.",
      url: "beautiful.ai",
      icon: "🖼️"
    },
    {
      name: "PDFTables",
      category: "PDF მონაცემების ექსტრაქცია",
      description: "PDF დოკუმენტებიდან ცხრილების ექსტრაქცია და კონვერტაცია Excel, XML და CSV ფორმატებში.",
      url: "pdftables.com",
      icon: "📊"
    }
  ];

  const contentTools = [
    {
      name: "Copy.AI",
      category: "მარკეტინგული კონტენტი",
      description: "სოციალური მედიის პოსტები, ბლოგები, პროდუქტის აღწერილობები და სხვა მარკეტინგული კონტენტი.",
      url: "copy.ai",
      icon: "✍️"
    },
    {
      name: "Jasper.AI",
      category: "მრავალფუნქციური კონტენტი",
      description: "მაღალი ხარისხის კრეატიული და მარკეტინგული კონტენტი სხვადასხვა ფორმატში და ენაზე.",
      url: "jasper.ai",
      icon: "🤖"
    },
    {
      name: "uCraft.io",
      category: "ვებ კონტენტი",
      description: "ვებსაიტის ტექსტი, SEO-ოპტიმიზირებული კონტენტი და ვებ კოპირაითინგი.",
      url: "ucraft.io",
      icon: "🌐"
    },
    {
      name: "DALL-E 3",
      category: "სურათების გენერაცია",
      description: "ტექსტური აღწერილობიდან მაღალი ხარისხის, დეტალური სურათების შექმნა.",
      url: "openai.com/dall-e",
      icon: "🎨"
    },
    {
      name: "Midjourney",
      category: "ვიზუალური კონტენტი",
      description: "არტისტული და უნიკალური სტილის სურათების შექმნა ტექსტური აღწერილობებიდან.",
      url: "midjourney.com",
      icon: "🖌️"
    },
    {
      name: "Canva AI",
      category: "დიზაინი და სურათები",
      description: "ინტეგრირებული AI ინსტრუმენტები Canva-ში დიზაინის, სურათების და ტექსტების შესაქმნელად.",
      url: "canva.com",
      icon: "🎭"
    }
  ];

  const reportTools = [
    {
      name: "Microsoft Power BI",
      category: "ბიზნეს ანალიტიკა",
      description: "მონაცემების ვიზუალიზაცია, ანგარიშების შექმნა და ბიზნეს ინსაითების გამოვლენა.",
      url: "powerbi.microsoft.com",
      icon: "📈"
    },
    {
      name: "Google Data Studio",
      category: "მონაცემთა ვიზუალიზაცია",
      description: "ინტერაქტიული დაშბორდები და ანგარიშები სხვადასხვა მონაცემთა წყაროებიდან.",
      url: "datastudio.google.com",
      icon: "📊"
    },
    {
      name: "Tableau",
      category: "მონაცემთა ანალიზი",
      description: "მოწინავე მონაცემთა ვიზუალიზაცია და ბიზნეს ინტელექტის ინსტრუმენტი.",
      url: "tableau.com",
      icon: "📉"
    },
    {
      name: "DataRobot",
      category: "პროგნოზული ანალიტიკა",
      description: "ავტომატური მანქანური სწავლების პლატფორმა პროგნოზული მოდელების შესაქმნელად.",
      url: "datarobot.com",
      icon: "🤖"
    }
  ];

  let toolsToShow = [];
  if (toolType === 'document') {
    toolsToShow = documentTools;
  } else if (toolType === 'content') {
    toolsToShow = contentTools;
  } else if (toolType === 'report') {
    toolsToShow = reportTools;
  } else {
    // If no specific type, show a mix
    toolsToShow = [...documentTools.slice(0, 3), ...contentTools.slice(0, 3)];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-6">
      {toolsToShow.map((tool, index) => (
        <ToolCard
          key={index}
          name={tool.name}
          category={tool.category}
          description={tool.description}
          url={tool.url}
          icon={tool.icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default AIToolsGrid;
