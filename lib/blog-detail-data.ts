/**
 * Blog post detail data: used for /blog/[slug] pages and listing.
 */

export interface BlogDetailData {
  slug: string
  title: string
  description: string
  readTime: string
  image: string
  category: string
  date: string
  author?: string
  /** Body content: array of paragraphs or { type: 'heading', text } blocks */
  body: Array<{ type: 'paragraph'; text: string } | { type: 'heading'; text: string }>
}

export const BLOG_DETAIL_LIST: BlogDetailData[] = [
  {
    slug: 'beyond-automation-ai-integration-business-workflows',
    title: 'Beyond Automation: How Al Integration is Redefining Business Workflows',
    description: 'Discover how Al integration and Al workflow automation drive business Al trends for smarter growth.',
    readTime: '2 min read',
    image: '/home/blog/post-1.png',
    category: 'AI Trends',
    date: 'Feb 15, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'Business workflows have evolved dramatically with the rise of artificial intelligence. What started as simple task automation has become a full ecosystem of intelligent systems that learn, adapt, and optimize in real time.' },
      { type: 'heading', text: 'From Scripts to Intelligence' },
      { type: 'paragraph', text: 'Traditional automation relied on fixed rules and scripts. AI integration introduces systems that can interpret context, handle exceptions, and improve over time. This shift is redefining how teams collaborate and how decisions get made across departments.' },
      { type: 'paragraph', text: 'Companies that adopt AI-driven workflows report significant gains in efficiency, accuracy, and employee satisfaction. The key is choosing the right use cases and integrating AI in a way that augments—not replaces—human judgment.' },
      { type: 'heading', text: 'Practical Steps Forward' },
      { type: 'paragraph', text: 'Start by mapping high-volume, repetitive processes. Identify where context matters and where AI can reduce manual work. Pilot small, then scale. With the right foundation, AI integration becomes a sustainable competitive advantage.' },
    ],
  },
  {
    slug: 'future-of-custom-ai-enterprise',
    title: 'The Future of Custom Al: Why Off-the-Shelf Tools Aren\'t Enough for Enterprise',
    description: 'Discover why Custom Al Solutions beat off-the-shelf tools for Enterprise Al Integration.',
    readTime: '2 min read',
    image: '/home/blog/post-2.png',
    category: 'AI Trends',
    date: 'Feb 12, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'Off-the-shelf AI tools work well for generic tasks. But enterprises face unique data, compliance, and workflow requirements that demand tailored solutions.' },
      { type: 'heading', text: 'The Limits of One-Size-Fits-All' },
      { type: 'paragraph', text: 'Generic tools often require heavy customization, lack deep integration with legacy systems, and may not meet industry-specific regulations. Custom AI solutions are built around your data, your processes, and your security needs.' },
      { type: 'paragraph', text: 'Investing in custom AI doesn’t mean building everything from scratch. It means combining proven models and frameworks with your domain logic and infrastructure to create a solution that truly fits.' },
    ],
  },
  {
    slug: 'design-thinking-digital-transformation',
    title: 'Design Thinking in Digital Transformation',
    description: 'Explore how design thinking principles can transform your digital strategy and user experience.',
    readTime: '3 min read',
    image: '/home/blog/post-3.png',
    category: 'Design',
    date: 'Feb 10, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'Digital transformation is as much about people and processes as it is about technology. Design thinking puts users at the center and helps teams align on problems before jumping to solutions.' },
      { type: 'heading', text: 'Empathy Before Execution' },
      { type: 'paragraph', text: 'By starting with research and empathy, organizations avoid building the wrong thing. Workshops, journey mapping, and prototyping create shared understanding and reduce risk before development begins.' },
      { type: 'paragraph', text: 'When design thinking drives digital strategy, the result is solutions that users actually adopt—and that deliver measurable business outcomes.' },
    ],
  },
  {
    slug: 'ui-ux-best-practices-modern-web',
    title: 'UI/UX Best Practices for Modern Web Applications',
    description: 'Learn the essential UI/UX principles that create engaging and intuitive user experiences.',
    readTime: '4 min read',
    image: '/home/blog/post-4.png',
    category: 'Design',
    date: 'Feb 8, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'Great web applications feel effortless. Behind that simplicity are clear hierarchy, consistent patterns, and attention to performance and accessibility.' },
      { type: 'heading', text: 'Clarity and Consistency' },
      { type: 'paragraph', text: 'Users should never have to guess where to go or what to do. Use familiar patterns, clear labels, and a consistent visual language. Responsive design and fast load times are non-negotiable.' },
      { type: 'paragraph', text: 'Accessibility isn’t optional—it expands your audience and often improves the experience for everyone. Test with real users and iterate based on feedback.' },
    ],
  },
  {
    slug: 'building-strong-brand-identity-2025',
    title: 'Building a Strong Brand Identity in 2025',
    description: 'Learn the key strategies for creating a cohesive brand identity that resonates with modern audiences.',
    readTime: '4 min read',
    image: '/home/blog/post-5.png',
    category: 'Branding & Strategy',
    date: 'Feb 5, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'A strong brand identity goes beyond logos and colors. It’s the sum of every touchpoint—voice, visuals, and behavior—that shapes how people perceive and trust your organization.' },
      { type: 'heading', text: 'Strategy First' },
      { type: 'paragraph', text: 'Start with positioning and audience. What do you stand for? Who are you serving? From there, develop a visual and verbal system that’s flexible enough to scale across channels but consistent enough to be recognizable.' },
      { type: 'paragraph', text: 'In 2025, authenticity and clarity matter more than ever. Brands that communicate clearly and act consistently build lasting relationships.' },
    ],
  },
  {
    slug: 'strategic-brand-positioning-competitive-markets',
    title: 'Strategic Brand Positioning in Competitive Markets',
    description: 'Discover how to position your brand effectively in crowded marketplaces and stand out from competitors.',
    readTime: '5 min read',
    image: '/home/blog/post-6.png',
    category: 'Branding & Strategy',
    date: 'Feb 2, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'In crowded markets, differentiation is survival. Strategic positioning isn’t about being different for its own sake—it’s about owning a clear, credible place in the customer’s mind.' },
      { type: 'heading', text: 'Find Your Wedge' },
      { type: 'paragraph', text: 'Identify a segment or need that competitors under-serve. Align your messaging, product, and experience around that wedge. Consistency across channels reinforces the position over time.' },
      { type: 'paragraph', text: 'Regularly revisit your positioning as the market and your capabilities evolve. The goal is to stay relevant and distinct.' },
    ],
  },
  {
    slug: 'leading-remote-teams-best-practices-2025',
    title: 'Leading Remote Teams: Best Practices for 2025',
    description: 'Explore effective leadership strategies for managing and motivating remote teams in the modern workplace.',
    readTime: '3 min read',
    image: '/home/blog/post-7.png',
    category: 'Leadership',
    date: 'Jan 28, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'Remote work is here to stay. Effective remote leadership focuses on outcomes, communication, and trust rather than presence.' },
      { type: 'heading', text: 'Clarity and Connection' },
      { type: 'paragraph', text: 'Set clear goals and expectations. Use async updates and structured meetings so everyone stays aligned. Create space for informal connection to maintain team cohesion.' },
      { type: 'paragraph', text: 'Invest in the right tools and norms. When people know what’s expected and feel connected, remote teams can outperform colocated ones.' },
    ],
  },
  {
    slug: 'digital-marketing-strategies-drive-results',
    title: 'Digital Marketing Strategies That Drive Results',
    description: 'Learn proven digital marketing tactics that generate leads, increase engagement, and boost conversions.',
    readTime: '4 min read',
    image: '/home/blog/post-8.png',
    category: 'Marketing',
    date: 'Jan 25, 2025',
    author: 'Hatch Team',
    body: [
      { type: 'paragraph', text: 'Effective digital marketing blends data, creativity, and consistency. The brands that win are those that understand their audience and meet them where they are.' },
      { type: 'heading', text: 'Audience and Funnel' },
      { type: 'paragraph', text: 'Define your ideal customer and map their journey. Use content, paid channels, and email in a coordinated funnel. Measure what matters—leads, engagement, conversion—and double down on what works.' },
      { type: 'paragraph', text: 'Test messaging and creative regularly. Small, continuous improvements compound into significant results over time.' },
    ],
  },
]

export function getBlogBySlug(slug: string): BlogDetailData | undefined {
  return BLOG_DETAIL_LIST.find((post) => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return BLOG_DETAIL_LIST.map((post) => post.slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogDetailData[] {
  const current = getBlogBySlug(currentSlug)
  if (!current) return []
  return BLOG_DETAIL_LIST.filter((p) => p.slug !== currentSlug).slice(0, limit)
}

/** Unique categories for filter pills, in display order */
const CATEGORY_ORDER = ['AI Trends', 'Design', 'Branding & Strategy', 'Leadership', 'Marketing'] as const

export function getBlogCategories(): string[] {
  const seen = new Set<string>()
  const result: string[] = []
  for (const cat of CATEGORY_ORDER) {
    if (BLOG_DETAIL_LIST.some((p) => p.category === cat) && !seen.has(cat)) {
      seen.add(cat)
      result.push(cat)
    }
  }
  return result
}
