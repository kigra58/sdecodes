import { NavItem, ProjectItem, ExperienceItem, FormField, ContactInfo, SocialLink, HeroData, StatItem, ProjectRevealHeader, UIStrings, FooterSection, FooterLink } from "./interfaces";


export const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
export const BRAND_NAME="SDE"


export const MY_URLS={
  GITHUB_URL:"https://github.com/kigra58",
  LINKEDIN_URL:"https://www.linkedin.com/in/krishna-gautam-5486081b1/",
  EMAIL:"krishna.gautam5899@gmail.com",
  RESUME:"https://drive.google.com/file/d/1eZT78gyzCHDXWVfQhT9tE7PPl2HjUlzb/view?usp=drivesdk",
  NAME:"Krishna Gautam",
  EXPERIENCE:"4+ years experirence",
  PROFILE:"Software Engineer"
}

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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'Cloud Infrastructure',
    title: 'Cloud-Native Microservices Platform',
    timeline: '2023 - Cloud Architecture',
    hasBorder: true,
    description: 'Built scalable microservices architecture using Kubernetes and Docker. Implemented auto-scaling, load balancing, and service mesh for high availability.',
    features: [
      '95.9% uptime with auto-scaling policies',
      'Reduced deployment time by 70% with CI/CD',
      'Implemented service mesh for inter-service communication',
      'Real-time monitoring and alerting system'
    ],
    techStack: ['Kubernetes', 'Docker', 'AWS EKS', 'Istio', 'Prometheus', 'Grafana', 'Jenkins', 'Terraform', 'Go', 'gRPC'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'Full-Stack',
    title: 'Real-Time Collaboration Platform',
    timeline: '2023 - Full-Stack Development',
    hasBorder: true,
    description: 'Developed a real-time collaborative workspace with live editing, video conferencing, and project management features.',
    features: [
      'Real-time synchronization with WebSocket',
      'Optimistic UI updates for instant feedback',
      'Video conferencing with WebRTC',
      'Advanced permission management system'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'WebRTC', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'AI & Analytics',
    title: 'Predictive Analytics Dashboard',
    timeline: '2023 - AI/ML Development',
    hasBorder: false,
    description: 'Created an AI-powered analytics platform that predicts business trends and provides actionable insights using machine learning models.',
    features: [
      '90% accuracy in sales forecasting',
      'Real-time data processing with streaming analytics',
      'Interactive visualization with D3.js',
      'Automated anomaly detection system'
    ],
    techStack: ['Python', 'TensorFlow', 'React', 'D3.js', 'Apache Kafka', 'Elasticsearch', 'MongoDB', 'AWS SageMaker', 'Docker', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'Cloud & DevOps',
    title: 'Serverless API Gateway',
    timeline: '2022 - Cloud Development',
    hasBorder: true,
    description: 'Designed and implemented a serverless API gateway with automated deployment, monitoring, and cost optimization.',
    features: [
      '40% reduction in infrastructure costs',
      'Auto-scaling based on traffic patterns',
      'Automated testing and deployment pipelines',
      'Real-time performance monitoring'
    ],
    techStack: ['AWS Lambda', 'API Gateway', 'Serverless Framework', 'Terraform', 'CircleCI', 'New Relic', 'Node.js', 'TypeScript', 'DynamoDB'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'AI & Computer Vision',
    title: 'Intelligent Document Scanner',
    timeline: '2023 - AI Development',
    hasBorder: false,
    description: 'Built an AI-powered document scanning app that automatically extracts text, categorizes documents, and provides smart search capabilities.',
    features: [
      'OCR with 98% accuracy rate',
      'Automatic document categorization',
      'Intelligent search across all documents',
      'Cloud storage with encryption'
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Tesseract OCR', 'React Native', 'Firebase', 'Google Cloud Vision', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'Real Estate',
    title: 'Property Review Platform',
    timeline: '2022 - Full-Stack Development',
    hasBorder: true,
    description: 'Comprehensive property review platform connecting tenants and landlords with rating systems, rental management, and dispute resolution features.',
    features: [
      'Dual-sided rating system for tenants and landlords',
      'Automated rent payment tracking and reminders',
      'Property maintenance request management',
      'Document storage with e-signature capabilities'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Stripe', 'AWS S3', 'JWT Auth', 'Socket.io', 'Docker'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    category: 'Social & Dating',
    title: 'Modern Dating App',
    timeline: '2022 - Mobile Development',
    hasBorder: true,
    description: 'Location-based dating application with AI-powered matching, real-time chat, and advanced privacy features for meaningful connections.',
    features: [
      'AI-powered compatibility matching algorithm',
      'Real-time messaging with read receipts',
      'Location-based user discovery with radius filters',
      'Video calling with end-to-end encryption'
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'JWT Auth', 'TensorFlow Lite', 'Twilio', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
    link: '#'
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    position: 'left',
    title: MY_URLS.PROFILE,
    company: 'Biz4group LLC',
    description: 'Developing and maintaining web applications using React, Node.js, and TypeScript. Creating RESTful APIs and implementing responsive user interfaces. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    timeline: '2022 - Present'
  },
  {
    position: 'right',
    title: 'FullStack Developer',
    company: 'LetsGrowMore Internship',
    description: 'Built full-stack web applications using React, Node.js, and MongoDB. Implemented user authentication and authorization systems. Developed RESTful APIs and integrated third-party services. Created responsive UI components with modern CSS frameworks.',
    timeline: '2021 - 2021'
  }
];

export const contactInfo: ContactInfo[] = [
  {
    icon: 'mail',
    label: 'Email Me',
    value:  MY_URLS.EMAIL
  },
  {
    icon: 'location_on',
    label: 'Location',
    value: 'Jaipur India'
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
  title: "Hi, I'm "+MY_URLS.NAME,
  subtitle: MY_URLS.PROFILE,
  description: MY_URLS.PROFILE+" with " + MY_URLS.EXPERIENCE + " building scalable full-stack and AI-driven applications. Expertise in JavaScript/TypeScript, React, Node.js, cloud-native architectures, and LLM-based systems. Proven ability to design microservices, integrate payment gateways, and deploy production systems using AWS, GCP, Docker, Kubernetes, and CI/CD pipelines. Successfully delivered enterprise-level e-commerce platforms with 40% performance improvements, AI-powered fitness applications with personalized recommendations, and real-time data processing systems. Led cross-functional teams through complete software development lifecycles, from architecture design to production deployment and maintenance.",
  buttons: [
    { text: "View Projects", variant: "primary", href: "/projects" },
    { text: "Contact Me", variant: "secondary", href: "/contact" }
  ],
  profileImage: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPvCunqKnPOrFU6nflBHhtb0qwLtt7RMhjC-mL03aIZ8Xi2yG4kT7vjGsYoUHsCKYC_QkqvCYpMyAomGrERbzaxVYkHnti74LBG0rz9hm-w3Gdb1yFH3cbRFImVkSIU5Zi9bXijoEhbZ8_wyCUiGELLPKYiGxpRQBYzYy86kI_ZI0FVTA1nSSsC9q9eOExlresUCkmtzLVbYTgsTK_M1wLFsbFdP5wblk7wQ6XBFe0tCpsxK29Np-heGvlnQ-BDKgrFn6w3CuQ-mk",
    alt: MY_URLS.NAME+" profile"
  }
};

export const STATS_DATA: StatItem[] = [
  {
    title: "Building intelligent solutions with cutting-edge AI technology.",
    value: MY_URLS.EXPERIENCE,
    description: "Years of Full Stack AI Development",
    variant: "featured",
    span: "md:col-span-2"
  },
  {
    title: "",
    value: "10+",
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
    text: "View Profile",
    href: "#",
    icon: "arrow_forward"
  }
};

export const EXPERIENCE_HEADER = {
  badge: "Professional Journey",
  title: "Experience.",
  description: "A journey through full-stack development, from building responsive interfaces to architecting scalable backend systems."
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



export const THEME={
  DARK:"dark",
  LIGHT:"light"
}



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
      { label: "GitHub", href: MY_URLS.GITHUB_URL, icon: "code" },
      { label: "LinkedIn", href: MY_URLS.LINKEDIN_URL, icon: "work" },
      { label: "Resume", href: MY_URLS.RESUME, icon: "description" },
      // { label: "Portfolio", href: "#projects", icon: "web" },
      // { label: "Blog", href: "#blog", icon: "article" }
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
    title: "Developer links",
    links: [
      { label: "Skills", href: "skills.sh" },
      // { label: "Terms of Service", href: "#terms" },
      // { label: "Cookie Policy", href: "#cookies" }
    ]
  }
];

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
  { label: "GitHub", href: MY_URLS.GITHUB_URL, icon: "code" },
  { label: "LinkedIn", href: MY_URLS.LINKEDIN_URL, icon: "work" },
  { label: "Email", href: "mailto:" + MY_URLS.EMAIL, icon: "mail" }
  // { label: "Twitter", href: "https://twitter.com", icon: "alternate_email" },
];

export const PORTFOLIO_HERO = {
  badge: "Portfolio",
  title: "Featured<br/>Projects.",
  description: "A curated collection of full-stack applications and AI-powered solutions built with modern technologies and architectural best practices.",
  stats: {
    count: PROJECT_ITEMS.length,
    label: "Completed Projects"
  }
};


export const UIText = {
  TRENDING_LABEL: 'GitHub Trending',
  TRENDING_EMOJI: 'ð',
  TITLE: '#1 Repository of the Day',
  VIEW_ON_GITHUB: 'View on GitHub',
  LOADING: 'Loading trending repository...',
  ERROR: 'Unable to load trending repository. Please try again later.',
  STARS_LABEL: 'stars',
} as const;