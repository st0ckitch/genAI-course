export const module2Slides = [
  // Title Slide
  {
    title: "AI ინსტრუმენტები და მათი გამოყენება პროდუქტიულობისთვის",
    subtitle: "მოდული 2: AI-ის პრაქტიკული გამოყენება ყოველდღიურ საქმიანობაში",
    background: {
      gradient: "linear-gradient(135deg, #15803d 0%, #166534 100%)"
    },
    notes: "მოგესალმებით მეორე მოდულში, სადაც განვიხილავთ AI ინსტრუმენტებს, რომლებიც შეიძლება გამოიყენოთ პროდუქტიულობის გასაზრდელად. განვიხილავთ დოკუმენტებთან და კონტენტის გენერაციასთან დაკავშირებულ სხვადასხვა ინსტრუმენტებს."
  },
  
  // Agenda Slide
  {
    title: "რას განვიხილავთ",
    content: [
      {
        type: "numbered-list",
        items: [
          "დოკუმენტებთან სამუშაო AI ინსტრუმენტები",
          "დოკუმენტებისა და პრეზენტაციების შექმნის ინსტრუმენტები",
          "ინფორმაციის ექსტრაქცია და მონაცემთა ანალიზი",
          "კონტენტის გენერაციის ინსტრუმენტები",
          "ვიზუალური კონტენტის გენერაციის ინსტრუმენტები",
          "ანგარიშების გენერირების ინსტრუმენტები",
          "პრაქტიკული სავარჯიშოები რეალური სცენარებისთვის"
        ]
      }
    ],
    notes: "დღეს გვაქვს 3-საათიანი სესია, რომელიც დაყოფილია ორ ძირითად ნაწილად: დოკუმენტებთან სამუშაო ინსტრუმენტები და კონტენტის გენერაციის ინსტრუმენტები. თითოეულ ნაწილში გვექნება პრაქტიკული სავარჯიშოები და დავასრულებთ FAQ სესიით."
  },
  
  // Section 1 Intro
  {
    title: "დოკუმენტებთან სამუშაო ინსტრუმენტები",
    subtitle: "როგორ გამოვიყენოთ AI დოკუმენტების შექმნისა და დამუშავებისთვის",
    content: [
      "ამ ნაწილში განვიხილავთ, როგორ შეგვიძლია AI-ის გამოყენება დოკუმენტებთან მუშაობის ეფექტურობის გასაზრდელად.",
      {
        type: "list",
        items: [
          "AI-ით გაძლიერებული დოკუმენტების შექმნის ინსტრუმენტები",
          "მონაცემების ექსტრაქცია სხვადასხვა ფორმატის ფაილებიდან",
          "ანალიტიკური ინსაითების ავტომატური გენერაცია",
          "დოკუმენტების დამუშავების ავტომატიზაცია",
          "პრაქტიკული გამოყენების სცენარები ბიზნესისთვის"
        ]
      }
    ],
    background: {
      color: "#f0fdf4"
    },
    notes: "AI ინსტრუმენტები მნიშვნელოვნად ცვლის ჩვენს მუშაობას დოკუმენტებთან. ეს არ არის მხოლოდ ავტომატიზაცია, არამედ ახალი შესაძლებლობები, რომელთა განხორციელება მანამდე რთული ან შეუძლებელი იყო."
  },
  
  // Document Creation Tools
  {
    title: "დოკუმენტებისა და პრეზენტაციების შექმნის ინსტრუმენტები",
    component: "AIToolsGrid",
    componentProps: { toolType: "document" },
    content: [
      "AI-ზე დაფუძნებული ინსტრუმენტები შინაარსის შექმნისა და გაუმჯობესებისთვის:",
      {
        type: "list",
        items: [
          "დოკუმენტები: ტექსტების, ანგარიშების და მემოების გენერირება",
          "პრეზენტაციები: სლაიდების, ვიზუალური ელემენტების და კონტენტის შექმნა",
          "ელექტრონული ცხრილები: მონაცემთა ანალიზი, ფორმულების შექმნა და ინსაითები",
          "ელ.ფოსტა: პროფესიული ელ.წერილების შედგენა და ოპტიმიზაცია",
          "შაბლონები: სხვადასხვა ტიპის დოკუმენტების შაბლონების შექმნა და გამოყენება"
        ]
      }
    ],
    notes: "მნიშვნელოვანია ავღნიშნოთ, რომ ეს ინსტრუმენტები არ ანაცვლებენ ადამიანის შემოქმედებას, არამედ აძლიერებენ მას. საუკეთესო შედეგისთვის ყოველთვის საჭიროა ადამიანის კონტროლი და რედაქტირება."
  },
  
  // Information Extraction
  {
    title: "ინფორმაციის ექსტრაქცია და მონაცემთა ანალიზი",
    content: [
      "AI-ით გაძლიერებული ინსტრუმენტები, რომლებიც გვეხმარება გამოვკრიბოთ და გავაანალიზოთ მონაცემები სხვადასხვა წყაროებიდან:",
      {
        type: "list",
        items: [
          "PDF-დან მონაცემების ამოღების ინსტრუმენტები: PDFTables, Tabula, Docparser",
          "ელექტრონული ცხრილების ანალიზი: GPT-4 + Excel/Sheets, Bardeen, AutoGPT",
          "არასტრუქტურირებული ტექსტიდან სტრუქტურული მონაცემების გამოკრეფა: ChatGPT, Claude",
          "ხელით ჩაწერილი ან სკანირებული დოკუმენტების გაციფრულება: Mathpix, Adobe Acrobat AI"
        ]
      },
      "ძირითადი შესაძლებლობები და გამოყენების სცენარები:",
      {
        type: "list",
        items: [
          "მონაცემების ავტომატური შეტანა და კატეგორიზაცია",
          "დიდი მონაცემების ანალიზი და შეჯამება",
          "ტრენდების და ინსაითების გამოვლენა",
          "სხვადასხვა ფორმატში მონაცემების კონვერტირება და ექსპორტი",
          "ტყვია-წერტილებად გარდაქმნა და მნიშვნელოვანი პუნქტების მონიშვნა"
        ]
      }
    ],
    notes: "მონაცემთა ექსტრაქცია და ანალიზი არის ერთ-ერთი სფერო, სადაც AI განსაკუთრებით ღირებულია. ის ავტომატიზებს მძიმე, დროის შემჭმელ ამოცანებს და საშუალებას გვაძლევს ფოკუსირება მოვახდინოთ მონაცემებიდან მიღებულ ინსაითებზე, და არა მათ დამუშავებაზე."
  },
  
  // Document Processing Exercise
  {
    title: "პრაქტიკული სავარჯიშო: დოკუმენტების შექმნა/დამუშავება",
    subtitle: "აქტივობები სხვადასხვა ტიპის დოკუმენტებისთვის",
    content: [
      "სავარჯიშო 1: PDF დოკუმენტიდან ინფორმაციის ექსტრაქცია",
      {
        type: "list",
        items: [
          "ატვირთეთ PDF დოკუმენტი (მაგ. ყოველწლიური ანგარიში) ChatGPT-ში",
          "მოითხოვეთ კონკრეტული მონაცემების ექსტრაქცია (ფინანსური, სტატისტიკური)",
          "დააგენერირეთ შეჯამება და ძირითადი შედეგები",
          "გამოიტანეთ მონაცემები Excel-ის ფორმატში"
        ]
      },
      "სავარჯიშო 2: Excel მონაცემების ანალიზი და ტრანსფორმაცია",
      {
        type: "list",
        items: [
          "აირჩიეთ სამუშაო Excel ფაილი (გაყიდვები, მარკეტინგი, HR მონაცემები)",
          "AI-სთან ბუნებრივი ენით მოითხოვეთ სპეციფიკური ანალიზი",
          "შექმენით ვიზუალიზაციები და პროგნოზები მონაცემებზე დაყრდნობით",
          "გარდაქმენით მონაცემები პრეზენტაციისთვის შესაფერის ფორმატში"
        ]
      },
      "აქტივობის დრო: 25 წუთი. ამის შემდეგ გაზიარეთ შედეგები და მიდგომები."
    ],
    notes: "ამ სავარჯიშოებში მონაწილეებს აქვთ შესაძლებლობა გამოსცადონ AI ინსტრუმენტები რეალურ მონაცემებზე. მიზანია არა მხოლოდ ტექნიკური უნარების შეძენა, არამედ იმის დანახვაც, თუ როგორ შეიძლება ინტეგრირდეს ეს ინსტრუმენტები მათ არსებულ სამუშაო პროცესებში."
  },
  
  // Section 2 Intro
  {
    title: "კონტენტის გენერაციის ინსტრუმენტები",
    subtitle: "AI ტექნოლოგიები შემოქმედებითი პროცესებისთვის",
    content: [
      "ამ ნაწილში განვიხილავთ, როგორ შეგვიძლია AI-ის გამოყენება შემოქმედებითი კონტენტის შესაქმნელად:",
      {
        type: "list",
        items: [
          "ტექსტური კონტენტის გენერაცია მარკეტინგისა და კომუნიკაციისთვის",
          "ვიზუალური კონტენტის შექმნა სხვადასხვა პლატფორმებისთვის",
          "ანგარიშების ავტომატური გენერირება სხვადასხვა მონაცემებიდან",
          "მარკეტინგული მასალების მომზადება სხვადასხვა არხებისთვის",
          "ბრენდის ხმისა და ვიზუალური იდენტობის შენარჩუნება AI-ით შექმნილ კონტენტში"
        ]
      }
    ],
    background: {
      color: "#f0fdf4"
    },
    notes: "კონტენტის გენერაცია არის ერთ-ერთი სფერო, სადაც AI განსაკუთრებით სწრაფად ვითარდება. ეს ინსტრუმენტები საშუალებას გვაძლევს შევქმნათ მაღალი ხარისხის კონტენტი უფრო სწრაფად, მაგრამ მაინც მნიშვნელოვანია ადამიანის ზედამხედველობა საბოლოო ხარისხის უზრუნველსაყოფად."
  },
  
  // Text Content Generation Tools
  {
    title: "ტექსტური კონტენტის გენერირების ინსტრუმენტები",
    subtitle: "Copy.AI, Jasper.AI, uCraft.io და სხვა AI-ით მართული პლატფორმები",
    component: "ContentToolsComparison",
    content: [
      "სპეციალიზებული ინსტრუმენტები ტექსტური კონტენტის გენერირებისთვის:",
      {
        type: "list",
        items: [
          "მარკეტინგული კონტენტი: სოციალური მედიის პოსტები, რეკლამები, ელ.ფოსტის კამპანიები",
          "საინფორმაციო კონტენტი: ბლოგები, სტატიები, პროდუქტის აღწერილობები",
          "ტექნიკური კონტენტი: დოკუმენტაცია, ინსტრუქციები, FAQ-ები",
          "კრეატიული კონტენტი: ისტორიები, სცენარები, კონცეფციები"
        ]
      }
    ],
    notes: "Copy.AI, Jasper.AI და uCraft.io არიან საკმაოდ მძლავრი ინსტრუმენტები, რომლებიც აღჭურვილია სპეციალიზებული ფუნქციებით კონკრეტული ტიპის კონტენტის შესაქმნელად. მართალია ChatGPT და სხვა ზოგადი LLM-ებიც შეიძლება გამოყენებულ იქნას მსგავსი მიზნებისთვის, ეს პლატფორმები გვთავაზობენ უფრო მიზანმიმართულ გამოცდილებას და ხშირად უკეთეს შედეგებს კონკრეტული სცენარებისთვის."
  },
  
  // Visual Content Generation
  {
    title: "ვიზუალური კონტენტის გენერაციის ინსტრუმენტები",
    subtitle: "DALL-E 3, Midjourney და სხვა ინსტრუმენტები",
    component: "VisualContentShowcase",
    content: [
      "AI-ით მართული ვიზუალური კონტენტის შექმნა მნიშვნელოვნად ზრდის პროდუქტიულობას შემდეგ სფეროებში:",
      {
        type: "list",
        items: [
          "მარკეტინგი: სოციალური მედიის გრაფიკა, ბანერები, სარეკლამო მასალები",
          "პროდუქტის დიზაინი: კონცეფციები, პროტოტიპები, ვიზუალიზაციები",
          "ბრენდინგი: ლოგოს იდეები, ბრენდის იდენტობის ელემენტები",
          "პრეზენტაციები: ილუსტრაციები, დიაგრამები, ინფოგრაფიკები",
          "ვებ-დიზაინი: ვებსაიტის ელემენტები, იკონები, ფონები"
        ]
      }
    ],
    notes: "ვიზუალური კონტენტის გენერაცია წარმოადგენს AI-ის ერთ-ერთ ყველაზე შთამბეჭდავ მიღწევას. ეს ინსტრუმენტები ამოკლებენ შემოქმედებით პროცესს რამდენიმე წუთამდე, რაც ადრე დღეები ან კვირები სჭირდებოდა. მნიშვნელოვანია გავამახვილოთ ყურადღება პრომფტინგის ტექნიკებზე, რომლებიც განსხვავდება ტექსტური LLM-ების პრომფტებისგან."
  },
  
  // Report Generation Tools
  {
    title: "ანგარიშების გენერირების ინსტრუმენტები",
    component: "AIToolsGrid",
    componentProps: { toolType: "report" },
    content: [
      "AI-ით მართული ინსტრუმენტები პროფესიული ანგარიშების შესაქმნელად:",
      {
        type: "list",
        items: [
          "ბიზნეს ანალიტიკა: მონაცემების ვიზუალიზაცია და ანალიზი",
          "ფინანსური ანგარიშები: ბიუჯეტები, პროგნოზები, ROI ანალიზი",
          "მარკეტინგული შედეგები: კამპანიის მეტრიკები და ეფექტურობა",
          "პროექტის სტატუსი: პროგრესი, რისკები, მილსაკვანძები",
          "კვლევის შედეგები: მონაცემთა ანალიზი და დასკვნები"
        ]
      }
    ],
    notes: "ანგარიშების გენერირების ინსტრუმენტები განსაკუთრებით სასარგებლოა მენეჯერებისა და ანალიტიკოსებისათვის. ისინი არა მხოლოდ ზოგავენ დროს, არამედ ხშირად ავლენენ ისეთ ტრენდებსა და ინსაითებს, რომლებიც შეიძლება გამოგვრჩენოდა მანუალური ანალიზისას."
  },
  
  // Marketing Materials Exercise
  {
    title: "პრაქტიკული სავარჯიშო: მარკეტინგული მასალების მომზადება",
    subtitle: "სოციალური მედიის პოსტებისა და ელ.ფოსტის შექმნა",
    content: [
      "სავარჯიშო 1: სოციალური მედიის პოსტების გენერირება",
      {
        type: "list",
        items: [
          "აირჩიეთ კონკრეტული პროდუქტი ან სერვისი (არსებული ან ჰიპოთეტური)",
          "შექმენით პრომფტი, რომელიც აღწერს სამიზნე აუდიტორიას და მარკეტინგის მიზნებს",
          "გამოიყენეთ AI ინსტრუმენტი (მაგ. Copy.AI ან ChatGPT) 5 სხვადასხვა ფორმატის პოსტის შესაქმნელად",
          "დააგენერირეთ შესაბამისი ვიზუალური მასალა ერთი პოსტისთვის (DALL-E ან Midjourney)"
        ]
      },
      "სავარჯიშო 2: მარკეტინგული ელ.ფოსტის კამპანიის შექმნა",
      {
        type: "list",
        items: [
          "განსაზღვრეთ ელ.ფოსტის კამპანიის მიზანი (კონვერსია, ინფორმირება, ჩართულობა)",
          "შექმენით სათაური, რომელიც მოიზიდავს მაღალ გახსნის მაჩვენებელს",
          "დააგენერირეთ ელ.ფოსტის ტექსტი მკაფიო CTA (call to action) ელემენტით",
          "შექმენით A/B ტესტირებისთვის რამდენიმე ვარიანტი"
        ]
      },
      "აქტივობის დრო: 20 წუთი. შემდეგ გაიმართება ჯგუფური განხილვა."
    ],
    notes: "ეს სავარჯიშო დაეხმარება მონაწილეებს დაინახონ, როგორ შეიძლება AI-ის გამოყენება მარკეტინგული მასალების სწრაფად და ეფექტურად შესაქმნელად. მნიშვნელოვანია გამოკვეთოთ, რომ საუკეთესო შედეგებისთვის საჭიროა დეტალური მითითებები და შემდგომი რედაქტირება."
  },
  
  // FAQ Section
  {
    title: "ხშირად დასმული კითხვები",
    subtitle: "AI პროდუქტიულობის ინსტრუმენტების შესახებ",
    content: [
      {
        type: "list",
        items: [
          "Q: რა ღირს ეს ინსტრუმენტები და როგორ შევარჩიოთ ჩვენი საჭიროებებისთვის შესაფერისი? A: ფასები მერყეობს უფასოდან ($0) პრემიუმ ვერსიებამდე ($50+ თვეში). შერჩევისთვის გაითვალისწინეთ: გამოყენების სიხშირე, საჭირო ფუნქციები, გუნდის ზომა და ROI პოტენციალი.",
          "Q: რამდენად უსაფრთხოა ამ ინსტრუმენტებში ბიზნეს მონაცემების შეყვანა? A: უსაფრთხოება განსხვავდება პლატფორმების მიხედვით. კორპორატიული გამოყენებისთვის შეამოწმეთ მათი მონაცემთა შენახვის პოლიტიკა, შესაბამისობა რეგულაციებთან (GDPR, HIPAA) და კომერციული გამოყენების პირობები.",
          "Q: რამდენად მარტივია ამ ინსტრუმენტების ინტეგრაცია არსებულ სამუშაო პროცესებში? A: ბევრ ინსტრუმენტს აქვს API და ინტეგრაციები პოპულარულ პლატფორმებთან (Google Workspace, Microsoft 365). ინტეგრაციის სირთულე დამოკიდებულია თქვენს არსებულ სისტემებზე და IT რესურსებზე.",
          "Q: როგორ ვუზრუნველყოთ AI-ით შექმნილი კონტენტის ორიგინალობა და ბრენდის შესაბამისობა? A: გამოიყენეთ დეტალური მითითებები ბრენდის სახელმძღვანელოდან, ყოველთვის გადაამოწმეთ და შეასწორეთ AI-ის გენერირებული შინაარსი, და გამოიყენეთ პლაგიატის შემმოწმებელი ინსტრუმენტები.",
          "Q: როგორ გავარჩიოთ, რომელი ამოცანებისთვის გამოვიყენოთ AI და რომელი დავტოვოთ ადამიანებისთვის? A: AI განსაკუთრებით ეფექტურია განმეორებადი, დროის შემჭმელი ამოცანებისთვის და პირველადი მონახაზების შექმნისთვის. ადამიანის ჩართულობა მნიშვნელოვანია სტრატეგიულ გადაწყვეტილებებში, შემოქმედებით მიმართულებაში და საბოლოო ხარისხის კონტროლში."
        ]
      }
    ],
    notes: "FAQ სესია არის მნიშვნელოვანი, რადგან AI ინსტრუმენტების შერჩევა და იმპლემენტაცია ხშირად იწვევს ბევრ კითხვას. მონაწილეებს შეუძლიათ დასვან დამატებითი კითხვები სესიის ბოლოს."
  },
  
  // Interactive Q&A
  {
    title: "ინტერაქტიული კითხვა-პასუხის სესია",
    content: [
      "დრო თქვენი სპეციფიკური კითხვებისთვის:",
      {
        type: "list",
        items: [
          "კონკრეტული AI ინსტრუმენტების შესახებ დეტალები",
          "თქვენი ბიზნეს სცენარებისთვის გადაწყვეტილებები",
          "ტექნიკური საკითხები და იმპლემენტაცია",
          "ღირებულებისა და ხარჯ-ეფექტურობის საკითხები",
          "ეთიკური და პრივატულობის საკითხები"
        ]
      },
      "შეგიძლიათ დასვათ კითხვები."
    ],
    notes: "ინტერაქტიული Q&A სესია საშუალებას აძლევს მონაწილეებს მიიღონ პასუხები მათ სპეციფიკურ კითხვებზე. ეს არის შესაძლებლობა მოვარგოთ სასწავლო მასალა მათ კონკრეტულ საჭიროებებს."
  },
  
  // Best Practices
  {
    title: "საუკეთესო პრაქტიკები AI-ის პროდუქტიულად გამოყენებისთვის",
    content: [
      "როგორ მივიღოთ მაქსიმალური შედეგი AI ინსტრუმენტებიდან:",
      {
        type: "list",
        items: [
          "დაიწყეთ კონკრეტული მიზნებით და პრობლემებით, არა უბრალოდ AI-ის გამოყენებით",
          "ინვესტირება გააკეთეთ პრომფტინგის უნარების განვითარებაში თქვენს გუნდში",
          "შექმენით პრომფტების ბიბლიოთეკა გავრცელებული ამოცანებისთვის",
          "ყოველთვის შეამოწმეთ AI-ის გენერირებული შინაარსი ფაქტობრივი სიზუსტისთვის",
          "ჩაატარეთ A/B ტესტირება სხვადასხვა მიდგომებს შორის"
        ]
      },
      "გამოწვევები, რომლებიც უნდა გავითვალისწინოთ:",
      {
        type: "list",
        items: [
          "AI ჰალუცინაციები და ფაქტობრივი შეცდომები",
          "ზედმეტად დამოკიდებულება ავტომატიზაციაზე კრიტიკული აზროვნების ხარჯზე",
          "საავტორო უფლებებისა და ინტელექტუალური საკუთრების საკითხები",
          "გუნდის წევრების გადამზადების საჭიროება",
          "AI ეთიკისა და მიკერძოების საკითხები"
        ]
      }
    ],
    notes: "მნიშვნელოვანია გავუსვათ ხაზი, რომ AI არის ინსტრუმენტი, არა ჯადოსნური გადაწყვეტილება. საუკეთესო შედეგები მიიღება, როდესაც AI გამოიყენება ადამიანური შემოქმედებითობისა და კრიტიკული აზროვნების გასაძლიერებლად, არა ჩასანაცვლებლად."
  },
  
  // Future Trends
  {
    title: "მომავალი ტრენდები AI პროდუქტიულობის სფეროში",
    content: [
      "რას უნდა ველოდოთ AI პროდუქტიულობის ინსტრუმენტებში უახლოეს მომავალში:",
      {
        type: "list",
        items: [
          "მეტი პერსონალიზაცია: ადაპტირებადი AI, რომელიც სწავლობს თქვენი სამუშაო სტილიდან",
          "მულტიმოდალური ინტეგრაცია: ტექსტის, სურათების, აუდიოს და ვიდეოს ერთდროული დამუშავება",
          "აგენტური AI: ავტონომიური ასისტენტები, რომლებიც ასრულებენ კომპლექსურ ამოცანებს",
          "ადაპტური ინტერფეისები: ინტერფეისები, რომლებიც იცვლება მომხმარებლის საჭიროებების მიხედვით",
          "მეტად ინტეგრირებული ეკოსისტემები: ნაკლები 'ფრიქცია' სხვადასხვა ინსტრუმენტებს შორის"
        ]
      },
      {
        type: "quote",
        text: "AI ინსტრუმენტები ტრანსფორმირდება პასიური დამხმარეებიდან აქტიურ თანამშრომლებად, რომლებიც არა მხოლოდ ასრულებენ მოთხოვნებს, არამედ პროაქტიულად გვთავაზობენ გაუმჯობესებებს და ახალ მიდგომებს.",
        author: "AI პროდუქტიულობის ტრენდების კვლევა, 2024"
      }
    ],
    notes: "მომავალი ტენდენციების განხილვა ეხმარება მონაწილეებს დაინახონ AI-ის გრძელვადიანი ღირებულება და დაგეგმონ მისი სტრატეგიული ინტეგრაცია მათ ორგანიზაციებში."
  },
  
  // Resources
  {
    title: "რესურსები შემდგომი სწავლისთვის",
    content: [
      "მნიშვნელოვანი რესურსები AI პროდუქტიულობის ინსტრუმენტების შესახებ მეტი ინფორმაციისთვის:",
      {
        type: "list",
        items: [
          "კურსები: Coursera-ზე 'AI for Everyone', LinkedIn Learning-ზე 'AI Tools for Productivity'",
          "წიგნები: 'Future Skills: The 20 Skills and Competencies Everyone Needs to Succeed in a Digital World', 'The Age of AI: And Our Human Future'",
          "ბლოგები: Harvard Business Review-ს სტატიები AI შესახებ, OpenAI ბლოგი, The Gradient",
          "YouTube არხები: Two Minute Papers, Computerphile, AI Explained",
          "კონფერენციები: AI & Big Data Expo, RISE, Web Summit",
          "პოდკასტები: Practical AI, The TWIML AI Podcast, Eye on AI"
        ]
      }
    ],
    notes: "ამ რესურსების გაზიარება მონაწილეებს ეხმარება გააგრძელონ სწავლა კურსის დასრულების შემდეგაც. ასევე შეგიძლიათ რეკომენდაცია გაუწიოთ სპეციფიკურ რესურსებს სხვადასხვა დონისთვის - დამწყებებისთვის, საშუალო და მოწინავე მომხმარებლებისთვის."
  },
  
  // Summary
  {
    title: "შეჯამება",
    subtitle: "რა ვისწავლეთ დღეს",
    content: [
      {
        type: "list",
        items: [
          "დოკუმენტებთან სამუშაო AI ინსტრუმენტების ტიპები და გამოყენების სცენარები",
          "ინფორმაციის ექსტრაქციისა და მონაცემთა ანალიზის მეთოდები",
          "ტექსტური კონტენტის გენერირების ინსტრუმენტები და მათი უპირატესობები",
          "ვიზუალური კონტენტის გენერაციის ტექნოლოგიები და მათი ბიზნეს გამოყენება",
          "ანგარიშების ავტომატური გენერირების ინსტრუმენტები და შესაძლებლობები",
          "პრაქტიკული უნარები AI-ის ეფექტურად გამოყენებისთვის",
          "საუკეთესო პრაქტიკები და სამომავლო ტრენდები AI პროდუქტიულობაში"
        ]
      },
      "შემდეგ მოდულში განვიხილავთ საძიებო მოდელებს და API-ის ინტეგრირებას თქვენს პროდუქტებში და სერვისებში."
    ],
    notes: "ეს შეჯამება ეხმარება მონაწილეებს გააზრებაში, თუ რა ისწავლეს და როგორ დაუკავშირონ ეს ცოდნა შემდეგ მოდულს. ასევე, ეს არის შესაძლებლობა, გამოყოთ ძირითადი პრაქტიკული უნარები, რომლებიც მათ შეიძინეს."
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
          "პრეზენტაცია და სავარჯიშოები გაზიარდება ელ.ფოსტით",
          "გთხოვთ, შეავსოთ უკუკავშირის ფორმა სესიის შესახებ",
          "შემდეგი მოდული: საძიებო მოდელები და API-ს ინტეგრირება"
        ]
      }
    ],
    background: {
      gradient: "linear-gradient(135deg, #15803d 0%, #166534 100%)"
    },
    notes: "მოდული 2-ის დასასრული. გამოყავით დრო შეკითხვებისთვის, თუ დარჩა, და შეახსენეთ მონაწილეებს პრაქტიკული დავალებები, რომლებიც შეიძლება გააკეთონ შემდეგ სესიამდე."
  }
];
