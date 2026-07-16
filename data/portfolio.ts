export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  problem: string;
  solution: string;
  tools: string[];
  role: string;
  year: string;
  images: string[];
};

export type PortfolioSubcategory = {
  title: string;
  items: PortfolioProject[];
};

export type PortfolioCategory = {
  title: string;
  subcategories: PortfolioSubcategory[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    title: 'Graphic Design',
    subcategories: [
      {
        title: 'Logos',
        items: [
          {
            id: 'logo-suite',
            title: 'Logo Suite',
            description: 'Flexible logo system for brand touchpoints.',
            category: 'Graphic Design',
            subcategory: 'Logos',
            problem: 'The brand needed a memorable and flexible mark set.',
            solution: 'Created a suite with primary, secondary, and icon variants.',
            tools: ['Illustrator', 'Figma'],
            role: 'Brand designer',
            year: '2024',
            images: [
              'https://picsum.photos/seed/logo1/800/600',
              'https://picsum.photos/seed/logo2/800/600',
              'https://picsum.photos/seed/logo3/800/600',
            ],
          },
        ],
      },
      {
        title: 'Branding',
        items: [
          {
            id: 'brand-identity',
            title: 'Brand Identity',
            description: 'Premium visual system for a creative studio.',
            category: 'Graphic Design',
            subcategory: 'Branding',
            problem: 'The brand lacked a consistent visual language across platforms.',
            solution: 'Delivered typography, color, and application examples.',
            tools: ['Illustrator', 'Photoshop', 'Figma'],
            role: 'Visual designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/branding1/800/600',
              'https://picsum.photos/seed/branding2/800/600',
              'https://picsum.photos/seed/branding3/800/600',
            ],
          },
        ],
      },
      {
        title: 'Social Media',
        items: [
          {
            id: 'social-campaign',
            title: 'Social Campaign',
            description: 'Campaign visuals and motion-ready assets for digital channels.',
            category: 'Graphic Design',
            subcategory: 'Social Media',
            problem: 'Posts lacked a unified system for the campaign.',
            solution: 'Built a toolkit of formats and visual rules for consistency.',
            tools: ['Illustrator', 'Premiere Pro'],
            role: 'Graphic designer',
            year: '2024',
            images: [
              'https://picsum.photos/seed/social1/800/600',
              'https://picsum.photos/seed/social2/800/600',
              'https://picsum.photos/seed/social3/800/600',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'UI/UX Design',
    subcategories: [
      {
        title: 'UI Screens',
        items: [
          {
            id: 'ui-screens',
            title: 'UI Screens',
            description: 'Interface design for a polished digital experience.',
            category: 'UI/UX Design',
            subcategory: 'UI Screens',
            problem: 'The product UI needed a modern, trust-building structure.',
            solution: 'Designed a clean screen system with clear hierarchy.',
            tools: ['Figma', 'HTML', 'CSS'],
            role: 'UI/UX designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/uiux1/800/600',
              'https://picsum.photos/seed/uiux2/800/600',
              'https://picsum.photos/seed/uiux3/800/600',
            ],
          },
        ],
      },
      {
        title: 'Landing Pages',
        items: [
          {
            id: 'landing-page',
            title: 'Landing Page',
            description: 'Conversion-focused landing page with strong storytelling.',
            category: 'UI/UX Design',
            subcategory: 'Landing Pages',
            problem: 'The page needed a clearer path to action and trust.',
            solution: 'Structured content into concise sections with visual rhythm.',
            tools: ['Figma', 'HTML', 'CSS'],
            role: 'UI/UX designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/landing1/800/600',
              'https://picsum.photos/seed/landing2/800/600',
              'https://picsum.photos/seed/landing3/800/600',
            ],
          },
        ],
      },
      {
        title: 'Prototypes',
        items: [
          {
            id: 'prototype-flow',
            title: 'Prototype Flow',
            description: 'Interactive prototype to validate experience and motion.',
            category: 'UI/UX Design',
            subcategory: 'Prototypes',
            problem: 'Stakeholders needed a clickable representation of the flow.',
            solution: 'Built a prototype with intentional transitions and spacing.',
            tools: ['Figma', 'Adobe XD'],
            role: 'Product designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/proto1/800/600',
              'https://picsum.photos/seed/proto2/800/600',
              'https://picsum.photos/seed/proto3/800/600',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Video Editing',
    subcategories: [
      {
        title: 'Reels',
        items: [
          {
            id: 'motion-reel',
            title: 'Motion Reel',
            description: 'Short video edit with dynamic pacing and brand polish.',
            category: 'Video Editing',
            subcategory: 'Reels',
            problem: 'The campaign needed motion assets that felt premium.',
            solution: 'Delivered a reel with strong visual flow and timing.',
            tools: ['After Effects', 'Premiere Pro'],
            role: 'Video editor',
            year: '2024',
            images: [
              'https://picsum.photos/seed/reel1/800/600',
              'https://picsum.photos/seed/reel2/800/600',
              'https://picsum.photos/seed/reel3/800/600',
            ],
          },
        ],
      },
      {
        title: 'Promo Cuts',
        items: [
          {
            id: 'promo-cut',
            title: 'Promo Cut',
            description: 'A polished content edit designed for social launch.',
            category: 'Video Editing',
            subcategory: 'Promo Cuts',
            problem: 'The campaign lacked a concise, brand-led promo video.',
            solution: 'Cut a short asset with refined motion and messaging.',
            tools: ['Premiere Pro', 'After Effects'],
            role: 'Video editor',
            year: '2024',
            images: [
              'https://picsum.photos/seed/promo1/800/600',
              'https://picsum.photos/seed/promo2/800/600',
              'https://picsum.photos/seed/promo3/800/600',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'AI & Automation',
    subcategories: [
      {
        title: 'Workflow',
        items: [
          {
            id: 'ai-workflow',
            title: 'AI Workflow',
            description: 'Concept workflow for smarter creative handoff.',
            category: 'AI & Automation',
            subcategory: 'Workflow',
            problem: 'Manual review and delivery steps were slowing down the process.',
            solution: 'Outlined an AI-assisted workflow with clear handoff points.',
            tools: ['ChatGPT', 'Python'],
            role: 'Automation designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/ai1/800/600',
              'https://picsum.photos/seed/ai2/800/600',
              'https://picsum.photos/seed/ai3/800/600',
            ],
          },
        ],
      },
      {
        title: 'Prompts',
        items: [
          {
            id: 'prompt-template',
            title: 'Prompt Template',
            description: 'Structured prompt system for creative idea generation.',
            category: 'AI & Automation',
            subcategory: 'Prompts',
            problem: 'The team needed consistent outputs from AI tools.',
            solution: 'Built reusable prompt templates and guidance rules.',
            tools: ['ChatGPT', 'Midjourney'],
            role: 'AI designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/prompt1/800/600',
              'https://picsum.photos/seed/prompt2/800/600',
              'https://picsum.photos/seed/prompt3/800/600',
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Web Basics',
    subcategories: [
      {
        title: 'Web Pages',
        items: [
          {
            id: 'product-page',
            title: 'Web Interface',
            description: 'Modern page design for SaaS and product stories.',
            category: 'Web Basics',
            subcategory: 'Web Pages',
            problem: 'The product page required better visual organization.',
            solution: 'Created a clean interface with clear section hierarchy.',
            tools: ['Figma', 'CSS'],
            role: 'UI designer',
            year: '2025',
            images: [
              'https://picsum.photos/seed/interface1/800/600',
              'https://picsum.photos/seed/interface2/800/600',
              'https://picsum.photos/seed/interface3/800/600',
            ],
          },
        ],
      },
    ],
  },
];
