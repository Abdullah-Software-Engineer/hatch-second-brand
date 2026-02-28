export interface ServiceDetailData {
  slug: string
  titlePart1: string
  titlePart2: string
  tagline: string
  iconSrc?: string
  /** Path to hero/creative image below heading (e.g. /services/1.webp) */
  heroImage?: string
  description: string
  purpleTags: string[]
  blackTags: string[]
  processSteps: { title: string; description: string }[]
  workTitle?: string
  workSubtitle?: string
  workItems?: { image?: string; title?: string; href?: string }[]
  testimonials?: { quote: string; author: string; location: string; rating?: number }[]
  faqs?: { question: string; answer: string }[]
}

const DEFAULT_FAQS = [
  { question: "How does the project process work?", answer: "Our process begins with a discovery phase to understand your goals. We then move to planning, design, development, and finally deployment. Throughout each stage, we maintain open communication to ensure the final product aligns with your vision." },
  { question: "What is your typical timeline for a project?", answer: "Timelines vary depending on the project's complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide a detailed timeline during the initial consultation." },
  { question: "Do you offer post-launch support?", answer: "Yes, we offer various maintenance and support packages to ensure your digital product remains secure, up-to-date, and performs optimally after launch." },
  { question: "What technologies do you specialize in?", answer: "We specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. For mobile apps, we use React Native. We also have expertise in AI integration and cloud solutions." },
  { question: "Can you help with existing projects?", answer: "Absolutely. We can audit, refactor, or extend your current codebase and integrate new features or redesigns while keeping your business running." },
  { question: "How do you handle project pricing?", answer: "We offer both fixed-price and time-and-materials engagement models. After assessing your requirements, we provide a transparent proposal outlining the costs and deliverables." },
]

const SHARED_TESTIMONIALS = [
  { quote: "Hatch has been very professional throughout. Top-quality work delivered, and we would definitely work with them again.", author: "Jobson Roy", location: "United Kingdom", rating: 5 },
  { quote: "Hatch is excellent at what they do. They gave our script a whole new feel and made it much more engaging.", author: "Ronny Hill", location: "United Kingdom", rating: 5 },
  { quote: "Hatch delivered a smooth, professional experience with clear communication and excellent results. Highly recommended.", author: "Gasior Law Office, LLC", location: "Illinois, United States", rating: 5 },
  { quote: "They understood our brand & translated it into a clean, modern digital presence. The process was smooth & well managed.", author: "NorthPeak Realty Group", location: "Texas, United States", rating: 5 },
  { quote: "Hatch unified our website, application and messaging into one cohesive digital experience. Everything now feels consistent and built to support growth.", author: "GrowthLoop Digital", location: "Australia", rating: 5 },
  { quote: "They handled our digital needs with clarity and delivered exactly what we were looking for.", author: "WellSpring Medical Clinic", location: "London, United Kingdom", rating: 5 },
  { quote: "Hatch rebuilt our e-commerce website. The shopping experience is smoother, easier to navigate.", author: "Coastal Supply Co", location: "Sydney, Australia", rating: 5 },
]

