import { NavItem, ProjectItem, ExperienceItem, FormField, ContactInfo, SocialLink, HeroData, StatItem, ProjectRevealHeader, UIStrings, FooterSection, FooterLink } from "./interfaces";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about', isActive: true },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    category: 'E-Commerce',
    title: 'E-Commerce Application',
    timeline: '2023 - Full-Stack Development',
    hasBorder: true,
    description: 'Integrated shipping module enabling real-time order tracking and delivery updates. Address management with Google location APIs integration.',
    features: [
      '40% reduction in image upload latency using worker threads',
      'Dynamic pricing calculations based on package weight and distance',
      'Real-time order tracking and delivery updates',
      'Google Maps API integration for accurate shipping'
    ],
    techStack: ['React', 'Node.js', 'MySQL', 'REST APIs', 'Google Maps API', 'Shipping API', 'Stripe', 'AWS', 'Worker Threads'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'AI & Fitness',
    title: 'AI Based Fitness App',
    timeline: '2023 - AI Development',
    hasBorder: true,
    description: 'AI-powered fitness platform delivering personalized workout and diet recommendations based on user goals and activity data.',
    features: [
      'TypeScript migration for improved scalability',
      'Optimized SQL query performance with JOINs',
      'Personalized AI recommendations',
      'Microservices architecture'
    ],
    techStack: ['Python', 'FastAPI', 'React Native', 'MySQL', 'AWS', 'Microservices', 'Streaming'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'AI & Chatbot',
    title: 'Advanced AI Chatbot',
    timeline: '2023 - AI/ML Development',
    hasBorder: false,
    description: 'Integrated Crawl API-based data extraction pipelines and refined system prompts for higher response precision.',
    features: [
      '30% higher response precision with optimized prompts',
      'Crawl API integration for data extraction',
      'Production-ready deployment environment',
      'Vector embeddings for improved context'
    ],
    techStack: ['LangChain', 'Python', 'LLMs', 'Vector DB', 'PostgreSQL', 'REST APIs', 'WebSocket', 'OpenAI', 'AWS', 'Streaming'],
    image: 'https://images.unsplash.com/photo-1531297483765-98a748215c6b?w=800&h=600&fit=crop',
    link: '#'
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    position: 'left',
    title: 'Senior Full-Stack Developer',
    company: 'TechVentures Inc.',
    description: 'Led development of microservices architecture using Node.js, React, and PostgreSQL. Implemented CI/CD pipelines reducing deployment time by 60%. Architected RESTful APIs serving 100K+ daily users.',
    timeline: '2022 - PRESENT'
  },
  {
    position: 'right',
    title: 'Full-Stack Engineer',
    company: 'Digital Dynamics',
    description: 'Built scalable e-commerce platforms with Next.js, TypeScript, and MongoDB. Developed real-time features using WebSocket and Redis. Optimized database queries improving performance by 45%.',
    timeline: '2020 - 2022'
  },
  {
    position: 'left',
    title: 'Frontend Developer',
    company: 'CloudScale Solutions',
    description: 'Created responsive web applications using React, Vue.js, and modern CSS. Implemented state management with Redux and Vuex. Collaborated with UX team to enhance user experience.',
    timeline: '2018 - 2020'
  },
  {
    position: 'right',
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    description: 'Developed and maintained client websites using HTML5, CSS3, and JavaScript. Integrated third-party APIs and payment gateways. Participated in agile development processes.',
    timeline: '2017 - 2018'
  }
];



export const contactInfo: ContactInfo[] = [
    {
      icon: 'mail',
      label: 'Email Me',
      value: 'studio@curated.exhibit'
    },
    {
      icon: 'location_on',
      label: 'Location',
      value: 'Brooklyn, New York'
    }
  ];

export const socialLinks: SocialLink[] = [
    { icon: 'share', href: '#' },
    { icon: 'public', href: '#' },
    { icon: 'link', href: '#' }
  ];

export const FORM_FIELDS: FormField[] = [
  {
    label: 'Your Name',
    name: 'name',
    type: 'text',
    placeholder: 'Alexander Curator'
  },
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'alex@example.com'
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    placeholder: 'Tell me about your project...',
    rows: 5
  }
];

