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

// ——— Sample data ———

const DEFAULT_TESTIMONIALS: ProjectDetailTestimonial[] = [
  { quote: 'Hatch delivered a smooth, professional experience with clear communication and excellent results. Highly recommended.', author: 'Gasior Law Office, LLC', location: 'Illinois, United States', rating: 5 },
  { quote: 'They understood our brand & translated it into a clean, modern digital presence. The process was smooth & well managed.', author: 'NorthPeak Realty Group', location: 'Texas, United States', rating: 5 },
  { quote: 'Hatch unified our website, application and messaging into one cohesive digital experience.', author: 'GrowthLoop Digital', location: 'Australia', rating: 5 },
]

export const PROJECTS_DETAIL: ProjectDetailData[] = [
  {
    slug: 'sexner-web-redesign',
    titleAccent: 'Sexner',
    titleRest: 'Web Redesign & Development',
    tagline: 'We help startups launch, grow, and scale through clean, conversion-focused design.',
    categories: 'Branding, Web Development, UI/UX Design',
    iconSrc: '/home/hero/after-solutions.png',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'We partnered with Mitchell S. Sexner & Associates LLC to redesign their website. The goal was to modernize the visual identity, improve user experience, and create a conversion-focused layout that reflects the firm\'s authority and builds trust with potential clients.',
        tags: ['Web design', 'UI/UX design', 'Web development', 'Responsive Layout'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Outdated visual identity that did not align with modern trends.',
          'Heavy text blocks that made key information hard to find.',
          'Weak content hierarchy.',
          'No clear conversion path.',
          'Limited emotional connection with the brand.',
        ],
        closing: 'These issues were affecting user trust and engagement.',
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Modernize the visual design.',
          'Improve user experience and information architecture.',
          'Strengthen trust and credibility signals.',
          'Simplify navigation and make content more scannable.',
          'Make content more conversion-focused.',
        ],
      },
      {
        id: 'strategy',
        type: 'strategy',
        title: 'Strategy & Approach',
        paragraphs: [
          'We rebuilt the experience from the ground up, focusing on a mobile-first mindset. Dense content was restructured into clear sections with prominent calls-to-action. Complex information was simplified so users could quickly find what they need and take the next step.',
        ],
        mediaSrc: '/home/projects/project-1.png',
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        intro: 'Our approach solved the client\'s key problems:',
        items: [
          'Established a clear, authoritative first impression.',
          'Simplified complex legal content for readability and engagement.',
          'Improved site structure for easier navigation.',
          'Enhanced trust signals to strengthen credibility.',
          'Designed with conversion in mind to drive immediate client action.',
          'Mobile-first design to accommodate urgent, on-the-go users.',
        ],
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        intro: 'We provided tangible assets and outputs, including:',
        items: [
          'Modern, professional redesign aligned with the firm\'s authority.',
          'Clean typography and improved spacing.',
          'Structured pages and stronger messaging.',
          'Simplified content and improved trust-building sections.',
          'Optimized CTAs across all key pages.',
          'Fully responsive, conversion-focused layout.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The redesign boosted user engagement and created a clearer information flow. The updated design reinforced the firm\'s authority and credibility. Optimized CTAs and forms improved lead capture, and mobile performance saw significant gains.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'bookworm',
      title: 'Bookworm',
      description: 'Bookworm is a dynamic platform designed for book enthusiasts, offering the ability to borrow, rent, or buy books. It is a generative AI-based book recommendation system offering personalized book suggestions, ensuring users find the most relevant titles.',
      tags: ['Ecommerce', 'Design', 'Development'],
      image: '/home/projects/project-1.png',
    },
  },
  {
    slug: 'bookworm',
    titleAccent: 'Bookworm',
    titleRest: 'Ecommerce & AI Recommendations',
    tagline: 'A dynamic platform for book enthusiasts with AI-powered recommendations.',
    categories: 'Ecommerce, App Design, Development',
    heroMediaSrc: '/home/projects/project-1.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'Bookworm required a full e-commerce experience with a custom AI recommendation engine. We designed and built the platform to support borrow, rent, and buy flows while surfacing personalized book suggestions.',
        tags: ['Ecommerce', 'UI/UX design', 'Web development', 'AI'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Outdated UI and UX that did not align with modern trends.',
          'Hard to find the information quickly.',
          'Weak brand identity.',
        ],
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Create a modern, user-friendly UI/UX.',
          'Optimize for speed and performance.',
          'Integrate AI-based recommendations seamlessly.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        intro: 'Our approach:',
        items: [
          'Responsive web design for all devices.',
          'Custom CMS development for easy content management.',
          'AI-driven recommendation system with clear UX.',
        ],
        mediaSrcs: ['/home/projects/project-1.png', '/home/projects/project-2.png'],
      },
      {
        id: 'deliverables',
        type: 'deliverables',
        title: 'Final Deliverables',
        items: [
          'Modern, animated website with a clean UI/UX.',
          'Custom iconography and design system.',
          'Fully responsive, conversion-focused layout.',
        ],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'The platform launched on time with strong engagement metrics and positive user feedback on the recommendation experience.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'sexner-web-redesign',
      title: 'Sexner Web Redesign',
      description: 'We help startups launch, grow, and scale through clean, conversion-focused design.',
      tags: ['Web design', 'UI/UX', 'Branding'],
      image: '/home/projects/project-2.png',
    },
  },
  {
    slug: 'healthsync',
    titleAccent: 'HealthSync',
    titleRest: 'Telemedicine Platform',
    tagline: 'Revolutionizing patient care with a comprehensive telemedicine platform and AI-driven diagnostic assistance.',
    categories: 'Healthcare, Mobile App, AI',
    heroMediaSrc: '/home/projects/project-2.png',
    sections: [
      {
        id: 'overview',
        type: 'overview',
        title: 'Case Study Overview',
        intro: 'HealthSync required a secure, scalable telemedicine platform connecting patients with specialists worldwide, with real-time health monitoring and AI-driven diagnostic assistance.',
        tags: ['Healthcare', 'Mobile App', 'AI', 'Telemedicine'],
      },
      {
        id: 'challenges',
        type: 'challenges',
        title: 'The Challenges',
        items: [
          'Complex compliance and security requirements.',
          'Real-time data sharing across devices and providers.',
          'Integrating AI diagnostics in a trusted, clear way.',
        ],
      },
      {
        id: 'objectives',
        type: 'objectives',
        title: 'The Objectives',
        items: [
          'Build a secure, HIPAA-aware telemedicine experience.',
          'Enable real-time monitoring and seamless video consultations.',
          'Surface AI-driven insights without overwhelming users.',
        ],
      },
      {
        id: 'solution',
        type: 'solution',
        title: 'Solution',
        items: [
          'Secure, compliant infrastructure and data handling.',
          'Real-time health monitoring and video consultations.',
          'AI-driven diagnostic assistance with clear UX.',
        ],
        mediaSrcs: ['/home/projects/project-2.png', '/home/projects/project-3.png'],
      },
      {
        id: 'results',
        type: 'results',
        title: 'Results',
        paragraphs: [
          'HealthSync launched with strong adoption among providers and patients, and positive feedback on both reliability and the AI-assisted workflows.',
        ],
      },
    ],
    testimonials: DEFAULT_TESTIMONIALS,
    nextProject: {
      slug: 'bookworm',
      title: 'Bookworm',
      description: 'A dynamic platform for book enthusiasts with AI-powered recommendations.',
      tags: ['Ecommerce', 'Design', 'Development'],
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
