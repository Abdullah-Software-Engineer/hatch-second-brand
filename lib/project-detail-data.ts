/**
 * Reusable project detail page data types.
 * Sections can be composed in any order for multiple layouts.
 */

export type ProjectDetailSectionType =
  | 'overview'   // intro paragraph + tags
  | 'challenges' // heading + bullet list + optional closing
  | 'objectives'
  | 'strategy'   // heading + paragraphs + optional media
  | 'solution'   // heading + bullets + optional dual media
  | 'deliverables'
  | 'results'    // heading + paragraphs

export interface ProjectDetailSectionBase {
  id: string
  type: ProjectDetailSectionType
  title: string
}

export interface OverviewSection extends ProjectDetailSectionBase {
  type: 'overview'
  intro: string
  tags: string[]
}

export interface ListSection extends ProjectDetailSectionBase {
  type: 'challenges' | 'objectives' | 'solution' | 'deliverables'
  intro?: string
  items: string[]
  closing?: string
}

export interface ParagraphSection extends ProjectDetailSectionBase {
  type: 'strategy' | 'results'
  paragraphs: string[]
  mediaSrc?: string // single hero-style media after content
}

export interface SolutionSection extends ListSection {
  type: 'solution'
  mediaSrcs?: [string?, string?] // optional dual images after list
}

export type ProjectDetailSection =
  | OverviewSection
  | ListSection
  | ParagraphSection
  | SolutionSection

export interface ProjectDetailTestimonial {
  quote: string
  author: string
  location?: string
  rating?: number
}

export interface NextProjectPreview {
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
}

export interface ProjectDetailData {
  slug: string
  /** Purple/accent part of hero title (e.g. "Sexner") */
  titleAccent: string
  /** Rest of hero title (e.g. "Web Redesign & Development") */
  titleRest: string
  tagline: string
  iconSrc?: string
  /** Categories shown under tagline (e.g. "Branding, Web Development, UI/UX Design") */
  categories?: string
  /** Hero image/video placeholder or src */
  heroMediaSrc?: string
  /** Sections in display order - allows multiple layouts */
  sections: ProjectDetailSection[]
  testimonials?: ProjectDetailTestimonial[]
  nextProject?: NextProjectPreview
}

// ——— Shared testimonials ———

const DEFAULT_TESTIMONIALS: ProjectDetailTestimonial[] = [
  { quote: 'Hatch has been very professional throughout. Top-quality work delivered, and we would definitely work with them again.', author: 'Jobson Roy', location: 'United Kingdom', rating: 5 },
  { quote: 'Hatch is excellent at what they do. They gave our script a whole new feel and made it much more engaging.', author: 'Ronny Hill', location: 'United Kingdom', rating: 5 },
  { quote: 'Hatch delivered a smooth, professional experience with clear communication and excellent results. Highly recommended.', author: 'Gasior Law Office, LLC', location: 'Illinois, United States', rating: 5 },
  { quote: 'They understood our brand & translated it into a clean, modern digital presence. The process was smooth & well managed.', author: 'NorthPeak Realty Group', location: 'Texas, United States', rating: 5 },
  { quote: 'Hatch unified our website, application and messaging into one cohesive digital experience. Everything now feels consistent and built to support growth.', author: 'WellSpring Medical Clinic', location: 'London, United Kingdom', rating: 5 },
  { quote: 'They handled our digital needs with clarity and delivered exactly what they were looking for.', author: 'Coastal Supply Co', location: 'Sydney, Australia', rating: 5 },
  { quote: 'Hatch rebuilt our e-commerce website. The shopping experience is smoother, easier to navigate.', author: 'GrowthLoop Digital', location: 'Australia', rating: 5 },
]

const TAGLINE = 'We help startups launch, grow, and scale through clean, conversion-focused design.'

