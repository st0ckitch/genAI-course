export const slides = [
  // Title Slide
  {
    title: "LLM მოდელების საფუძვლები",
    subtitle: "მოდული 1: თანამედროვე AI-ის საფუძვლების გაცნობა",
    background: {
      gradient: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)"
    },
    notes: "მოგესალმებით LLM ტრენინგის პირველ მოდულში. დღეს ჩვენ შევისწავლით დიდი ენობრივი მოდელების საფუძვლებს, მათ ისტორიას, ტიპებს და როგორ ვიმუშაოთ მათთან ეფექტურად."
  },
  
  // Agenda Slide
  {
    title: "რას განვიხილავთ",
    content: [
      {
        type: "numbered-list",
        items: [
          "AI განვითარების მოკლე ისტორია",
          "LLM მოდელების ტიპები და მათი შესაძლებლობები",
          "წამყვანი მოდელების მიმოხილვა (GPT, Claude, Llama, Gemini)",
          "მოდელების შედარებითი ანალიზი",
          "პრომფტების შექმნის ხელოვნება (prompt engineering)",
          "LLM-ისთვის როლის მინიჭება და ეფექტური კომუნიკაცია",
          "პრაქტიკული სავარჯიშოები და აპლიკაციები"
        ]
      }
    ],
    notes: "დღეს გვაქვს 3-საათიანი ინტენსიური სესია. დავიწყებთ AI-ის ისტორიითა და ევოლუციით, შევისწავლით სხვადასხვა LLM არქიტექტურას, შევადარებთ წამყვან მოდელებს და შემდეგ გადავალთ პრაქტიკულ ტექნიკებზე ამ მოდელებთან სამუშაოდ."
  },
  
  // Section 1 Intro
  {
    title: "თანამედროვე LLM მოდელების მიმოხილვა",
    subtitle: "წესებიდან ნეირონულ ქსელებამდე და ტრანსფორმერებამდე",
    content: [
      "ამ ნაწილში გამოვიკვლევთ AI სისტემების ევოლუციას, რომელმაც დღევანდელ მძლავრ LLM-ებამდე მიგვიყვანა.",
      {
        type: "list",
        items: [
          "გზა წესებზე დაფუძნებული სისტემებიდან სტატისტიკურ სწავლებამდე",
          "როგორ შეცვალა ნეირონულმა ქსელებმა ბუნებრივი ენის დამუშავება",
          "ტრანსფორმერის არქიტექტურის გარღვევა",
          "მასშტაბირების კანონები და ახალი შესაძლებლობების გაჩენა"
        ]
      }
    ],
    background: {
      color: "#f8fafc"
    },
    notes: "ეს ნაწილი ქმნის საფუძველს იმის გასაგებად, თუ როგორ მივედით დღევანდელ LLM ტექნოლოგიამდე. ევოლუცია წესებიდან სტატისტიკამდე, ღრმა სწავლებამდე და ტრანსფორმერებამდე წარმოადგენს პარადიგმების ცვლილებათა სერიას AI-ში."
  },
  
  // History Timeline
  {
    title: "AI განვითარების მოკლე ისტორია",
    content: [
      "მნიშვნელოვანი ეტაპები AI-ის ევოლუციაში, რომელმაც თანამედროვე LLM-ებამდე მიგვიყვანა",
      {
        type: "list",
        items: [
          "1950-1980-იანი: წესებზე დაფუძნებული სისტემები და სიმბოლური AI",
          "1990-2000-იანი: სტატისტიკური მოდელები და ადრეული ნეირონული ქსელები",
          "2010-2015: ღრმა სწავლების რევოლუცია CNN-ებითა და RNN-ებით",
          "2017: ტრანსფორმერის არქიტექტურა (Attention is All You Need)",
          "2018-დღემდე: ტრანსფორმერული მოდელების მასშტაბირება (GPT სერია და სხვ.)"
        ]
      }
    ],
    notes: "AI-ის ისტორია აღნიშნულია ინოვაციის რამდენიმე ტალღითა და 'AI ზამთრის' პერიოდებით. ამჟამინდელი ტალღა, რომელსაც საფუძვლად უდევს ღრმა სწავლება და ტრანსფორმერები, აღმოჩნდა შესამჩნევად მდგრადი და ნაყოფიერი."
  },

  {
    title: "სიმბოლური AI (1950-1980-იანი)",
    subtitle: "წესებზე დაფუძნებული სისტემების ერა",
    component: "SymbolicAIExamples",
    content: [
      "სიმბოლური AI იყენებს ლოგიკურ წესებს და სიმბოლოების მანიპულაციას პრობლემების გადასაჭრელად:",
      {
        type: "list",
        items: [
          "ELIZA (1966) - პირველი ჩატბოტი, რომელიც იყენებდა უბრალო ნიმუშის შესაბამისობას საუბრის იმიტაციისთვის",
          "SHRDLU (1970) - პროგრამა, რომელიც აგებდა და აანალიზებდა კუბების ვირტუალურ სამყაროს",
          "MYCIN (1970) - ექსპერტული სისტემა სამედიცინო დიაგნოზებისთვის",
          "DENDRAL (1965) - ქიმიური ანალიზის ექსპერტული სისტემა",
          "პროლოგი (1972) - პროგრამირების ენა ლოგიკურ მსჯელობაზე დაფუძნებული"
        ]
      },
      {
        type: "quote",
        text: "AI-ს შეუძლია ყველაფერი, რასაც ადამიანი აკეთებს, უკვე 1985 წლისთვის.",
        author: "მარვინ მინსკი, 1967"
      }
    ],
    notes: "სიმბოლური AI-ის ერა აღნიშნულია ექსპერტული სისტემებითა და ფორმალური ლოგიკის გამოყენებით. მიუხედავად იმედისმომცემი დასაწყისისა, ამ მიდგომებმა გამოავლინეს შეზღუდვები რეალური სამყაროს პრობლემების გადაჭრაში, რამაც საბოლოოდ 'AI-ის ზამთარი' გამოიწვია."
  },
  
  // NEW SLIDE 2: Statistical Models Examples
  {
    title: "სტატისტიკური მიდგომები (1990-2000-იანი)",
    subtitle: "მანქანური სწავლების ახალი ერა",
    content: [
      "სტატისტიკურმა მიდგომებმა შეცვალა AI განვითარების მიმართულება, გადავიდა რა წესებიდან მონაცემებზე:",
      {
        type: "list",
        items: [
          "IBM-ის Watson (1997) - ჭადრაკის დიდოსტატ გარი კასპაროვს ამარცხებს",
          "ხელწერის ამოცნობის სისტემები საფოსტო დახარისხებისთვის",
          "ნაივური ბაიესის კლასიფიკატორები სპამის ფილტრებისთვის",
          "ხელშემწყობი ვექტორული მანქანები (SVM) ტექსტის კლასიფიკაციისთვის",
          "უახლოესი მეზობლების მეთოდი (k-NN) და გადაწყვეტილებათა ხეები"
        ]
      },
      {
        type: "image",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/KnnClassification.svg/440px-KnnClassification.svg.png",
        alt: "k-NN კლასიფიკაციის ილუსტრაცია",
        caption: "k-NN ალგორითმის პრინციპი: ობიექტი მიეკუთვნება იმ კლასს, რომელიც დომინირებს მის k უახლოეს მეზობლებს შორის"
      }
    ],
    notes: "სტატისტიკურმა მიდგომებმა და მანქანურმა სწავლებამ AI კვლევა გადაიყვანა მონაცემთა ანალიზისა და პატერნების აღმოჩენის გზაზე, გამოიყენა რა ალბათობები და სტატისტიკური ინფერენცია ბუნებრივი ენის დამუშავების, გამოსახულებების ამოცნობისა და გადაწყვეტილებების მხარდასაჭერად."
  },
  
  // NEW SLIDE 3: Deep Learning Revolution Examples
  {
    title: "ღრმა სწავლების რევოლუცია (2010-2015)",
    subtitle: "CNN, RNN და გარღვევები კომპიუტერულ ხედვასა და NLP-ში",
    component: "DeepLearningExamples",
    content: [
      "ღრმა ნეირონულმა ქსელებმა განაპირობა AI-ის შესაძლებლობების დრამატული გაუმჯობესება:",
      {
        type: "list",
        items: [
          "AlexNet (2012) - CNN მოდელი, რომელმაც მოიგო ImageNet გამოწვევა და გაზარდა სიზუსტე 10%-ით",
          "Word2Vec (2013) - სიტყვების ვექტორული წარმოდგენა სემანტიკური ოპერაციებისთვის",
          "LSTM ქსელები - აუდიოს ამოცნობისა და თარგმანისთვის",
          "DeepFace (2014) - ფეისბუკის სახის ამოცნობის სისტემა, ადამიანის დონის სიზუსტით",
          "GAN-ები (2014) - იან გუდფელოუს მიერ შემოთავაზებული, ახალი რეალისტური გამოსახულებების გენერირებისთვის"
        ]
      }
    ],
    notes: "ღრმა ნეირონული ქსელების გარღვევა დაიწყო 2012 წელს AlexNet-ის მიერ ImageNet კონკურსის გამარჯვებით. მას შემდეგ CNN-ები, RNN-ები და LSTM-ები გახდა სტანდარტი კომპიუტერულ ხედვასა და NLP-ში, რაც საფუძველს უყრიდა მომავალ ტრანსფორმერულ მოდელებს."
  },
  
  // NEW SLIDE 4: Transformer Architecture Examples
  {
    title: "ტრანსფორმერის გარღვევა (2017)",
    subtitle: "როგორ შეცვალა 'Attention is All You Need' NLP სფერო",
    content: [
      "2017 წელს Google-ის კვლევითმა გუნდმა წარმოადგინა რევოლუციური ნაშრომი, რომელიც გახდა თანამედროვე LLM-ების საფუძველი:",
      {
        type: "list",
        items: [
          "თვითყურადღების მექანიზმი (Self-attention) ტექსტში გრძელვადიანი დამოკიდებულებების დასაჭერად",
          "განსაზღვრავს სიტყვებს შორის კავშირებს შერჩევითად, კონტექსტის გათვალისწინებით",
          "პარალელიზაციის შესაძლებლობა, რაც აჩქარებს ტრენინგს",
          "საფუძველი მოდელებისთვის: BERT, GPT, XLNet, T5",
          "ორიგინალურად შეიქმნა მანქანური თარგმანისთვის, მაგრამ გამოყენება გაფართოვდა ყველა NLP ამოცანაზე"
        ]
      },
      {
        type: "image",
        src: "/api/placeholder/600/400",
        alt: "ტრანსფორმერის არქიტექტურის ილუსტრაცია",
        caption: "ტრანსფორმერის არქიტექტურა: ენკოდერ-დეკოდერის სტრუქტურა ყურადღების მექანიზმებით"
      }
    ],
    notes: "ტრანსფორმერის გარღვევა იყო AI-ის ისტორიის გარდამტეხი მომენტი. 'ყურადღება საკმარისია' ნაშრომმა წარმოადგინა ახალი არქიტექტურა, რომელმაც გადაჭრა ენის მოდელირების ორი მთავარი პრობლემა: გრძელი კონტექსტების დამუშავება და პარალელური გამოთვლები."
  },
  
  // NEW SLIDE 5: LLM Era Examples
  {
    title: "LLM-ების ეპოქა (2018-დღემდე)",
    subtitle: "ტრანსფორმერული მოდელების მასშტაბირება",
    component: "LLMEvolutionTimeline",
    content: [
      "გიგანტური ტრანსფორმერული მოდელები გახდა დომინანტური პარადიგმა NLP-ში:",
      {
        type: "list",
        items: [
          "BERT (2018) - ბიდირექციული ენკოდერი ვიკიპედიასა და წიგნებზე ტრენირებული",
          "GPT-2 (2019) - 1.5 მილიარდი პარამეტრი, ტექსტის გენერაციის გასაოცარი შესაძლებლობებით",
          "GPT-3 (2020) - 175 მილიარდი პარამეტრი, ემერჯენტული შესაძლებლობები",
          "DALL-E, Stable Diffusion - ტექსტი-სურათის მოდელები",
          "GPT-4, Claude, Gemini, Llama 2 - მულტიმოდალური შესაძლებლობები და მასშტაბის კანონის შედეგები"
        ]
      },
      {
        type: "quote",
        text: "მასშტაბი არის თავად ის ალგორითმი. დიდი ენობრივი მოდელების ჩვენს წინააღმდეგობრივ ინტუიციასთან შეჯახება ხდება, რადგან ჩვენ ვერ ვხედავთ, რომ ალგორითმი მუშაობს პარამეტრების სივრცეში.",
        author: "სამ ალტმანი, OpenAI"
      }
    ],
    notes: "LLM-ების ერა წარმოადგენს მასშტაბის ძალას AI-ში. გიგანტური პარამეტრების რაოდენობა და უზარმაზარი ტრენინგის მონაცემთა სეტები იძლევა ემერჯენტულ თვისებებს - შესაძლებლობებს, რომლებიც არ იყო სპეციალურად დაპროგრამებული, არამედ წარმოიშვა მოდელის ზომიდან."
  },
  
  // Early AI History
  {
    title: "ადრეული AI კვლევა (1950-1980-იანი)",
    content: [
      "AI-ის ადრეულ ათწლეულებში დომინირებდა სიმბოლური მიდგომები და ექსპერტული სისტემები.",
      {
        type: "list",
        items: [
          "1950: ალან ტიურინგი გვთავაზობს ტიურინგის ტესტს",
          "1956: დართმუთის კონფერენციაზე იქმნება ტერმინი 'ხელოვნური ინტელექტი'",
          "1960-იანი: ELIZA ჩატბოტი იმიტირებს საუბარს პატერნების შესაბამისობის გამოყენებით",
          "1970-იანი: ექსპერტული სისტემები ცდილობენ ადამიანის ცოდნის წესებად კოდირებას",
          "1980-იანი: AI ზამთარი წესებზე დაფუძნებული მიდგომების შეზღუდვების გამო"
        ]
      },
      {
        type: "quote",
        text: "მანქანები შეძლებენ, ოცი წლის განმავლობაში, შეასრულონ ნებისმიერი სამუშაო, რასაც ადამიანი აკეთებს.",
        author: "ჰერბერტ საიმონი, 1965"
      }
    ],
    notes: "ადრეული AI ოპტიმისტური იყო, მაგრამ საბოლოოდ შეზღუდულია წესებზე დაფუძნებული მიდგომითა და გამოთვლითი შეზღუდვებით. ჰერბერტ საიმონის ციტატა აჩვენებს AI-ის ვადების პროგნოზებში ზედმეტი ოპტიმიზმის განმეორებად ნიმუშს."
  },
  
  // Neural Network Revolution
  {
    title: "ნეირონული ქსელების რევოლუცია",
    content: [
      "2010-იანი წლების დასაწყისში, ღრმა სწავლებამ რევოლუცია მოახდინა AI-ის სფეროში.",
      {
        type: "list",
        items: [
          "2012: AlexNet - გარღვევა კომპიუტერულ მხედველობაში CNN-ით",
          "2014: GAN-ები (Generative Adversarial Networks) - იანის განვითარება",
          "2014-2016: RNN და LSTM მოდელები ტექსტისა და აუდიოსთვის",
          "2015-2016: Word2Vec და GloVe ემბედინგები NLP-სთვის",
          "2016: Google-ის Neural Machine Translation სისტემა"
        ]
      }
    ],
    notes: "ღრმა სწავლების რევოლუციის განმავლობაში ჩვენ ვნახეთ უზარმაზარი პროგრესი ხელოვნური ნეირონული ქსელების გამოყენებით, განსაკუთრებით კონვოლუციური და რეკურენტული ქსელებით, რამაც განაპირობა მნიშვნელოვანი გაუმჯობესებები კომპიუტერულ მხედველობასა და ენის დამუშავებაში."
  },
  
  // Transformer Architecture
  {
    title: "ტრანსფორმერის არქიტექტურა",
    subtitle: "AI-ში რევოლუციის მომტანი ინოვაცია",
    component: "TransformerSVG",
    content: [
      "2017 წელს Google-ის მკვლევარებმა წარმოადგინეს ნაშრომი 'Attention is All You Need', რომელიც გახდა LLM-ების განვითარების საფუძველი.",
      {
        type: "list",
        items: [
          "ყურადღების (Attention) მექანიზმი: ენის გრძელვადიანი დამოკიდებულებების დამუშავება",
          "პარალელური გამოთვლები: მნიშვნელოვნად აჩქარებს ტრენინგს",
          "თვითყურადღება (Self-attention): მნიშვნელოვნად აუმჯობესებს კონტექსტის გაგებას",
          "ტრანსფორმერის არქიტექტურის ბლოკები: ენკოდერები და დეკოდერები",
          "გამოყენებები: მანქანური თარგმანი, ტექსტის გენერაცია, კლასიფიკაცია"
        ]
      }
    ],
    notes: "ტრანსფორმერის არქიტექტურამ გადაჭრა ენის მოდელირების ორი ძირითადი პრობლემა: გრძელი კონტექსტის დამუშავება და პარალელიზაცია. ეს მიდგომა გახდა თანამედროვე LLM-ების საფუძველი."
  },
  
  // AI Timeline Component
  {
    title: "AI განვითარების დროითი ჯაჭვი",
    subtitle: "AI ისტორიის მნიშვნელოვანი მომენტები",
    component: "AITimeline",
    notes: "დროითი ჯაჭვი აჩვენებს AI-ის განვითარების ძირითად ეტაპებს და აღწერს ტრანსფორმაციას მარტივი წესებზე დაფუძნებული სისტემებიდან თანამედროვე ნეირონულ ქსელებამდე."
  },
  
  // LLM Types
  {
    title: "LLM მოდელების ტიპები",
    subtitle: "არქიტექტურული განსხვავებები და მათი გამოყენებები",
    content: [
      {
        type: "list",
        items: [
          "ენკოდერ-ტიპის მოდელები (BERT): ტექსტის გაგება, კლასიფიკაცია, სენტიმენტის ანალიზი",
          "დეკოდერ-ტიპის მოდელები (GPT): ტექსტის გენერაცია, პასუხების შექმნა, შემოქმედებითი წერა",
          "ენკოდერ-დეკოდერის მოდელები (T5): მთარგმნელობა, პერიფრაზირება, შეჯამება",
          "მულტიმოდალური მოდელები (GPT-4V, Gemini): ტექსტი, სურათები, აუდიო და ვიდეო ერთდროულად"
        ]
      },
      "მოდელები ასევე განსხვავდებიან ზომის მიხედვით: მცირე (1-3 მილიარდი პარამეტრი), საშუალო (7-13 მილიარდი) და დიდი (70+ მილიარდი პარამეტრი), რაც გავლენას ახდენს მათ შესაძლებლობებზე, სიზუსტესა და რესურსების მოთხოვნებზე."
    ],
    notes: "LLM არქიტექტურების გაგება მნიშვნელოვანია შესაბამისი მოდელის შერჩევისთვის კონკრეტული ამოცანებისთვის. ენკოდერები კარგია გაგებისთვის, დეკოდერები - გენერაციისთვის, ხოლო ჰიბრიდული მოდელები კარგია ტრანსფორმაციული ამოცანებისთვის."
  },
  
  // Leading Models Overview
  {
    title: "წამყვანი მოდელების მიმოხილვა",
    subtitle: "GPT, Claude, Llama, Gemini - მთავარი მოთამაშეები",
    component: "ModelComparison",
    notes: "ეს სლაიდი ადარებს ოთხ წამყვან LLM მოდელს, თითოეულის ძლიერი და სუსტი მხარეებით. ეს დაეხმარება მონაწილეებს გააცნობიერონ, თუ რა განასხვავებს სხვადასხვა მოდელებს და როდის უნდა გამოიყენონ თითოეული მათგანი."
  },
  
  // Capabilities and Limitations
  {
    title: "LLM-ების შესაძლებლობები და შეზღუდვები",
    content: [
      "თანამედროვე LLM-ების ძირითადი შესაძლებლობები:",
      {
        type: "list",
        items: [
          "ტექსტის გენერაცია სხვადასხვა სტილით, ტონითა და ფორმატით",
          "ინფორმაციის შეჯამება დიდი დოკუმენტებიდან",
          "სხვადასხვა ენებზე თარგმნა მაღალი ხარისხით",
          "ზოგადი კითხვა-პასუხი ფართო ცოდნის ბაზით",
          "კოდის გენერაცია და დებაგინგი მრავალ პროგრამირების ენაზე"
        ]
      },
      "მნიშვნელოვანი შეზღუდვები და გამოწვევები:",
      {
        type: "list",
        items: [
          "ჰალუცინაციები - არასწორი ინფორმაციის დამაჯერებლად წარმოდგენა",
          "ცოდნის მოძველება - მოდელები შეზღუდულია თავიანთი ტრენინგის მონაცემებით",
          "კონტექსტის ფანჯრის შეზღუდვები - შესაძლებლობების ზღვარი გრძელი დოკუმენტებისთვის",
          "გამჭვირვალობის ნაკლებობა 'შავი ყუთის' ბუნების გამო",
          "ეთიკური საკითხები ავტორობასთან, პრივატულობასთან და მიკერძოებასთან დაკავშირებით"
        ]
      }
    ],
    notes: "მნიშვნელოვანია როგორც შესაძლებლობების, ისე შეზღუდვების გაგება, რათა შევძლოთ რეალისტური მოლოდინების დასახვა და მოდელების სათანადოდ გამოყენება სხვადასხვა სცენარებში."
  },
  
  // Section 2 Intro
  {
    title: "LLM მოდელებთან მუშაობის პრინციპები",
    subtitle: "ეფექტური კომუნიკაცია AI-სთან",
    content: [
      "ამ ნაწილში შევისწავლით, როგორ ვიმუშაოთ LLM მოდელებთან ოპტიმალური შედეგების მისაღებად.",
      {
        type: "list",
        items: [
          "პრომფტების შექმნის ხელოვნება და ტექნიკები",
          "LLM-ებისთვის როლისა და კონტექსტის მინიჭება",
          "ინსტრუქციების ეფექტურად ჩამოყალიბება",
          "გამოსავლის კონტროლი და დახვეწა",
          "პრაქტიკული სავარჯიშოები სხვადასხვა სცენარისთვის"
        ]
      }
    ],
    background: {
      color: "#f0f7ff"
    },
    notes: "ეფექტური პრომფტინგი არის უნარი, რომელიც ხვეწს LLM-ის შესაძლებლობებს. მნიშვნელოვანია იმის გაგება, რომ კარგი პრომფტი არის როგორც ხელოვნება, ისე მეცნიერება."
  },
  
  // Prompt Engineering
  {
    title: "პრომფტების შექმნის ხელოვნება",
    subtitle: "ეფექტური პრომფტების ტექნიკები",
    component: "PromptEngineering",
    notes: "პრომფტი არის ინტერფეისი LLM-თან ურთიერთობისთვის. კარგად შემუშავებული პრომფტი მნიშვნელოვნად აუმჯობესებს მოდელის შედეგს."
  },
  
  // Role Assignment
  {
    title: "LLM-ისთვის როლის მინიჭება",
    subtitle: "როგორ გავზარდოთ მოდელის შედეგი პერსონის გამოყენებით",
    content: [
      "როლის მინიჭება LLM-ებისთვის დრამატულად ცვლის მათ შედეგს და ეფექტურობას:",
      {
        type: "list",
        items: [
          "ექსპერტიზის სიმულაცია: 'იმოქმედე როგორც მარკეტინგის ექსპერტმა/იურისტმა/მწერალმა...'",
          "ტონისა და სტილის შეცვლა: აკადემიური, შემოქმედებითი, ბიზნეს, კონვერსაციული",
          "პერსპექტივის შეცვლა: სხვადასხვა აუდიტორიებისთვის შინაარსის ადაპტირება",
          "მრავალნაბიჯიანი აზროვნება: 'გაანალიზე ნაბიჯ-ნაბიჯ როგორც...'",
          "შინაარსის შემოწმება: 'შეაფასე ეს ტექსტი როგორც რედაქტორმა...'"
        ]
      },
      {
        type: "quote",
        text: "როლის მინიჭება LLM-სთვის არის როგორც მისი 'ოპერაციული სისტემის' დროებით გადაპროგრამება, რითაც იცვლება მისი აზროვნებისა და პასუხის გაცემის ჩარჩო.",
        author: "ეტან მოლიკი, LLM პრომფტინგის ექსპერტი"
      }
    ],
    notes: "როლის მინიჭება არის ტექნიკა, რომელიც აძლევს LLM-ს კონტექსტს, თუ როგორ უნდა დაამუშაოს და უპასუხოს თქვენს მოთხოვნას. ის განსაზღვრავს, რა პერსპექტივით უნდა მიუდგეს პრობლემას."
  },
  
  // Effective Communication
  {
    title: "ეფექტური კომუნიკაცია LLM მოდელებთან",
    content: [
      "LLM-ებთან ეფექტური კომუნიკაციის საუკეთესო პრაქტიკები:",
      {
        type: "list",
        items: [
          "იყავით კონკრეტული და დეტალური ინსტრუქციებში",
          "დაყავით რთული ამოცანები უფრო მცირე, თანმიმდევრულ ნაბიჯებად",
          "მიაწოდეთ კონტექსტი და წინაისტორია შესაბამის შემთხვევებში",
          "მიუთითეთ სასურველი ფორმატი, სიგრძე და ტონი",
          "გამოიყენეთ იტერაციული მიდგომა: დახვეწეთ პრომფტი საჭიროებისამებრ",
          "მიაწოდეთ მაგალითები სასურველი შედეგისა (few-shot learning)"
        ]
      },
      "რისი თავიდან აცილებაა საჭირო:",
      {
        type: "list",
        items: [
          "ბუნდოვანი ან ორაზროვანი ინსტრუქციები",
          "ზედმეტად რთული, მრავალგანზომილებიანი მოთხოვნები",
          "ურთიერთგამომრიცხავი ან წინააღმდეგობრივი მითითებები",
          "კონტექსტის გარეშე კითხვები, როდესაც საჭიროა წინარე ინფორმაცია"
        ]
      }
    ],
    notes: "LLM-ებთან ეფექტური კომუნიკაცია მოითხოვს გარკვეულ უნარებს, რომლებიც განსხვავდება ადამიანებთან კომუნიკაციისგან. მოდელების შეზღუდვებისა და ძლიერი მხარეების გათვალისწინება აუმჯობესებს შედეგებს."
  },
  
  // Practical Exercise 1
  {
    title: "პრაქტიკული სავარჯიშო 1",
    subtitle: "ბიზნეს სცენარის ეფექტური პრომფტების შექმნა",
    content: [
      "დავალება 1: შექმენით ეფექტური პრომფტი, რომელიც დაეხმარება LLM-ს შექმნას მომხმარებლის გამოცდილების გასაუმჯობესებელი რეკომენდაციები თქვენი პროდუქტის/სერვისისთვის.",
      {
        type: "list",
        items: [
          "განსაზღვრეთ პროდუქტის/სერვისის ტიპი და სამიზნე აუდიტორია",
          "მიაწოდეთ შესაბამისი კონტექსტი და არსებული გამოწვევები",
          "მიუთითეთ, რა ტიპის რეკომენდაციები გჭირდებათ",
          "განსაზღვრეთ სასურველი ფორმატი და დეტალების დონე",
          "მიანიჭეთ LLM-ს შესაბამისი როლი (მაგ., UX ექსპერტი)"
        ]
      },
      "დავალება 2: შექმენით პრომფტი, რომელიც LLM-ს დაავალებს შექმნას მარკეტინგული კამპანიის გეგმა ახალი პროდუქტის გაშვებისთვის.",
      "აქტივობის დრო: 15 წუთი. შემდეგ განვიხილავთ საუკეთესო პრომფტებს და გავაანალიზებთ, რა მუშაობს და რატომ."
    ],
    notes: "ეს პრაქტიკული სავარჯიშო შექმნილია იმისათვის, რომ მონაწილეებმა გამოიყენონ ახლად ნასწავლი პრომფტინგის ტექნიკები რეალურ სცენარებში. ეს სავარჯიშო აძლიერებს ძირითად კონცეფციებს და საშუალებას აძლევს მონაწილეებს, გააზიარონ მიდგომები და ისწავლონ ერთმანეთისგან."
  },
  
  // Practical Exercise 2
  {
    title: "პრაქტიკული სავარჯიშო 2",
    subtitle: "კრეატიული კონტენტის გენერაცია",
    content: [
      "დავალება: შექმენით პრომფტი, რომელიც LLM-ს დაავალებს შექმნას კრეატიული კონტენტი თქვენი ბრენდისთვის.",
      {
        type: "list",
        items: [
          "აირჩიეთ კონტენტის ტიპი: სოციალური მედიის პოსტების სერია, ბლოგ სტატია, ან მოკლე ვიდეო სცენარი",
          "განსაზღვრეთ ბრენდის ხმა, ტონი და ძირითადი ღირებულებები",
          "მიაწოდეთ მთავარი გზავნილები და სამიზნე აუდიტორია",
          "მიუთითეთ კომუნიკაციის მიზანი (ცნობადობის ამაღლება, კონვერსია, განათლება)",
          "განსაზღვრეთ შემოქმედებითი მიმართულება და შთაგონების წყაროები"
        ]
      },
      "საგანგებოდ გამოიყენეთ შემდეგი ტექნიკები:",
      {
        type: "numbered-list",
        items: [
          "მკაფიო როლის მინიჭება (მაგ., კრეატიული დირექტორი, კოპირაიტერი)",
          "შემოქმედებითი შეზღუდვები ან ჩარჩოები ინოვაციის სტიმულირებისთვის",
          "Few-shot მაგალითები სასურველი სტილის საჩვენებლად",
          "ეტაპობრივი ინსტრუქციები იდეების გენერაციისა და დახვეწისთვის"
        ]
      },
      "აქტივობის დრო: 20 წუთი. შემდეგ განვიხილავთ შედეგებს ჯგუფურად."
    ],
    notes: "ეს სავარჯიშო აძლევს მონაწილეებს საშუალებას გამოიყენონ პრომფტ ინჟინერიის ტექნიკები კრეატიული მიზნებისთვის, რაც განსხვავდება ანალიტიკური ან საინფორმაციო შინაარსისაგან. კრეატიული კონტენტი ხშირად მოითხოვს განსხვავებულ მიდგომას პრომფტინგში."
  },
  
  // FAQ Section
  {
    title: "ხშირად დასმული კითხვები",
    subtitle: "LLM მოდელების შესახებ",
    content: [
      {
        type: "list",
        items: [
          "Q: რა განსხვავებაა GPT მოდელის სხვადასხვა ვერსიებს შორის? A: GPT ვერსიები განსხვავდება ზომით, შესაძლებლობებით და ტრენინგის მონაცემებით. GPT-4 უფრო დახვეწილია, ვიდრე GPT-3.5, უკეთესი მსჯელობის, მრავალენოვანი, მრავალმოდალური შესაძლებლობებით და ნაკლები ჰალუცინაციებით.",
          "Q: როგორ შემიძლია LLM-ების გამოყენება ბიზნესში? A: LLM-ები გამოიყენება კონტენტის შექმნაში, მომხმარებელთა მხარდაჭერაში, მონაცემთა ანალიზში, პროდუქტის აღწერებში, კოდირებასა და ავტომატიზაციის სხვადასხვა ამოცანებში.",
          "Q: რა არის ყველაზე დიდი შეზღუდვა დღევანდელ LLM-ებში? A: ძირითადი შეზღუდვებია: ჰალუცინაციები, მოძველებული ცოდნა, გამჭვირვალობის ნაკლებობა, ეთიკური საკითხები, კონტექსტის ფანჯრის შეზღუდვები და სპეციალიზებული ცოდნის არათანაბარი სიღრმე.",
          "Q: როგორ მუშაობს LLM-ების ტრენინგი? A: LLM-ები იწვრთნებიან ვრცელ ტექსტურ კორპუსზე, იყენებენ უზარმაზარ კომპიუტერულ რესურსებს და სამ ძირითად ფაზას: წინასწარი ტრენინგი (დიდ მონაცემთა კორპუსზე), ზედამხედველობითი დახვეწა ინსტრუქციებით და RLHF (ადამიანის უკუკავშირით გაძლიერებული სწავლება).",
          "Q: როგორ შემიძლია შევაფასო სხვადასხვა LLM-ების ხარისხი? A: შეაფასეთ სიზუსტით, შესაბამისობით, მრავალენოვნებით, მოქნილობით ინსტრუქციებთან მიმართებაში, კრეატიულობით და ნიუანსების გაგებით. ბევრი ორგანიზაცია ასევე იყენებს სტანდარტულ ტესტებს და ბენჩმარკებს."
        ]
      }
    ],
    notes: "FAQ სექცია მნიშვნელოვანია, რადგან ხშირად მონაწილეებს აქვთ მსგავსი კითხვები LLM-ების შესახებ. ეს პასუხები უზრუნველყოფს საბაზისო გაგებას ყველაზე გავრცელებულ საკითხებზე."
  },
  
  // Interactive Q&A
  {
    title: "ინტერაქტიული კითხვა-პასუხის სესია",
    content: [
      "დრო თქვენი სპეციფიკური კითხვებისთვის:",
      {
        type: "list",
        items: [
          "LLM მოდელებთან დაკავშირებული გამოწვევები",
          "კონკრეტული შემთხვევების განხილვა",
          "დამატებითი რჩევები ეფექტური პრომფტინგისთვის",
          "ტექნიკური დეტალების გარკვევა",
          "LLM-ების გამოყენება თქვენს ორგანიზაციაში"
        ]
      },
      "გთხოვთ, დასვათ კითხვები."
    ],
    notes: "ლაივ Q&A სესია აძლევს მონაწილეებს საშუალებას მიიღონ პასუხები მათ სპეციფიკურ კითხვებზე და პრობლემებზე. ეს დინამიური ნაწილია და მოითხოვს ადაპტაციას აუდიტორიის ინტერესების მიხედვით."
  },
  
  // Future Trends
  {
    title: "მომავალი ტრენდები LLM ტექნოლოგიებში",
    content: [
      "LLM მოდელების მომავალი მიმართულებები და ტექნოლოგიური ტრენდები:",
      {
        type: "list",
        items: [
          "მულტიმოდალური მოდელების განვითარება: ტექსტის, სურათის, აუდიოს და ვიდეოს ინტეგრაცია",
          "მცირე, სპეციალიზებული მოდელების ოპტიმიზაცია მობილური და edge მოწყობილობებისთვის",
          "აღქმადი შემეცნება და უფრო ღრმა მსჯელობის უნარები",
          "რაგინდ (RAG) და ცოდნის გაძლიერებული სისტემები მიმდინარე ინფორმაციის მისაწვდომობისთვის",
          "ფინ-თიუნინგის გამარტივება არა-ტექნიკური მომხმარებლებისთვის",
          "მეტი გამჭვირვალობა მოდელების გადაწყვეტილებებში და ეთიკური AI განვითარება"
        ]
      },
      {
        type: "quote",
        text: "მომავალი LLM-ები იქნება უფრო მეტად, ვიდრე უბრალოდ ტექსტის გენერატორები; ისინი გახდება ინტეგრირებული შემეცნებითი ასისტენტები, რომლებიც შეძლებენ უფრო ღრმა გაგებას, მიზეზობრივ მსჯელობას და მულტიმოდალურ ურთიერთქმედებას.",
        author: "დემის ჰასაბის, DeepMind"
      }
    ],
    notes: "ტრენდების განხილვა ეხმარება მონაწილეებს გააცნობიერონ LLM ტექნოლოგიების ევოლუციური ბუნება და მოემზადონ მომავალი ცვლილებებისთვის. ეს ხაზს უსვამს მუდმივი სწავლის მნიშვნელობას ამ სწრაფად განვითარებად სფეროში."
  },
  
  // Resources
  {
    title: "რესურსები შემდგომი სწავლისთვის",
    content: [
      "მნიშვნელოვანი რესურსები LLM მოდელების შესახებ მეტი ინფორმაციისთვის:",
      {
        type: "list",
        items: [
          "კურსები: Deep Learning Specialization (Coursera), Prompt Engineering for Developers (DeepLearning.AI)",
          "წიგნები: 'The Age of AI' (Henry Kissinger, Eric Schmidt, Daniel Huttenlocher), 'Atlas of AI' (Kate Crawford)",
          "ონლაინ რესურსები: Hugging Face დოკუმენტაცია, OpenAI Cookbook, Anthropic Claude სახელმძღვანელო",
          "ბლოგები: Distill.pub, The Gradient, Lil'Log, OpenAI ბლოგი",
          "GitHub რეპოზიტორიები: LangChain, LlamaIndex, Transformers ბიბლიოთეკა",
          "საზოგადოებები: Hugging Face საზოგადოება, AI Alignment Forum, ML Collective"
        ]
      }
    ],
    notes: "დამატებითი რესურსების გაზიარება მონაწილეებს საშუალებას აძლევს გააგრძელონ სწავლა სესიის შემდეგ და ჩაუღრმავდნენ კონკრეტულ სფეროებს, რომლებიც მათთვის განსაკუთრებით საინტერესოა."
  },
  
  // Summary
  {
    title: "შეჯამება",
    subtitle: "რა ვისწავლეთ დღეს",
    content: [
      {
        type: "list",
        items: [
          "AI და LLM-ების განვითარების ისტორია და მთავარი მოვლენები",
          "LLM მოდელების ტიპები და არქიტექტურული განსხვავებები",
          "წამყვანი მოდელების შედარებითი ანალიზი და მათი უნიკალური შესაძლებლობები",
          "პრომფტების შექმნის ხელოვნების ძირითადი პრინციპები და ტექნიკები",
          "LLM-ებისთვის როლის მინიჭებისა და ეფექტური კომუნიკაციის მიდგომები",
          "პრაქტიკული უნარები რეალური სცენარებისთვის",
          "მომავალი ტრენდები და განვითარების მიმართულებები LLM ტექნოლოგიებში"
        ]
      },
      "შემდეგ მოდულში განვიხილავთ AI ინსტრუმენტებს და მათ გამოყენებას პროდუქტიულობისთვის, მათ შორის დოკუმენტებთან სამუშაო ინსტრუმენტებსა და კონტენტის გენერაციას."
    ],
    notes: "შეჯამება ეხმარება მონაწილეებს კონსოლიდაცია გაუკეთონ ნასწავლ მასალას და დაუკავშირონ მომავალ მოდულებს. ეს ასევე არის შესაძლებლობა, ხაზი გაესვას მთავარ გზავნილებს."
  },
  
  // Thank You
  {
    title: "გმადლობთ ყურადღებისთვის!",
    subtitle: "კითხვები? შეხვედრამდე შემდეგ მოდულში.",
    content: [
      {
        type: "list",
        items: [
          "კონტაქტი: [email@example.com]",
          "სლაიდები და დამატებითი მასალები გაზიარდება ელ.ფოსტით",
          "გთხოვთ, შეავსოთ უკუკავშირის ფორმა სესიის შესახებ",
          "შემდეგი მოდული: AI ინსტრუმენტები და მათი გამოყენება პროდუქტიულობისთვის"
        ]
      }
    ],
    background: {
      gradient: "linear-gradient(135deg, #0369a1 0%, #075985 100%)"
    },
    notes: "სესიის დასრულების შემდეგ, მზად იყავით დამატებითი კითხვებისთვის და გააძლიერეთ ნეთვორქინგის შესაძლებლობები."
  }
];
