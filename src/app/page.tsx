'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Slide from '@/components/Slide';
import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';
import FeatureGrid from '@/components/FeatureGrid';
import ModelGrid from '@/components/ModelGrid';
import ModelTable from '@/components/ModelTable';
import PromptComparison from '@/components/PromptComparison';
import { 
  AnimatedHeading, 
  AnimatedText,
  AnimatedCard,
  AnimatedList,
  AnimatedGrid,
  AnimatedGridItem
} from '@/components/AnimatedElements';

const slides = [
  { id: 'intro', title: 'შესავალი' },
  { id: 'overview', title: 'მიმოხილვა' },
  { id: 'history', title: 'ისტორია' },
  { id: 'transformer', title: 'ტრანსფორმერი' },
  { id: 'architecture', title: 'არქიტექტურა' },
  { id: 'models', title: 'მოდელები' },
  { id: 'comparison', title: 'შედარება' },
  { id: 'prompt-engineering', title: 'პრომპტები' },
  { id: 'practical', title: 'პრაქტიკა' },
];

const timelineItems = [
  {
    date: '1950-იანები',
    title: 'ტურინგის ტესტი',
    description: 'ალან ტურინგმა შემოგვთავაზა ტესტი, რომელიც განსაზღვრავს მანქანის აზროვნების უნარს და ჩაუყარა საფუძველი ხელოვნური ინტელექტის შესწავლას.'
  },
  {
    date: '1980-იანები',
    title: 'ექსპერტული სისტემები',
    description: 'წესებზე დაფუძნებული სისტემები, რომლებიც იყენებდნენ კონკრეტული სფეროს ექსპერტების ცოდნას გადაწყვეტილებების მისაღებად.'
  },
  {
    date: '2010-2016',
    title: 'ღრმა სწავლება',
    description: 'ნეირონული ქსელების აღმავლობა, რომელმაც მოიტანა რევოლუციური შედეგები გამოსახულების ამოცნობაში, თარგმანში და თამაშებში.'
  },
  {
    date: '2017',
    title: 'ტრანსფორმერის არქიტექტურა',
    description: '"Attention is All You Need" - ნაშრომმა შემოიტანა ყურადღების მექანიზმი, რამაც საფუძველი ჩაუყარა LLM მოდელების განვითარებას.'
  },
  {
    date: 'დღეს',
    title: 'LLM ერა',
    description: 'GPT, Claude, Llama და სხვა მოდელები რევოლუციას ახდენენ ინდუსტრიებში და ცვლიან ჩვენს ურთიერთობას ტექნოლოგიასთან.'
  }
];

const architectureFeatures = [
  {
    title: 'ენკოდერი',
    description: 'ტექსტის გაგება ორივე მიმართულებით. იდეალურია კლასიფიკაციისა და ანალიზისთვის.',
    examples: 'BERT, RoBERTa'
  },
  {
    title: 'დეკოდერი',
    description: 'ტექსტის გენერირება წინა კონტექსტზე დაყრდნობით. შესანიშნავია შემოქმედებითი წერისთვის.',
    examples: 'GPT, LLaMA'
  },
  {
    title: 'ენკოდერ-დეკოდერი',
    description: 'აერთიანებს ორივეს შესაძლებლობებს. საუკეთესოა თარგმნისა და შეჯამებისთვის.',
    examples: 'T5, BART'
  }
];

const models = [
  {
    name: 'GPT ოჯახი',
    versions: ['GPT-3.5', 'GPT-4', 'GPT-4o'],
    description: 'OpenAI-ს ფლაგმანი მოდელები, ლიდერები ტექსტის გენერაციაში'
  },
  {
    name: 'Claude ოჯახი',
    versions: ['Claude 3 Opus', 'Claude 3 Sonnet', 'Claude 3 Haiku', 'Claude 3.5/3.7'],
    description: 'Anthropic-ის უსაფრთხო და ზუსტი მოდელები'
  },
  {
    name: 'Llama ოჯახი',
    versions: ['Llama 2', 'Llama 3', 'Code Llama'],
    description: 'Meta-ს ღია წყაროს მოდელები - მზარდი ეკოსისტემით'
  },
  {
    name: 'Gemini ოჯახი',
    versions: ['Gemini Pro', 'Gemini Ultra', 'Gemini Nano'],
    description: 'Google-ის მულტიმოდალური მოდელები'
  }
];

const modelComparisonColumns = [
  { header: 'მახასიათებელი', key: 'feature' },
  { header: 'GPT', key: 'gpt' },
  { header: 'Claude', key: 'claude' },
  { header: 'Llama', key: 'llama' },
  { header: 'Gemini', key: 'gemini' }
];