export const PROJECTS_DETAIL: ProjectDetailData[] = [
  // ——— Green (Web Design) ———
  {
    slug: 'green',
    titleAccent: 'Green',
    titleRest: 'Web Design',
    tagline: TAGLINE,
    categories: 'Web design, UI/UX design, Web development, Responsive Layout',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'Green is a next-generation Electric Vehicle (EV) infrastructure platform designed to simplify the charging experience for modern drivers. The website serves as a central hub, connecting users to a nationwide network of charging stations while integrating seamless payment systems and intelligent trip planning into one cohesive digital ecosystem.',
        tags: ['Web design', 'UI/UX design', 'Web development', 'Responsive Layout'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Multiple Apps: The need for different apps for different charging networks.',
          'Range Anxiety: Uncertainty regarding station availability during long trips.',
          'Payment Friction: Complicated or incompatible payment methods at various terminals.',
          'Technical Barriers: Complex interfaces that make a simple task feel like a chore.',
        ],
        closing: 'The EV market often suffers from "fragmentation fatigue."',
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Establish Green as a premium, reliable leader in sustainable energy.',
          'Provide real-time data to reduce range anxiety and empower users.',
          'Drive app downloads and station usage through a clear "One-Window" value proposition.',
          'Create a mobile-first experience optimized for users on the go.',
          'Prioritize visual hierarchy to make maps, stations and app features immediately understandable.',
          'Reduce cognitive load with clean layouts and scannable content.',
          'Build trust through visible partner logos, supported payment methods and feedback.',
          'Maintain brand consistency with a cohesive color palette, typography, and iconography across all screens.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'Our design strategy focused on translating Green\'s objectives into a cohesive, user-centered digital experience: We used a high-contrast dark theme with vibrant Electric Green accents to communicate reliability, innovation and environmental consciousness.',
          'Key information like station availability, charging status and trip planning was prioritized. The platform unifies charging network data, payment options and app control in a single, intuitive interface, reducing friction and driving engagement.',
          'Recognizing on-the-go usage, we optimized navigation for seamless mobile interactions. Layouts are clean and scannable, content is chunked into digestible sections, and micro-interactions guide users without distraction.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'Immersive hero section establishes Green as a premium, trustworthy brand.',
          'Interactive network map shows station locations, availability, and trip planning.',
          'Integrated app ecosystem acts as a central tool for vehicle charging management.',
          'Clearly displayed payment methods reduce friction.',
          'Clean layouts and clear visual hierarchy make content easy to scan.',
          'Partner logos, verified payment options and feedback cues build user trust.',
          'Consistent brand identity with typography, color palette, and custom icons across all screens.',
        ],
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Immersive hero section design showcasing Green as a premium, trustworthy brand.',
          'Interactive network map illustrating station locations, availability and trip planning.',
          'Integrated app ecosystem interface for managing vehicle charging.',
          'Payment method display design for reduced friction.',
          'Clean layouts and visual hierarchy for scannable, easy-to-navigate content.',
          'Trust-building elements including partner logos, verified payment options and feedback cues.',
          'Consistent brand identity applied across screens.',
          'Clear CTA and checkout design to drive conversions.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The redesign delivered a seamless, user-friendly experience that reinforces Green\'s premium brand. Interactive maps and the integrated app made station locations and trip planning easy, while clean layouts and clear hierarchy reduced cognitive load. Visible payment options and partner logos built trust and consistent branding across screens created a cohesive, high-quality digital presence. The site now drives better engagement, usability and conversion potential.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'us-ecom-automation',
      title: 'US Ecom Automation',
      description: 'A comprehensive automation platform designed to transform manual e-commerce operations into streamlined, scalable systems.',
      tags: ['Web Design', 'Automation'],
      image: '/home/projects/project-1.png',
    },
  },
  // ——— US Ecom Automation ———
  {
    slug: 'us-ecom-automation',
    titleAccent: 'US Ecom Automation',
    titleRest: 'Web Design',
    tagline: TAGLINE,
    categories: 'Web design, UI/UX design, Web development',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'US Ecom AutomatioN is a comprehensive automation platform designed to transform manual e-commerce operations into streamlined, scalable systems. The platform supports multiple marketplaces and store types from Shopify and Amazon to TikTok Shop, Walmart, Etsy, and more, automating tasks like product listings, orders, fulfillment and optimization so businesses can focus on growth rather than operational complexity.',
        tags: ['Web design', 'UI/UX design', 'Web development'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Struggled with manual, time-intensive workflows that limited growth.',
          'Sellers faced inconsistent performance across multiple e-commerce platforms.',
          'There was a lack of scalable systems to support expansion into new channels.',
          'Operational complexity and fragmented tools made efficiency and growth difficult.',
          'Potential users lacked clarity on how automation could transform everyday operational tasks.',
        ],
        closing: 'These challenges make it difficult for small and mid-sized sellers to scale efficiently.',
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Make US Ecom Automation\'s value proposition instantly clear on the homepage.',
          'Highlight automation services for all major platforms (Amazon, Shopify, Walmart, TikTok Shop, Etsy etc).',
          'Reinforce trust with professional design and visual cues that reflect execution and reliability.',
          'Improve user understanding of the automation process from onboarding to results.',
          'Drive qualified leads and consultation requests through optimized calls to action.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'To achieve these objectives, we focused on clarity, hierarchy, and conversion: Crafted a clear hero message that communicates instantly. Built service sections that explain automation offerings for each marketplace. Designed an intuitive process section to make complex operations understandable at a glance.',
          'Employed consistent visual hierarchy and spacing to create easy information flow and reduce information load. Strategically placed CTAs ("Get Started", "Schedule a Consultation") to maximize conversions. This approach ensured the site was both informative and actionable, inviting users to engage with the platform.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'Clear positioning of services across Amazon, Shopify, Walmart, TikTok Shop, Etsy, and more.',
          'A simple, digestible automation process section showing what clients can expect.',
          'Professional visual design that establishes credibility and modern digital presence.',
          'Strategic content structure to guide users from awareness to action.',
          'Trust-building elements like success stories and measurable impact.',
        ],
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Fully responsive website design optimized for desktop and mobile.',
          'Marketplace automation service pages.',
          'Automation process visualization.',
          'Consultation and lead capture CTAs integrated throughout the site.',
          'Professional UI design system with modern typography, spacing, and visual hierarchy.',
          'Trust and performance sections showcasing impact and client growth potential.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The website clearly communicates the automation value proposition and helps users quickly understand how E-Commerce Automation can transform their operations. The structured layout and consistent visual hierarchy improved usability and engagement. Strategic placement of CTAs increased lead generation potential, while the professional design strengthened brand credibility and trust. This raised the platform\'s market positioning, making it easier for businesses to consider automation as their next step toward scaling.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'bookworm',
      title: 'Bookworm',
      description: 'Bookworm is a dynamic platform designed for book enthusiasts, offering the ability to borrow, rent, or buy books. It is a generative AI-based book recommendation system offering personalized book suggestions, ensuring users find the most relevant titles.',
      tags: ['App design', 'UI/UX design', 'App development'],
      image: '/home/projects/project-1.png',
    },
  },
  // ——— Bookworm ———
  {
    slug: 'bookworm',
    titleAccent: 'Bookworm',
    titleRest: 'App Design',
    tagline: TAGLINE,
    categories: 'App design, UI/UX design, App development',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'Bookworm is a dynamic platform designed for book enthusiasts, offering the ability to borrow, rent or buy books. It is a Generative AI-based book recommendation system designed to enhance the reading experience by offering personalized book suggestions, ensuring users find the most relevant titles.',
        tags: ['App design', 'UI/UX design', 'App development'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Book enthusiasts find themselves in a challenging situation, lacking a centralized platform that can smoothly integrate the processes of buying, renting, and borrowing books, all while providing personalized recommendations and an interactive space for community discussions and reviews.',
          'Existing solutions in the market are fragmented, thereby impeding the development of a comprehensive and immersive reading experience. This leads the user to go to a hefty process each time they want to get a book online.',
          'Furthermore, the fragmented nature of current options presents a hurdle, confining readers to limited transaction methods and generic book recommendations.',
        ],
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Acknowledging the challenges, Bookworm aims to address these issues by creating an innovative one-stop shop for book lovers. This will seamlessly integrate buying, renting and borrowing options, feature transparent pricing based on book condition, cultivate a lively community for discussions and implement an advanced recommendation system.',
          'The ultimate objective is to redefine the book discovery experience and offer readers a comprehensive and captivating platform tailored to their diverse preferences ultimately strengthening, promoting and providing a unified platform for reading culture in the society.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'Conducted market research to validate demand and identify differentiation opportunities. Designed a unified platform combining buying, renting and borrowing in one ecosystem. Implemented a transparent deposit and pricing system based on book condition and quality.',
          'Built a generative AI recommender using the ChatGPT API for personalized suggestions. Integrated discussion sections and book-specific chatbots for interactive engagement. Developed a waitlist system and borrowing limits to ensure fair access. Added a dedicated marketplace for book-related products. Built a scalable, modular backend architecture.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'Developed an all-in-one book marketplace enabling users to buy, rent or borrow through a single platform.',
          'Built a smart search and category system for seamless book discovery.',
          'Integrated AI-powered recommendations to personalize user experience.',
          'Implemented a transparent deposit and pricing mechanism based on book condition.',
          'Added waitlist management and borrowing limits to ensure fair usage.',
          'Enabled in-app discussions and book-specific chatbots for interactive learning.',
          'Launched a dedicated marketplace for book-related products and accessories.',
          'Designed a secure payment gateway with smooth checkout flow.',
          'Built a scalable backend to support growing users and transactions.',
          'Optimized the UI/UX for simplicity, speed, and mobile responsiveness.',
        ],
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Fully functional application (buy, rent, borrow system).',
          'Minimal, clean and visually appealing layout.',
          'AI-powered recommendation engine integration.',
          'Secure payment and deposit management system.',
          'User dashboard with waitlist and borrowing controls.',
          'Book discussion and chatbot integration.',
          'Admin panel for inventory and user management.',
          'Responsive UI/UX design for all devices.',
          'Deployment-ready scalable backend architecture.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The platform transformed the way book lovers discover, access and enjoy books by providing a single, seamless space for buying, renting and borrowing. Personalized AI recommendations helped readers find books that match their tastes, while discussion sections and chatbots encouraged interaction and learning. Transparent pricing, waitlists and borrowing limits made the experience fair and convenient, reducing friction and saving time. Overall, the app made reading more accessible, engaging and enjoyable, creating a community-driven ecosystem that caters to the needs of modern readers.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'zoundz',
      title: 'Zoundz',
      description: 'A cohesive brand identity and digital asset package that unifies visual presence across platforms.',
      tags: ['Branding', 'Digital package'],
      image: '/home/projects/project-1.png',
    },
  },
  // ——— Zoundz ———
  {
    slug: 'zoundz',
    titleAccent: 'Zoundz',
    titleRest: 'Branding',
    tagline: TAGLINE,
    categories: 'Branding, Digital package, Guideline',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'Zoundz approached us to create a cohesive brand identity and digital asset package that would unify their visual presence across platforms. The goal was to ensure consistency in both digital and physical touchpoints, strengthen brand recognition, and provide all necessary assets for marketing, app store presence, and internal communication.',
        tags: ['Branding', 'Digital package', 'Guideline'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Zoundz had inconsistent branding across platforms, causing a fragmented visual identity.',
          'Digital assets like app store badges, social graphics, and email templates were not standardized.',
          'Internal and external communications lacked a centralized reference for the brand.',
          'Limited cohesive guidelines made it difficult for teams to produce on-brand content efficiently.',
        ],
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Establish a consistent and professional brand identity across all touchpoints.',
          'Provide a complete set of digital assets for marketing, communications, and app presence.',
          'Enable teams to create on-brand content quickly using standardized templates and guidelines.',
          'Strengthen brand recognition and trust across both internal and external audiences.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'Conducted an audit of existing branding to identify inconsistencies and gaps. Defined a unified visual language, including logo usage, color palette, typography, and iconography. Designed a comprehensive brand guideline document for internal and external reference.',
          'Created digital asset templates optimized for app stores, email campaigns, social media, and portals. Ensured all assets were flexible, scalable, and easy to implement across channels.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'App store badges for iOS and Android.',
          'Logos in multiple formats and variations.',
          'Email graphics and templates for campaigns.',
          'Portal banners and internal communication assets.',
          'Slack team graphics for consistent internal branding.',
          'Social media share graphics.',
          'A brand guideline document detailing usage, typography, colors, and tone.',
        ],
        closing: 'All assets were designed to maintain visual consistency, reinforce brand identity, and simplify content creation for marketing and internal teams.',
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Comprehensive brand guideline document.',
          'Ready-to-use logos, app badges, email templates, portal banners, and social graphics.',
          'Slack team graphics for internal communication.',
          'Templates for social sharing, marketing campaigns, and digital content.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The project gave Zoundz a cohesive, professional brand identity across all digital and internal channels. Teams could now produce on-brand content efficiently, ensuring consistency in marketing and communications. The brand guidelines and digital asset package enhanced recognition and trust among users, while enabling future campaigns and platform updates to maintain a polished, unified visual presence.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'pidgin-toes',
      title: 'Pidgin Toes',
      description: 'A sustainable children\'s footwear brand focused on comfort, customization and eco-conscious design.',
      tags: ['Brand deck', 'Web design', 'UI/UX design'],
      image: '/home/projects/project-1.png',
    },
  },
  // ——— Pidgin Toes ———
  {
    slug: 'pidgin-toes',
    titleAccent: 'Pidgin Toes',
    titleRest: 'Brand Deck',
    tagline: TAGLINE,
    categories: 'Web design, UI/UX design, Web development',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'Pidgin Toes Kids Flip Flops is a sustainable children\'s footwear brand focused on comfort, customization and eco-conscious design. The client approached us to develop a cohesive brand deck that clearly communicates their product innovation, sustainability mission and playful identity.',
        tags: ['Brand deck', 'Web design', 'UI/UX design'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'The kids\' flip-flop market is crowded and highly competitive.',
          'Parents prioritize comfort and durability, while kids care about fun design.',
          'The brand had strong product features (Feathersoft toe cord, recycled tire soles, customization) but lacked a clear, structured brand story.',
          'Messaging needed to highlight sustainability without overwhelming the playful tone.',
        ],
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Develop a clear and compelling brand narrative.',
          'Position Pidgin Toes as both comfort-first and eco-conscious.',
          'Highlight product USPs: 1. "Feathersoft" toe cord 2. Dreamcloud comfort soles 3. Recycled tire materials 4. Customizable straps.',
          'Create a visually engaging deck suitable for retailers and distributors.',
          'Maintain a fun, kid-friendly tone while appealing to parents.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'Structured the deck using a problem → solution narrative. Started with the key issue: scratchy toe cord to create relatability. Positioned Feathersoft toe cord as the hero innovation. Highlighted comfort features: Dreamcloud comfort soles, Elastic heel straps, Wave-pattern grip.',
          'Integrated sustainability into the core brand story: Recycled tire soles, Eco-conscious materials. Positioned customization (strap styles & colors) as a playful differentiator. Designed a strategic flow leading to display options and a strong retail call-to-action.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'Clearly communicates product innovation.',
          'Visually separates features into digestible sections.',
          'Balances playful tone with professional retail appeal.',
          'Establishes a strong hero innovation (Feathersoft Toe Cord).',
          'Highlights handcrafted authenticity (Artist Susanna Crumwell, Maui).',
          'Reinforces sustainability as part of brand DNA.',
        ],
        closing: 'The deck now functions as: A sales presentation; A retail pitch deck; A brand identity document; A marketing reference guide.',
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Complete Brand Deck (Structured Presentation).',
          'Feature Breakdown Slides.',
          'Sustainability Story Section.',
          'Customization Overview.',
          'Display Options Slide.',
          'Retail Contact Slide.',
          'Refined Brand Messaging.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The final brand deck strengthened Pidgin Toes\' market positioning by clearly defining its unique value proposition and product differentiation. The structured storytelling improved clarity, making the innovation and sustainability aspects more impactful and easier to understand. By elevating the presentation and aligning it with professional retail standards, the brand now has a sales-ready asset that enhances credibility, supports order inquiries and confidently communicates its identity in a competitive kids footwear market.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'stock-sharks',
      title: 'Stock Sharks',
      description: 'A 14-day digital media campaign focused on building brand visibility and top-of-funnel awareness within the finance and investment space.',
      tags: ['Pitch Deck', 'Marketing'],
      image: '/home/projects/project-1.png',
    },
  },
  // ——— Stock Sharks ———
  {
    slug: 'stock-sharks',
    titleAccent: 'Stock Sharks',
    titleRest: 'Pitch Deck',
    tagline: TAGLINE,
    categories: 'Pitch Deck, Digital campaign',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'StockSharks partnered with us for a 14-day digital media campaign focused on building brand visibility and top-of-funnel awareness within the finance and investment space. The campaign leveraged short-form video content distributed across TikTok, Instagram, Facebook, X (Twitter), YouTube, and Threads to maximize reach and platform-specific engagement. The objective was to position StockSharks as a credible and high-impact financial media presence while expanding audience reach across multiple digital touchpoints.',
        tags: ['Pitch Deck', 'Digital campaign'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Building awareness in a highly competitive finance and investment market.',
          'Capturing the attention of a younger, financially curious audience.',
          'Establishing credibility across multiple platforms simultaneously.',
          'Generating traction for a relatively new YouTube channel.',
          'Maintaining a consistent and authoritative brand identity across platforms.',
        ],
        closing: 'Finance content competes with well-established creators and trusted voices. The challenge was to break through the noise while maintaining authority, clarity, and trust.',
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Increase brand visibility and top-of-funnel reach.',
          'Drive engagement through short-form video content.',
          'Expand presence across key social platforms.',
          'Build early traction for YouTube channel growth.',
          'Strengthen credibility within investor-driven communities.',
        ],
        closing: 'The campaign prioritized awareness and visibility first, while laying the foundation for long-term organic growth.',
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'Multi-Platform Activation: TikTok for high organic reach and younger demographic targeting; Meta (Instagram + Facebook) for broader audience penetration; X (Twitter) for investor-community credibility; YouTube for long-form authority building; Threads for ecosystem reinforcement.',
          'Content Strategy: Short-form, engaging finance-related video content; Platform-native formatting for better algorithm performance; Consistent visual branding for recognition. Data-Driven Monitoring: 14-day performance tracking; Platform-level analytics review; Audience demographic analysis. The strategy focused on balancing volume, visibility, and credibility.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'We executed a coordinated short-form video campaign optimized for each platform\'s algorithm and audience behavior.',
          'TikTok leveraged trend-responsive content to drive higher traction.',
          'Meta platforms targeted finance-interested demographics for broader awareness.',
          'X maintained brand positioning within investor circles.',
          'YouTube focused on long-term channel growth and authority.',
          'Threads supported ecosystem-level visibility.',
        ],
        closing: 'The campaign maintained consistent messaging while adapting creative formats to each platform environment.',
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'A comprehensive campaign performance presentation outlining strategy, execution, and measurable outcomes.',
          'Clear breakdown of objectives, platforms activated, content format, and reporting window.',
          'Detailed insights for TikTok, Meta (Instagram + Facebook), X, YouTube, and Threads including total views, engagement metrics, and traction highlights.',
          'Gender split, age distribution, and top geographic locations to understand audience behavior.',
          'Consolidated results with key growth drivers, traction analysis, and strategic takeaways for future scaling.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The 14-day performance deck provided a clear and structured view of how the campaign performed across platforms. It helped identify which channels gained the most traction, understand audience demographics, and highlight early growth patterns. Most importantly, it gave StockSharks practical insights to refine future content strategy, prioritize high-performing platforms, and make more informed decisions moving forward.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'aintanet',
      title: 'Aintanet',
      description: 'A next-generation blockchain protocol built to power the digital economy through privacy-complete architecture and dense-load scalability.',
      tags: ['Pitch Deck', 'Development'],
      image: '/home/projects/project-1.png',
    },
  },
  // ——— Aintanet ———
  {
    slug: 'aintanet',
    titleAccent: 'Aintanet',
    titleRest: 'Pitch Deck & Development',
    tagline: TAGLINE,
    categories: 'Pitch Deck, Development',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'Aintanet is a next-generation blockchain protocol built to power the digital economy through privacy-complete architecture and dense-load scalability. The project required a refined pitch deck that could clearly communicate complex technical innovation including zero-knowledge proofs, scalable consensus and unified flowspace to investors, partners and ecosystem stakeholders. The goal was to transform highly technical research and protocol development into a structured, compelling and investor-ready narrative.',
        tags: ['Pitch Deck', 'Development'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'The original content was highly technical and research-heavy.',
          'Messaging lacked structured storytelling flow.',
          'Privacy and scalability differentiation was not clearly simplified.',
          'Dense-load scaling concept needed clearer explanation.',
          'Complex architecture diagrams required narrative framing.',
          'The deck needed to balance technical credibility with investor clarity.',
        ],
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Create a structured, persuasive investor pitch deck.',
          'Simplify complex blockchain and ZK concepts.',
          'Clearly communicate differentiation (Privacy-Complete + Dense-Load Scale).',
          'Position Aintanet as infrastructure for real-world digital economy flows.',
          'Strengthen credibility through founder expertise and research backing.',
          'Present roadmap and milestones with clarity.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'Reframed the deck around a strong industry problem narrative. Highlighted failures of legacy systems and current blockchains (Fragmentation, Fake scalability, Broken composability). Created urgency before introducing Aintanet as the solution.',
          'Structured messaging around three core pillars: Privacy-Completeness, Dense-Load and Scalability Unified Flowspace. Translated technical features into benefit-driven themes: Regulatory compliance, Reduced attack surface, Seamless composability and Real-world usability. Organized complex sections into logical, easy-to-follow sequences. Framed 100,000+ TPS claims around real-world relevance, not benchmark hype. Strengthened roadmap and team slides to highlight execution capability and research depth.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'We delivered a strategically structured pitch deck that simplifies complex blockchain architecture into a clear and compelling narrative.',
          'The final presentation balances deep technical credibility with investor-friendly storytelling, highlighting Aintanet\'s unfair advantage in privacy-complete design and scalable consensus.',
          'The deck now confidently communicates both vision and execution readiness.',
        ],
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Fully restructured investor pitch deck.',
          'Refined problem-to-solution narrative.',
          'Simplified technical architecture sections.',
          'Clear scalability and privacy positioning.',
          'Roadmap visualization.',
          'Team and credibility enhancement.',
          'Strong closing vision statement.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The refined pitch deck strengthened Aintanet\'s positioning by clearly communicating its differentiation in privacy and scalability. Structured storytelling improved investor understanding of dense-load scaling and zero-knowledge architecture while maintaining technical credibility. The deck now presents Aintanet as a research-backed, execution-focused protocol, making it more compelling for fundraising and partnerships.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'green',
      title: 'Green',
      description: 'A next-generation Electric Vehicle (EV) infrastructure platform designed to simplify the charging experience for modern drivers.',
      tags: ['Web design', 'UI/UX design', 'Web development'],
      image: '/home/projects/project-1.png',
    },
  },
]

export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
  return PROJECTS_DETAIL.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS_DETAIL.map((p) => p.slug)
}