export const SERVICES_DETAIL: ServiceDetailData[] = [
  {
    slug: 'web-development',
    titlePart1: 'Web',
    titlePart2: 'Development',
    tagline: 'Smart, Scalable, and Designed for Growth.',
    iconSrc: '/home/hero/after-solutions.webp',
    heroImage: '/services/1.webp',
    description: 'We build modern, conversion-focused websites and digital platforms designed to help your business grow. From intuitive UI/UX design to robust frontend and backend development, we create seamless, responsive, and scalable web experiences. Our expertise spans e-commerce platforms, PHP-based systems, custom web apps, and CMS integrations. We also deliver cross-platform solutions that perform flawlessly across devices and integrate AI tools like chatbots and automation to enhance functionality. Whether you need a high-performing website, an optimized online store, or a dynamic digital product, we make sure your web presence works as hard as you do.',
    purpleTags: ['Development & Management', 'E-Commerce Development', 'Frontend Development', 'PHP', 'CMS Integrations'],
    blackTags: ['Digital First', 'Scalable Systems', 'Think Digital', 'User Centric'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We start by understanding your business, audience, and goals. From content structure to user journeys, every detail is mapped to ensure your website is built with purpose and measurable outcomes in mind.' },
      { title: 'Design & Development', description: 'Our design and development teams work in sync to translate strategy into a beautiful, functional product. We use modern frameworks and best practices to deliver a site that performs and converts.' },
      { title: 'Testing, Launch & Optimization', description: 'Before launch we rigorously test across devices and browsers. After go-live we monitor performance and user behavior, making data-driven optimizations to keep your site at its best.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'A look at the websites we have built.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'app-software-development',
    titlePart1: 'App &',
    titlePart2: 'Software Development',
    tagline: 'Smart, scalable, and seamless.',
    heroImage: '/services/3.webp',
    description: 'We design and develop custom software solutions that perform across every platform. Whether it\'s cross-platform mobile apps, e-commerce systems, or on-demand solutions, our team builds scalable, secure, and seamless experiences that turn users into loyal customers.',
    purpleTags: ['On-Demand Solutions', 'Cross Platform Apps', 'E-Commerce Development'],
    blackTags: ['AI-Powered', 'Future Built', 'Think Digital', 'User Centric', 'Scalable Systems', 'Product Led', 'Growth Ready', 'Digital First'],
    processSteps: [
      { title: 'Concept & Design', description: 'We translate your idea into a user-centric design that\'s functional and visually engaging.' },
      { title: 'Develop & Test', description: 'Our developers build agile, scalable applications and rigorously test them for performance.' },
      { title: 'Launch & Support', description: 'We ensure smooth deployment and ongoing support for long-term success.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'See how we design digital solutions that drive performance and deliver seamless user experiences.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
  },
  {
    slug: 'branding-positioning',
    titlePart1: 'Branding',
    titlePart2: '& Positioning',
    tagline: 'Design that defines your brand and makes it unforgettable.',
    heroImage: '/branding-img.webp',
    description: 'We help businesses stand out with meaningful, cohesive brand identities. From brand strategy and visual guidelines to graphic and UI/UX design, our process ensures every element reflects your purpose, connects with your audience, and builds long-term brand recognition.',
    purpleTags: ['UI/UX Design Services', 'Brand Strategy & Visual Guidelines', 'Graphic & Visual Design'],
    blackTags: ['AI-Powered', 'Future Built', 'Think Digital', 'User Centric', 'Scalable Systems', 'Product Led', 'Growth Ready', 'Digital First'],
    processSteps: [
      { title: 'Define', description: 'We begin by defining your brand\'s foundation, who you are, what you stand for, and who you\'re speaking to. Through research and strategy, we reveal insights that shape your visual identity and guide every creative decision.' },
      { title: 'Design', description: 'This is where ideas take form. We translate your brand strategy into visuals that connect, from logos, color systems, and typography to complete UI/UX experiences. Every detail is crafted to make your brand stand out and stay memorable.' },
      { title: 'Deliver', description: 'We refine and deliver final brand assets ready for digital and print. From style guides to web-ready visuals, we ensure your identity remains consistent, scalable, and impactful across every touchpoint.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'See how we create visuals that stand out.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'ai-integration',
    titlePart1: 'AI',
    titlePart2: 'Integration',
    tagline: 'Improve decision-making with AI-powered solutions.',
    heroImage: '/services/4.webp',
    description: 'From AI chatbot development and NLP automation tools to predictive analytics and workflow optimization, we help businesses integrate intelligence into every step of their operations, driving faster insights, smoother workflows, and smarter growth.',
    purpleTags: ['AI Chatbot Development', 'NLP & Automation Tools', 'Predictive Analytics', 'Workflow Optimization'],
    blackTags: ['AI-Powered', 'Future Built', 'Think Digital', 'User Centric', 'Scalable Systems', 'Product Led', 'Growth Ready', 'Digital First'],
    processSteps: [
      { title: 'Identify Opportunities', description: 'We assess where AI can improve performance and streamline operations.' },
      { title: 'Integrate & Automate', description: 'From chatbots to predictive tools, we implement AI solutions tailored to your workflows.' },
      { title: 'Measure & Enhance', description: 'We continuously refine systems using real-time data to ensure smarter, faster growth.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'Transforming challenges into AI-powered outcomes.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
  },
  {
    slug: 'marketing',
    titlePart1: 'Marketing',
    titlePart2: '',
    tagline: 'Where strategy meets storytelling.',
    heroImage: '/services/5.webp',
    description: 'We connect you with your audience through targeted digital marketing that drives engagement and sales. Our expertise includes social media marketing, SEO & conversion rate optimization, PPC advertising, and email marketing, all designed to boost visibility, generate leads, and build long-term brand loyalty.',
    purpleTags: ['Social Media Marketing', 'SEO & Conversion Optimization', 'PPC Advertising', 'Email Marketing'],
    blackTags: ['AI-Powered', 'Future Built', 'Think Digital', 'User Centric', 'Scalable Systems', 'Product Led', 'Growth Ready', 'Digital First'],
    processSteps: [
      { title: 'Research & Strategy', description: 'We analyze audiences and trends to build performance-driven marketing plans.' },
      { title: 'Create & Launch', description: 'Our creative team executes targeted campaigns across digital channels for maximum reach.' },
      { title: 'Analyze & Scale', description: 'We monitor, optimize, and scale campaigns to boost ROI and sustain momentum.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'A look at our marketing campaigns that do more than reach.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
  },
  {
    slug: 'content-creatives',
    titlePart1: 'Content',
    titlePart2: '& Creatives',
    tagline: 'Content that connects, converts, and continues to deliver.',
    heroImage: '/services/6.webp',
    description: 'We plan, create, and produce content that supports real business goals. From content strategy to photography, video production, editing, and animation, we handle the full creative process. Every asset is made to stay on-brand, feel relevant, and work across platforms. No guesswork. Just thoughtful content that connects and lasts.',
    purpleTags: ['Video Production', 'Video Editing', 'Animation', 'Content Strategy', 'Content Marketing', 'Photography'],
    blackTags: ['AI-Powered', 'Future Built', 'Think Digital', 'User Centric', 'Scalable Systems', 'Product Led', 'Growth Ready', 'Digital First'],
    processSteps: [
      { title: 'Research & Strategize', description: 'We start by understanding your audience, goals, and platforms. Content ideas are shaped by intent, trends, and what fits your brand, not assumptions.' },
      { title: 'Create & Produce', description: 'Our team handles photography, video production, editing, and animation. Everything is created with a clear purpose, strong visuals, and consistent brand voice.' },
      { title: 'Refine & Deliver', description: 'We polish the final assets and prepare them for use across digital channels. The result is content that\'s ready to publish, scale, and perform.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'See how our content and creatives turn ideas into clear stories people actually engage with.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'lead-generation',
    titlePart1: 'Lead',
    titlePart2: 'Generation',
    tagline: 'Leads that drive real growth.',
    heroImage: '/services/7.webp',
    description: 'We specialize in B2B and B2C lead generation that delivers results. Through outbound call center services, targeted campaigns, and lead nurturing strategies, we connect you with qualified prospects who are ready to convert. Our goal is simple: consistent, high-quality leads that grow your business.',
    purpleTags: ['Outbound Call Center Services', 'Targeted Campaigns', 'Lead Nurturing'],
    blackTags: ['AI-Powered', 'Future Built', 'Think Digital', 'User Centric', 'Scalable Systems', 'Product Led', 'Growth Ready', 'Digital First'],
    processSteps: [
      { title: 'Target', description: 'We define your audience and acquisition goals.' },
      { title: 'Attract', description: 'We launch campaigns that generate qualified leads.' },
      { title: 'Convert', description: 'We nurture and hand off ready-to-close prospects.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'We don\'t chase leads, we attract the right ones through strategy and precision.',
    workItems: [
      { image: '/services/1.webp', title: 'Web Development', href: '/projects' },
      { image: '/services/2.webp', title: 'App & Software', href: '/projects' },
      { image: '/services/3.webp', title: 'Branding', href: '/projects' },
      { image: '/services/4.webp', title: 'AI Integration', href: '/projects' },
      { image: '/services/5.webp', title: 'Marketing', href: '/projects' },
      { image: '/services/6.webp', title: 'Content & Creatives', href: '/projects' },
      { image: '/services/7.webp', title: 'Lead Generation', href: '/projects' },
      { image: '/services/Our.webp', title: 'Our Work', href: '/projects' },
    ],
    testimonials: SHARED_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
]

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DETAIL.map((s) => s.slug)
}
