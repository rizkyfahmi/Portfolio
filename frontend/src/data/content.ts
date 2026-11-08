import type { PortfolioData } from '@/types'

export const fallbackPortfolio: PortfolioData = {
  profile: {
    name: 'Rizky Fahmi',
    initials: 'RF',
    role_label: 'Full-Stack Developer',
    headline: 'Building functional, responsive, and well-structured web applications.',
    intro:
      'I am a Full-Stack Developer passionate about web engineering and modern technologies. I love turning ideas into real-world projects, crafting clean interfaces, and building resilient systems through continuous learning and exploration.',
    about:
      'I am a Full-Stack Developer whose fascination with technology began at the age of 7. It all started with my love for video games, which naturally evolved into a deep passion for programming and modern web development.\n\nCurrently, I am a second-year vocational student at SMKN 1 Kepanjen, undergoing an internship at EXP.INC. I continuously hone my skills in both frontend and backend development while leveraging cutting-edge AI tools to streamline the software development lifecycle.\n\nFor me, the most exciting aspect of programming is bringing ideas to life as tangible, production-ready products. I thrive on tackling technical challenges, learning new technologies, and persistently growing to achieve my goal of becoming a Senior Software Engineer.',
    email: 'rzkyfhm@gmail.com',
    location: 'Kepanjen, Malang, Indonesia',
    availability: 'Available for web projects & technical collaboration',
    avatar_url: '/images/about-photo.jpg?v=1',
    resume_url: '#contact',
    years_experience: 1,
    projects_shipped: 10,
    response_hours: 24,
    social_links: [
      { id: 1, label: 'GitHub', handle: '@rizkyfahmi', url: 'https://github.com/rizkyfahmi', icon: 'github' },
      { id: 2, label: 'Instagram', handle: '@rzkyfahm', url: 'https://instagram.com/rzkyfahm', icon: 'instagram' },
      { id: 3, label: 'Email', handle: 'rzkyfhm@gmail.com', url: 'mailto:rzkyfhm@gmail.com', icon: 'email' },
      { id: 4, label: 'WhatsApp', handle: '082338479390', url: 'https://wa.me/6282338479390', icon: 'phone' },
    ],
  },
  skills: [
    { id: 1, name: 'HTML5', category: 'frontend', level: 'advanced', sort_order: 1 },
    { id: 2, name: 'CSS3', category: 'frontend', level: 'advanced', sort_order: 2 },
    { id: 3, name: 'JavaScript (ES6+)', category: 'frontend', level: 'advanced', sort_order: 3 },
    { id: 4, name: 'React', category: 'frontend', level: 'advanced', sort_order: 4 },
    { id: 5, name: 'Tailwind CSS', category: 'frontend', level: 'advanced', sort_order: 5 },
    { id: 6, name: 'TypeScript', category: 'frontend', level: 'proficient', sort_order: 6 },
    { id: 7, name: 'Node.js', category: 'backend', level: 'proficient', sort_order: 7 },
    { id: 8, name: 'RESTful API', category: 'backend', level: 'advanced', sort_order: 8 },
    { id: 9, name: 'MySQL / PostgreSQL', category: 'database', level: 'proficient', sort_order: 9 },
    { id: 10, name: 'Git', category: 'tools', level: 'advanced', sort_order: 10 },
    { id: 11, name: 'GitHub', category: 'tools', level: 'advanced', sort_order: 11 },
    { id: 12, name: 'Vite & Build Tools', category: 'tools', level: 'advanced', sort_order: 12 },
  ],
  experiences: [
    {
      id: 1,
      position: 'Full-Stack Developer Intern',
      company: 'EXP.INC · Kepanjen',
      company_url: 'https://example.com',
      location: 'Kepanjen · On-site',
      employment_type: 'Internship / PKL',
      start_date: '2026-09',
      end_date: null,
      is_current: true,
      description:
        'Participating in an internship program focused on full-stack web engineering. Learning professional software development workflows, from architectural planning to robust production implementation.',
      achievements: [
        'End-to-end web application development workflows.',
        'Full-stack frontend and backend engineering.',
        'AI-assisted software development using Claude and Antigravity.',
        'Independent task ownership and collaborative team delivery.',
      ],
      tech: ['React.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Claude', 'Antigravity'],
      sort_order: 1,
    },
    {
      id: 2,
      position: 'Independent Learning',
      company: 'Self-Directed Learning & Exploration',
      company_url: null,
      location: 'Remote',
      employment_type: 'Self-Study',
      start_date: '2024-01',
      end_date: null,
      is_current: true,
      description:
        'Continuously exploring emerging technologies through independent study, architectural deep-dives, hands-on experimentation, and AI-assisted workflows.',
      achievements: [
        'Full-Stack Web Engineering & Technical Problem Solving.',
        'Modern AI-Assisted Coding (Lovable, Claude, Gemini, Antigravity).',
      ],
      tech: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Laravel', 'Vue.js'],
      sort_order: 2,
    },
  ],
  projects: [
    {
      id: 1,
      title: 'DevAcademy',
      slug: 'dev-academy',
      category: 'web',
      summary:
        'Interactive W3Schools-style coding education platform with Live Code Playground, automated quiz assessment, and integrated AI Tutor.',
      description:
        'Modern programming learning platform featuring a live interactive code playground inside a secured sandboxed iframe. Offers structured curricula spanning tutorials, practical exercises, automated quiz evaluations, and an OpenAI-powered (gpt-4o-mini) AI Tutor for instant code explanations and debugging assistance.',
      thumbnail_url:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      year: 2026,
      role: 'Full-Stack Developer',
      featured: true,
      tech: ['Next.js 15', 'NestJS v11', 'TypeScript', 'PostgreSQL', 'Prisma v6', 'Tailwind CSS v4', 'OpenAI API'],
      highlights: [
        'Live Code Playground with sandboxed iframe preview (isolated scripts)',
        'Integrated AI Tutor assistant for code explanation, debugging & problem solving',
        'Interactive quiz system with automated evaluation and learning progress tracking',
      ],
      github_url: 'https://github.com/rizkyfahmi/DevAcademy',
      live_url: 'https://github.com/rizkyfahmi/DevAcademy',
      sort_order: 1,
    },
    {
      id: 2,
      title: 'Gemini AI Chatbot',
      slug: 'gemini-chatbot',
      category: 'tooling',
      summary:
        'Intelligent conversational AI assistant powered by the Google GenAI SDK with secure NestJS backend architecture and dynamic multilingual adaptation.',
      description:
        'Smart conversational assistant integrating the latest Google GenAI SDK (gemini-3.5-flash-lite) through a NestJS backend security proxy to safeguard API keys. Features dynamic language adaptation based on user input, rapid streaming response times, and an intuitive reactive interface.',
      thumbnail_url:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
      year: 2026,
      role: 'Full-Stack Developer',
      featured: true,
      tech: ['React 19', 'NestJS v11', 'TypeScript', 'Google Gemini API', 'Tailwind CSS', 'Vite'],
      highlights: [
        'Official Google GenAI SDK integration with adaptive multilingual prompt engineering',
        'Server-side security guard isolating sensitive API credentials from frontend clients',
        'Reactive chat state management and ultra-lightweight, snappy conversation UI',
      ],
      github_url: 'https://github.com/rizkyfahmi/gemini-chatbot',
      live_url: 'https://github.com/rizkyfahmi/gemini-chatbot',
      sort_order: 2,
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      slug: 'e-commerce',
      category: 'web',
      summary:
        'Enterprise-grade multi-vendor marketplace platform featuring 3 independent role portals: Admin Dashboard, Seller Center, and Customer Storefront.',
      description:
        'Comprehensive modular e-commerce ecosystem designed with multi-role access control (Admin, Seller, Customer). Equipped with unified product catalogs, dynamic cart & checkout, real-time order lifecycle tracking, customer review management, seller sales performance analytics, and support ticketing.',
      thumbnail_url:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      year: 2026,
      role: 'Full-Stack Developer',
      featured: true,
      tech: ['React', 'NestJS', 'TypeScript', 'MySQL', 'Prisma ORM', 'Tailwind CSS', 'shadcn/ui'],
      highlights: [
        '3-tier Role-Based Access Control (RBAC): Admin, Seller, & Customer',
        'Complete order lifecycle management from checkout to fulfillment and issue ticketing',
        'Scalable backend architecture with Prisma ORM and robust relational database integrity',
      ],
      github_url: 'https://github.com/rizkyfahmi/E-Commerce',
      live_url: 'https://github.com/rizkyfahmi/E-Commerce',
      sort_order: 3,
    },
    {
      id: 4,
      title: 'Playtest ID',
      slug: 'playtest-id',
      category: 'web',
      summary:
        'Comprehensive Android app 14-day consecutive testing management platform connecting developers and testers with gamified reputation and dual rewards.',
      description:
        'Web-based Android testing ecosystem built to help indie developers meet Google Play Console 14-day 20-tester closed-testing mandates. Features 14 immutable daily missions, personal progress monitoring, centralized visual bug reporting, tester reputation gamification (EXP, Level, Title), and redeemable dual-reward Point ledger with secure withdrawal capability.',
      thumbnail_url:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      year: 2026,
      role: 'Full-Stack Developer',
      featured: true,
      tech: ['React.js', 'Laravel API', 'MySQL', 'Tailwind CSS', 'Gamification System', 'REST API'],
      highlights: [
        '14-day consecutive testing system with daily task verification & 20-tester buffer',
        'Centralized bug tracking with visual attachment uploads and resolution status',
        'Gamified reputation tiers (EXP & Level) and dual-reward ledger with withdraw workflow',
      ],
      github_url: 'https://github.com/rizkyfahmi',
      live_url: 'https://github.com/rizkyfahmi',
      sort_order: 4,
    },
  ],
  educations: [
    {
      id: 1,
      institution: 'SMKN 1 Kepanjen',
      degree: 'Vocational High School Student (Grade 11)',
      field: 'Software Engineering / IT',
      start_year: 2023,
      end_year: 2026,
      description: '11th-grade vocational student passionate about computer science, full-stack software development, and modern web architectures.',
      achievements: [
        'Active Full-Stack Developer Intern at EXP.INC.',
        'Mastering web engineering workflows & AI-assisted development.',
      ],
      sort_order: 1,
    },
  ],
  certifications: [
    {
      id: 1,
      title: 'Fundamentals of Web Programming & JavaScript',
      issuer: 'Dicoding Indonesia',
      issued_at: '2023',
      credential_url: 'https://example.com',
      sort_order: 1,
    },
    {
      id: 2,
      title: 'Frontend Web Development with React',
      issuer: 'Online Course Platform',
      issued_at: '2023',
      credential_url: 'https://example.com',
      sort_order: 2,
    },
  ],
}
