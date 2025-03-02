export const slides = [
  // Title Slide
  {
    title: "LLM Models Fundamentals",
    subtitle: "Module 1: Understanding the Foundation of Modern AI",
    content: [
      { 
        type: "image", 
        src: "/images/llm-banner.jpg", 
        alt: "AI Neural Networks Visualization",
        className: "rounded-lg shadow-lg" 
      }
    ],
    background: {
      gradient: "linear-gradient(135deg, #0369a1 0%, #075985 100%)"
    },
    notes: "Welcome to Module 1 of our LLM training series. Today we'll explore the fundamentals of Large Language Models, their history, types, and how to effectively work with them."
  },
  
  // Agenda Slide
  {
    title: "What We'll Cover",
    content: [
      {
        type: "numbered-list",
        items: [
          "Brief History of AI Development",
          "Types of LLM Models and Their Capabilities",
          "Overview of Leading Models (GPT, Claude, Llama, Gemini)",
          "Comparative Analysis of Models",
          "The Art of Prompt Engineering",
          "Role Assignment and Effective Communication",
          "Practical Exercises and Applications"
        ]
      }
    ],
    notes: "We have a packed 3-hour session today. We'll start with the history and evolution of AI, explore different LLM architectures, compare leading models, and then dive into practical techniques for working with these models."
  },
  
  // Section 1 Intro
  {
    title: "Overview of Modern LLM Models",
    subtitle: "From Rules to Neural Networks to Transformers",
    content: [
      "In this section, we'll explore the evolution of AI systems that led to today's powerful LLMs.",
      {
        type: "list",
        items: [
          "The journey from rule-based systems to statistical learning",
          "How neural networks revolutionized natural language processing",
          "The transformer architecture breakthrough",
          "Scaling laws and emergent capabilities"
        ]
      }
    ],
    background: {
      color: "#f8fafc"
    },
    notes: "This section lays the groundwork for understanding how we arrived at current LLM technology. The evolution from rules to statistics to deep learning to transformers represents a series of paradigm shifts in AI."
  },
  
  // History Timeline
  {
    title: "Brief History of AI Development",
    content: [
      {
        type: "image",
        src: "/images/ai-timeline.jpg",
        alt: "AI Development Timeline",
        caption: "Key milestones in the evolution of AI leading to modern LLMs"
      },
      {
        type: "list",
        items: [
          "1950s-1980s: Rule-based systems and symbolic AI",
          "1990s-2000s: Statistical models and early neural networks",
          "2010-2015: Deep learning revolution with CNNs and RNNs",
          "2017: Transformer architecture (Attention is All You Need)",
          "2018-Present: Scaling of transformer models (GPT series, etc.)"
        ]
      }
    ],
    notes: "The history of AI has been marked by several waves of innovation and periods of 'AI winter.' The current wave, powered by deep learning and transformers, has proven remarkably durable and productive."
  },
  
  // Early AI History
  {
    title: "Early AI Research (1950s-1980s)",
    content: [
      "The early decades of AI were dominated by symbolic approaches and expert systems.",
      {
        type: "list",
        items: [
          "1950: Alan Turing proposes the Turing Test",
          "1956: Dartmouth Conference coins the term 'Artificial Intelligence'",
          "1960s: ELIZA chatbot simulates conversation using pattern matching",
          "1970s: Expert systems attempt to encode human knowledge as rules",
          "1980s: AI winter due to limitations of rule-based approaches"
        ]
      },
      {
        type: "quote",
        text: "Machines will be capable, within twenty years, of doing any work a man can do.",
        author: "Herbert Simon, 1965"
      }
    ],
    notes: "Early AI was optimistic but ultimately limited by the rule-based approach and computing constraints. The quote from Herbert Simon demonstrates the recurring pattern of over-optimism in AI timeline predictions."
  }
];
