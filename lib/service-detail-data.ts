export interface ServiceDetailData {
  slug: string
  titlePart1: string
  titlePart2: string
  tagline: string
  iconSrc?: string
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

const DEFAULT_TESTIMONIALS = [
  { quote: "Hatch delivered a smooth, professional experience with clear communication and excellent results. Highly recommended.", author: "Gasior Law Office, LLC", location: "Illinois, United States", rating: 5 },
  { quote: "They understood our brand & translated it into a clean, modern digital presence. The process was smooth & well managed.", author: "NorthPeak Realty Group", location: "Texas, United States", rating: 5 },
  { quote: "Hatch unified our website, application and messaging into one cohesive digital experience. Everything now feels consistent and built to support growth.", author: "GrowthLoop Digital", location: "Australia", rating: 5 },
]

export const SERVICES_DETAIL: ServiceDetailData[] = [
  {
    slug: 'web-development',
    titlePart1: 'Web',
    titlePart2: 'Development',
    tagline: 'Smart, Scalable, and Designed for Growth.',
    iconSrc: '/home/hero/after-solutions.png',
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
      { image: '/home/projects/project-1.png', title: 'Project 1', href: '/projects' },
      { image: '/home/projects/project-2.png', title: 'Project 2', href: '/projects' },
      { image: '/home/projects/project-3.png', title: 'Project 3', href: '/projects' },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'app-software-development',
    titlePart1: 'App & Software',
    titlePart2: 'Development',
    tagline: 'Custom applications built for scale and impact.',
    description: 'We build custom applications and software tailored to your business needs, from cross-platform apps to e-commerce and on-demand solutions, helping you reach more customers efficiently.',
    purpleTags: ['Mobile Apps', 'Web Apps', 'React', 'Flutter'],
    blackTags: ['Cross-Platform', 'Scalable', 'User Centric'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We align on your vision, users, and success metrics to define a clear product roadmap and technical approach.' },
      { title: 'Design & Development', description: 'We design intuitive interfaces and build robust, maintainable code using modern stacks and agile delivery.' },
      { title: 'Testing, Launch & Optimization', description: 'We test thoroughly, deploy to stores and servers, and iterate based on real usage and feedback.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'A look at the apps we have built.',
    workItems: [],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'branding-positioning',
    titlePart1: 'Branding',
    titlePart2: '& Positioning',
    tagline: 'Visual identities that stand out and build trust.',
    description: 'We create professional, cohesive visual identities that make your business stand out, build trust and leave a lasting impression through brand strategy, graphic design and UI/UX solutions.',
    purpleTags: ['Brand Strategy', 'Visual Identity', 'UI/UX'],
    blackTags: ['Cohesive', 'Memorable', 'User Centric'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We explore your market, audience, and differentiators to define a brand strategy that drives recognition and growth.' },
      { title: 'Design & Development', description: 'We translate strategy into logos, typography, color systems, and guidelines that work across every touchpoint.' },
      { title: 'Testing, Launch & Optimization', description: 'We roll out your brand consistently and refine based on feedback and performance.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'Brands we have built.',
    workItems: [],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'ai-integration',
    titlePart1: 'AI',
    titlePart2: 'Integration',
    tagline: 'Smarter workflows and predictive growth.',
    description: 'Our AI solutions enhance performance, automate workflows, and provide predictive analytics, powering smarter growth for your business.',
    purpleTags: ['Chatbots', 'Automation', 'RAG Systems'],
    blackTags: ['Data-Driven', 'Scalable', 'Efficient'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We identify where AI can add the most value and define use cases, data needs, and success metrics.' },
      { title: 'Design & Development', description: 'We integrate models and APIs into your products and workflows with a focus on reliability and UX.' },
      { title: 'Testing, Launch & Optimization', description: 'We test for accuracy and safety, launch incrementally, and tune based on real-world performance.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'AI solutions we have delivered.',
    workItems: [],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'marketing',
    titlePart1: 'Marketing',
    titlePart2: '',
    tagline: 'Strategic campaigns that drive engagement and leads.',
    description: 'We connect you with customers where they spend their time, running strategic campaigns that boost engagement, build communities, and drive qualified leads through social media, SEO, PPC, and email marketing.',
    purpleTags: ['Social Media', 'Paid Ads', 'SEO'],
    blackTags: ['Data-Driven', 'Growth', 'Engagement'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We analyze your audience, channels, and competitors to define a marketing strategy that delivers measurable results.' },
      { title: 'Design & Development', description: 'We create campaigns, creatives, and landing experiences that convert and scale.' },
      { title: 'Testing, Launch & Optimization', description: 'We launch, A/B test, and optimize continuously to improve ROI and reach.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'Campaigns we have run.',
    workItems: [],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'content-creatives',
    titlePart1: 'Content',
    titlePart2: '& Creatives',
    tagline: 'Content that attracts and converts.',
    description: 'We create valuable, relevant content that attracts customers, showcases your expertise, and helps potential clients find your business online through content marketing and video production.',
    purpleTags: ['Content Strategy', 'Motion & Animation', 'Photo & Video'],
    blackTags: ['Storytelling', 'Engagement', 'Discoverable'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We define your content pillars, audience, and distribution to align content with business goals.' },
      { title: 'Design & Development', description: 'We produce articles, videos, and creatives that resonate and perform across channels.' },
      { title: 'Testing, Launch & Optimization', description: 'We publish, measure, and refine content based on engagement and conversion data.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'Content we have created.',
    workItems: [],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
  {
    slug: 'lead-generation',
    titlePart1: 'Lead',
    titlePart2: 'Generation',
    tagline: 'Qualified prospects ready to engage.',
    description: 'We deliver professional lead generation services that connect you with qualified prospects ready to engage with your business.',
    purpleTags: ['CRM Setup', 'Conversion Optimization', 'Funnel Strategy'],
    blackTags: ['Qualified', 'Scalable', 'Measurable'],
    processSteps: [
      { title: 'Strategy & Discovery', description: 'We map your funnel, audience, and conversion goals to design a lead gen strategy that scales.' },
      { title: 'Design & Development', description: 'We build landing pages, forms, and CRM flows that capture and nurture leads effectively.' },
      { title: 'Testing, Launch & Optimization', description: 'We run campaigns, test messaging and targeting, and optimize for cost per lead and conversion.' },
    ],
    workTitle: 'Our Work',
    workSubtitle: 'Leads we have generated.',
    workItems: [],
    testimonials: DEFAULT_TESTIMONIALS,
    faqs: DEFAULT_FAQS,
  },
]

export function getServiceBySlug(slug: string): ServiceDetailData | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_DETAIL.map((s) => s.slug)
}