const modelComparisonRows = [
  { 
    feature: 'მსჯელობა', 
    gpt: 'მაღალი', 
    claude: 'ძალიან მაღალი', 
    llama: 'საშუალო', 
    gemini: 'მაღალი' 
  },
  { 
    feature: 'კონტექსტის სიგრძე', 
    gpt: '128K', 
    claude: '200K', 
    llama: '8K-100K', 
    gemini: '32K' 
  },
  { 
    feature: 'მულტიმოდალობა', 
    gpt: 'დიახ', 
    claude: 'დიახ', 
    llama: 'შეზღუდული', 
    gemini: 'დიახ' 
  },
  { 
    feature: 'ღია წყარო', 
    gpt: 'არა', 
    claude: 'არა', 
    llama: 'დიახ', 
    gemini: 'არა' 
  }
];

const promptTechniques = [
  {
    title: 'როლის მინიჭება',
    description: 'აჩვენეთ მოდელს, ვინ უნდა იყოს ან როგორი ექსპერტიზა უნდა გამოიყენოს'
  },
  {
    title: 'ნაბიჯ-ნაბიჯ მსჯელობა',
    description: 'სთხოვეთ მოდელს, ნაბიჯ-ნაბიჯ იფიქროს პრობლემის გადაჭრაზე'
  },
  {
    title: 'კონტექსტის მიწოდება',
    description: 'მიაწოდეთ რაც შეიძლება მეტი რელევანტური ინფორმაცია'
  },
  {
    title: 'მიზნის დაკონკრეტება',
    description: 'ზუსტად მიუთითეთ, რა შედეგი გსურთ და რატომ'
  },
  {
    title: 'ფორმატირების მოთხოვნა',
    description: 'განსაზღვრეთ, რა ფორმატით გსურთ პასუხის მიღება'
  },
  {
    title: 'მაგალითების მიწოდება',
    description: 'აჩვენეთ ერთი ან რამდენიმე მაგალითი სასურველი პასუხის სტილის'
  }
];