export const HERO_DATA: HeroData = {
  badge: "Available for new opportunities",
  title: "Hi, I'm Alex Rivera, a Senior ",
  subtitle: "Product Designer",
  description: "I specialize in crafting high-end digital experiences that bridge the gap between human emotion and technological precision. My approach focuses on editorial aesthetics and functional clarity.",
  buttons: [
    { text: "View Projects", variant: "primary", href: "/projects" },
    { text: "Contact Me", variant: "secondary", href: "/contact" }
  ],
  profileImage: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPvCunqKnPOrFU6nflBHhtb0qwLtt7RMhjC-mL03aIZ8Xi2yG4kT7vjGsYoUHsCKYC_QkqvCYpMyAomGrERbzaxVYkHnti74LBG0rz9hm-w3Gdb1yFH3cbRFImVkSIU5Zi9bXijoEhbZ8_wyCUiGELLPKYiGxpRQBYzYy86kI_ZI0FVTA1nSSsC9q9eOExlresUCkmtzLVbYTgsTK_M1wLFsbFdP5wblk7wQ6XBFe0tCpsxK29Np-heGvlnQ-BDKgrFn6w3CuQ-mk",
    alt: "Alex Rivera profile"
  }
};

export const STATS_DATA: StatItem[] = [
  {
    title: "Building intelligent solutions with cutting-edge AI technology.",
    value: "5+",
    description: "Years of Full Stack AI Development",
    variant: "featured",
    span: "md:col-span-2"
  },
  {
    title: "",
    value: "100+",
    description: "AI Models Deployed",
    variant: "primary"
  },
  {
    title: "",
    value: "",
    description: "End-to-End AI Solutions",
    variant: "icon",
    icon: "psychology"
  }
];

export const PROJECT_REVEAL_HEADER: ProjectRevealHeader = {
  badge: "Selected Archives",
  title: "The Exhibition",
  cta: {
    text: "View Portfolio",
    href: "#",
    icon: "arrow_forward"
  }
};

export const SKILLS_DATA = [
  {
    title: "Languages",
    description: "Core programming languages for full-stack development and AI applications.",
    icon: "code",
    variant: "primary" as const,
    tags: ["JavaScript", "TypeScript", "Python"],
    gridSize: { md: "md:col-span-2", lg: "lg:col-span-3" },
    category: "core"
  },
  {
    title: "Frontend",
    description: "Modern frontend frameworks and libraries for building responsive user interfaces.",
    icon: "web",
    variant: "default" as const,
    tags: ["HTML", "CSS", "React.js", "Next.js", "React Native"],
    gridSize: { md: "md:col-span-2", lg: "lg:col-span-3" },
    category: "frontend"
  },
  {
    title: "Backend",
    description: "Server-side technologies and API development for scalable applications.",
    icon: "dns",
    variant: "border-primary" as const,
    tags: ["Node.js", "FastAPI", "Flask", "REST APIs", "GraphQL", "Webhooks"],
    gridSize: { md: "md:col-span-2", lg: "lg:col-span-3" },
    category: "backend"
  },
  {
    title: "Database",
    description: "Database management systems for data storage and retrieval operations.",
    icon: "storage",
    variant: "border-indigo" as const,
    tags: ["MongoDB", "SQL", "Vector Databases", "Redis"],
    gridSize: { md: "md:col-span-2", lg: "lg:col-span-2" },
    category: "database"
  },
  {
    title: "DevOps & Cloud",
    description: "Cloud platforms and deployment tools for modern application infrastructure.",
    icon: "cloud",
    variant: "border-slate" as const,
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    gridSize: { md: "md:col-span-2", lg: "lg:col-span-3" },
    category: "devops"
  },
  {
    title: "AI / ML",
    description: "Artificial intelligence and machine learning technologies for intelligent applications.",
    icon: "psychology",
    variant: "primary" as const,
    tags: ["LangChain", "RAG", "LLM Integration", "Chatbots", "Generative AI"],
    gridSize: { md: "md:col-span-2", lg: "lg:col-span-3" },
    category: "ai"
  }
];


export const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export const THEME={
  DARK:"dark",
  LIGHT:"light"
}

