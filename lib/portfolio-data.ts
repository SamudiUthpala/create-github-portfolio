// Edit this file to update everything on your portfolio.

export const profile = {
  name: 'Samudi Uthpala',
  initials: 'SU',
  eyebrow: 'A curious mind. A meaningful journey.',
  taglineStart: 'Learning today.',
  taglineEnd: 'Building tomorrow.',
  roles: ['IT Undergraduate', 'Educational Field Research Enthusiast'],
  intro:
    "Curious by nature. Driven by purpose. I'm exploring how technology can solve meaningful problems and make learning more accessible.",
  photo: '/images/profile.jpg',
  university: 'SLIIT',
  email: '',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
}

export const about = {
  paragraphs: [
    "I'm a first-year BSc (Hons) in Information Technology undergraduate, beginning to find my place at the intersection of technology, people, and education.",
    "I'm interested in how thoughtful software can address everyday challenges, and how educational field research can help us understand the people we build for.",
    'I value curiosity, integrity, and steady progress. My ambition is to grow into a software engineer who listens carefully, thinks critically, and creates with purpose.',
  ],
  degree: 'BSc (Hons) in Information Technology',
  status: 'First-year undergraduate',
  note: 'Building a foundation. Exploring possibilities.',
}

export const skillGroups = [
  {
    icon: 'code',
    title: 'Development',
    items: ['Programming fundamentals', 'Web development', 'Version control'],
  },
  {
    icon: 'search',
    title: 'Research & discovery',
    items: ['Educational field research', 'Analytical thinking', 'Documentation'],
  },
  {
    icon: 'people',
    title: 'Beyond the technical',
    items: ['Communication', 'Collaboration', 'Creative problem-solving'],
  },
] as const

export const projects = [
  {
    label: 'Weather / Concept',
    title: 'Smart Weather Reporting System',
    summary:
      'A team project exploring how weather information can be collected from sensors and presented in a clear, useful way.',
    contributionIntro:
      'As a team member, I contributed to understanding the system requirements, exploring the functions of different environmental sensors, and learning how the ESP32 microcontroller connects the hardware components.',
    contributions: [
      {
        title: 'Sensor understanding',
        text: 'Explored the purposes and functions of environmental sensors, including temperature, humidity, rain, and water-level sensors.',
      },
      {
        title: 'System design',
        text: 'Participated in understanding the overall system architecture and how its components work together.',
      },
    ],
    tags: ['ESP32', 'IoT', 'Sensors', 'Teamwork'],
  },
]

export const reflections = [
  {
    category: 'The learning journey',
    title: 'Small steps. New perspectives.',
    text: 'Add a reflection on your first semester, a new concept, or a moment that changed the way you learn.',
  },
  {
    category: 'Problem-solving',
    title: 'Finding a way forward.',
    text: 'Describe a challenge, how you approached it, and what you would do differently next time.',
  },
  {
    category: 'Personal growth',
    title: 'Learning beyond the classroom.',
    text: 'Share a lesson from teamwork, independent research, or an experience outside your lectures.',
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#reflections', label: 'Reflections' },
  { href: '#achievements', label: 'Achievements' },
]