export default function Home() {
  // Add this state to control when animations should be visible
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  
  // Add this useEffect to ensure animations run after component mounts
  useEffect(() => {
    // Short timeout to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="relative">
      <Navigation slides={slides} />
      
      {/* Wrap all slides in a container with a condition to enable animations */}
      <div className={animationsEnabled ? 'animations-enabled' : 'animations-disabled'}>
        {/* Title Slide */}
        <Slide id="intro" number={1}>
          <AnimatedHeading type="h1" className="text-6xl font-bold mb-4">
            აზროვნების <span className="text-primary">ახალი ერა</span>
          </AnimatedHeading>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-8" delay={0.2}>
            LLM მოდელების საფუძვლები
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray" delay={0.4}>
            მოგზაურობა ხელოვნური ინტელექტის სამყაროში
          </AnimatedText>
        </Slide>
        
        {/* Overview Slide */}
        <Slide id="overview" number={2}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-12">
            დღეს <span className="text-primary">ვისაუბრებთ</span>
          </AnimatedHeading>
          
          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedGridItem className="bg-mediumGray p-8 rounded-md relative">
              <div className="absolute top-0 left-0 w-4 h-1/4 bg-primary"></div>
              <h3 className="text-2xl font-semibold mb-4">გამაოგნებელი ისტორია</h3>
              <p className="text-lightGray">როგორ გადაიქცა ხელოვნური ინტელექტი სამეცნიერო ფანტასტიკიდან ყოველდღიურ რეალობად - სამოცდაათწლიანი მოგზაურობა წარმოუდგენელი გარღვევებით.</p>
            </AnimatedGridItem>
            
            <AnimatedGridItem className="bg-mediumGray p-8 rounded-md relative">
              <div className="absolute top-0 left-0 w-4 h-1/4 bg-primary"></div>
              <h3 className="text-2xl font-semibold mb-4">მაგიური მოდელები</h3>
              <p className="text-lightGray">გავიცნობთ თანამედროვე LLM მოდელების მრავალფეროვან ოჯახებს, მათ უნიკალურ თვისებებს და რადიკალურად განსხვავებულ შესაძლებლობებს.</p>
            </AnimatedGridItem>
            
            <AnimatedGridItem className="bg-mediumGray p-8 rounded-md relative">
              <div className="absolute top-0 left-0 w-4 h-1/4 bg-primary"></div>
              <h3 className="text-2xl font-semibold mb-4">კომუნიკაციის ხელოვნება</h3>
              <p className="text-lightGray">როგორ ვესაუბროთ ხელოვნურ ინტელექტს, რომ მივიღოთ ზუსტად ის, რაც გვჭირდება - პრომფტების შექმნის საიდუმლოებები.</p>
            </AnimatedGridItem>
            
            <AnimatedGridItem className="bg-mediumGray p-8 rounded-md relative">
              <div className="absolute top-0 left-0 w-4 h-1/4 bg-primary"></div>
              <h3 className="text-2xl font-semibold mb-4">მომავლის შესაძლებლობები</h3>
              <p className="text-lightGray">რა გზები იხსნება ჩვენს წინაშე და როგორ შეგვიძლია LLM მოდელების გამოყენება უნიკალური ღირებულების შესაქმნელად ნებისმიერ სფეროში.</p>
            </AnimatedGridItem>
          </AnimatedGrid>
        </Slide>
        
        {/* History Slide */}
        <Slide id="history" number={3}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            ხელოვნური ინტელექტის <span className="text-primary">ევოლუცია</span>
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray mb-12">
            70-წლიანი მოგზაურობა წარმოსახვიდან რეალობამდე
          </AnimatedText>
          
          <Timeline items={timelineItems} />
        </Slide>
        
        {/* Transformer Slide */}
        <Slide id="transformer" number={4}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            <span className="text-primary">ტრანსფორმერის</span> რევოლუცია
          </AnimatedHeading>
          <AnimatedHeading type="h3" className="text-2xl font-medium mb-12" delay={0.1}>
            "Attention is All You Need"
          </AnimatedHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard className="bg-mediumGray p-8 rounded-md relative">
              <div className="absolute top-0 left-0 w-4 h-1/4 bg-primary"></div>
              <h3 className="text-2xl font-semibold mb-4">რა მოხდა 2017 წელს?</h3>
              <p className="text-lightGray mb-4">გუგლის მკვლევარებმა შექმნეს ახალი არქიტექტურა სახელად "ტრანსფორმერი", რომელიც ეფუძნება "ყურადღების მექანიზმს" (self-attention).</p>
              <p className="text-lightGray">ეს იყო გადამწყვეტი მომენტი, რომელმაც საფუძველი ჩაუყარა თანამედროვე ენობრივ მოდელებს.</p>
            </AnimatedCard>
            
            <AnimatedCard className="bg-mediumGray p-8 rounded-md relative" delay={0.2}>
              <div className="absolute top-0 left-0 w-4 h-1/4 bg-primary"></div>
              <h3 className="text-2xl font-semibold mb-4">რითი არის განსაკუთრებული?</h3>
              <AnimatedList 
                className="space-y-4 list-disc list-inside"
                itemClassName="text-lightGray"
                items={[
                  <>ინფორმაციას ამუშავებს <span className="highlight">პარალელურად</span>, არა თანმიმდევრულად</>,
                  <>უკეთ იგებს <span className="highlight">გრძელვადიან კონტექსტს</span></>,
                  <>შეუძლია დაინახოს <span className="highlight">კავშირები</span> შორეულ ელემენტებს შორის</>,
                  <>იძლევა <span className="highlight">მასშტაბირების</span> საშუალებას</>
                ]}
              />
            </AnimatedCard>
          </div>
        </Slide>
        
        {/* Architecture Slide */}
        <Slide id="architecture" number={5}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            LLM მოდელების <span className="text-primary">არქიტექტურა</span>
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray mb-6">
            თითოეულ მათგანს თავისი უნიკალური ძალა და დანიშნულება აქვს
          </AnimatedText>
          
          <FeatureGrid features={architectureFeatures} />
          
          <AnimatedText className="text-lg text-lightGray mt-12">
            დღეს ყველაზე გავრცელებულია <span className="highlight">დეკოდერზე დაფუძნებული მოდელები</span>, რომლებსაც შეუძლიათ ტექსტის გენერირება, რაც ყველაზე მეტად გვჭირდება ყოველდღიურ მუშაობაში.
          </AnimatedText>
        </Slide>
        
        {/* Models Slide */}
        <Slide id="models" number={6}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            წამყვანი <span className="text-primary">LLM მოდელები</span>
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray mb-6">
            თითოეული ოჯახი უნიკალური თვისებებითა და შესაძლებლობებით
          </AnimatedText>
          
          <ModelGrid models={models} />
          
          <AnimatedText className="text-lg text-lightGray mt-12">
            ეს მოდელები მუდმივად ვითარდება და ახალი ვერსიები <span className="highlight">თვეების ან კვირების ინტერვალით</span> გამოდის
          </AnimatedText>
        </Slide>
        
        {/* Comparison Slide */}
        <Slide id="comparison" number={7}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            მოდელების <span className="text-primary">შედარებითი ანალიზი</span>
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray mb-8">
            როგორ ავირჩიოთ საუკეთესო კონკრეტული ამოცანისთვის
          </AnimatedText>
          
          <ModelTable columns={modelComparisonColumns} rows={modelComparisonRows} />
          
          <AnimatedText className="text-lg text-lightGray mt-12">
            მოდელის არჩევისას გაითვალისწინეთ: <span className="highlight">ამოცანის ტიპი, საჭირო კონტექსტის სიგრძე, მულტიმოდალურობის საჭიროება და ბიუჯეტი</span>
          </AnimatedText>
        </Slide>
        
        {/* Prompt Engineering Slide */}
        <Slide id="prompt-engineering" number={8}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            პრომფტების <span className="text-primary">ინჟინერია</span>
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray mb-8">
            LLM მოდელებთან კომუნიკაციის ხელოვნება
          </AnimatedText>
          
          <PromptComparison 
            weakPrompt="როგორ დავიკლო წონაში?"
            strongPrompt="მე ვარ 35 წლის ქალი, სიმაღლე 168 სმ, წონა 75 კგ. მაქვს მჯდომარე სამუშაო და მინდა, რომ 3 თვეში 10 კგ დავიკლო ჯანსაღად. შემიდგინე ყოველკვირეული ვარჯიშისა და კვების გეგმა, რომელიც მოერგება ჩემს მკაცრ სამუშაო გრაფიკს. კვირაში მხოლოდ სამჯერ შემიძლია ვარჯიში და არ მიყვარს დილით ვარჯიში."
            weakPoints={[
              "ზედმეტად ზოგადი",
              "არ არის კონტექსტი",
              "არ აქვს კონკრეტული მიზანი",
              "არ აქვს მოლოდინები"
            ]}
            strongPoints={[
              "დეტალური კონტექსტი",
              "კონკრეტული მიზანი",
              "შეზღუდვების მითითება",
              "პერსონალიზებული მოთხოვნები"
            ]}
          />
          
          <AnimatedHeading type="h3" className="text-2xl font-semibold mt-16 mb-8">
            პრომფტების <span className="text-primary">ტექნიკები</span>
          </AnimatedHeading>
          
          <FeatureGrid features={promptTechniques} />
        </Slide>
        
        {/* Practical Exercise Slide */}
        <Slide id="practical" number={9}>
          <AnimatedHeading type="h2" className="text-4xl font-semibold mb-4">
            პრაქტიკული <span className="text-primary">სავარჯიშო</span>
          </AnimatedHeading>
          <AnimatedText className="text-xl text-lightGray mb-12">
            ეფექტური პრომფტების შექმნა სხვადასხვა სცენარისთვის
          </AnimatedText>
          
          <div className="bg-mediumGray p-8 rounded-md border-l-4 border-primary mb-8">
            <AnimatedText className="text-lg mb-6">
              შექმენით ეფექტური პრომფტები შემდეგი სცენარებისთვის:
            </AnimatedText>
            
            <AnimatedList 
              className="space-y-6 list-decimal list-inside"
              itemClassName="text-lightGray"
              delay={0.4}
              staggerDelay={0.15}
              items={[
                "მარკეტინგული წერილის შექმნა ახალი პროდუქტის გაშვებისთვის",
                "მომხმარებელთა უკუკავშირის ანალიზი და ინსაიტების გამოვლენა",
                "სოციალური მედიისთვის კრეატიული კონტენტის გენერირება",
                "ტექნიკური პრობლემის გადაჭრა კოდის გამოყენებით",
                "კონკრეტულ თემაზე კვლევითი მიმოხილვის შექმნა"
              ]}
            />
          </div>
          
          <AnimatedCard className="bg-darkGray border border-mediumGray p-8 rounded-md">
            <h4 className="text-xl font-semibold mb-4">დავალების ინსტრუქცია</h4>
            <ol className="list-decimal list-inside space-y-3 text-lightGray">
              <li>აირჩიეთ ერთი სცენარი</li>
              <li>ჯგუფში შეიმუშავეთ დეტალური პრომფტი (10 წუთი)</li>
              <li>გამოსცადეთ თქვენი პრომფტი და შეაფასეთ შედეგები (10 წუთი)</li>
              <li>გააზიარეთ თქვენი პრომფტი და შედეგები ჯგუფთან (5 წუთი)</li>
              <li>მიიღეთ უკუკავშირი და გააუმჯობესეთ თქვენი პრომფტი</li>
            </ol>
          </AnimatedCard>
        </Slide>
      </div>
    </main>
  );
}