export const BRAND_NAME="KRISHNA"

export const BIO_DATA = {
  badge: "Full Stack AI Engineer",
  title: "Building intelligent ",
  titleHighlight: "solutions",
  titleSuffix: " with cutting-edge technology.",
  description: [
    "I am a Full Stack AI Engineer passionate about developing scalable applications that leverage artificial intelligence to solve real-world problems. My expertise spans from frontend interfaces to backend architecture and machine learning integration.",
    "With extensive experience in modern web technologies and AI frameworks, I've successfully delivered projects that combine elegant user experiences with powerful backend systems. I specialize in creating end-to-end solutions that seamlessly integrate AI capabilities.",
    "When I'm not coding or training models, you'll find me exploring the latest AI research papers, contributing to open-source projects, or experimenting with new frameworks. This continuous learning mindset keeps me at the forefront of technological innovation."
  ],
  buttons: [
    {
      text: "DOWNLOAD RESUME",
      variant: "primary",
      icon: "download"
    },
    {
      text: "VIEW PROJECTS",
      variant: "secondary"
    }
  ]
};

export const PROJECT_REVEAL_DATA = [
  {
    category: "AI & Machine Learning",
    title: "Neural Code Assistant",
    timeline: "Q4 2023 - AI Development",
    hasBorder: true
  },
  {
    category: "Full Stack & Cloud",
    title: "Microservices Analytics Platform",
    timeline: "Q3 2023 - Cloud Architecture",
    hasBorder: true
  },
  {
    category: "AI & Automation",
    title: "Intelligent Task Automation",
    timeline: "Q2 2023 - AI/ML Integration",
    hasBorder: true
  },
  {
    category: "Full Stack & AI",
    title: "Real-time AI Chat System",
    timeline: "Q1 2023 - Full Stack AI",
    hasBorder: false
  }
];

export const UI_STRINGS: UIStrings = {
  skills: {
    header: {
      badge: "Technical Expertise",
      title: "Skills & Technologies",
      description: "A comprehensive toolkit spanning full-stack development, AI/ML, and modern cloud technologies. From frontend frameworks to backend architectures and intelligent systems."
    },
    statistics: {
      categories: "Skill Categories",
      technologies: "Technologies"
    },
    filter: {
      all: "All",
      results: "Showing",
      noResults: {
        title: "No skills found",
        description: "Try selecting a different category"
      }
    },
    cta: {
      title: "Let's Build Something Together",
      description: "Have a project in mind? I'd love to discuss how my skills can help bring your ideas to life.",
      buttonText: "Start a Conversation"
    },
    card: {
      technologiesLabel: "technologies"
    }
  },
  projects: {
    header: {
      badge: "Portfolio",
      title: "Featured Projects."
    },
    statistics: {
      completed: "Completed Projects"
    },
    results: "Showing",
    noResults: {
      title: "No projects found",
      description: "Try adjusting your search or filter criteria"
    },
    cta: {
      title: "Interested in collaboration?",
      description: "I'm always open to discussing new opportunities and exciting projects. Let's build something amazing together."
    },
    card: {
      features: "Key Features",
      techStack: "Tech Stack",
      viewProject: "View Project"
    }
  }
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com", icon: "code" },
      { label: "LinkedIn", href: "https://linkedin.com", icon: "work" },
      { label: "Portfolio", href: "#projects", icon: "web" },
      { label: "Resume", href: "#resume", icon: "description" },
      { label: "Blog", href: "#blog", icon: "article" }
    ]
  },
  {
    title: "Technologies",
    links: [
      { label: "React & Next.js", href: "#skills" },
      { label: "Node.js & Python", href: "#skills" },
      { label: "AI & Machine Learning", href: "#skills" },
      { label: "Cloud & DevOps", href: "#skills" },
      { label: "Database Systems", href: "#skills" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  }
];

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/kigra58", icon: "code" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/krishna-gautam-5486081b1/", icon: "work" },
  // { label: "Twitter", href: "https://twitter.com", icon: "alternate_email" },
  { label: "Email", href: "mailto:krishna.gautam5899@gmail.com", icon: "mail" }
];