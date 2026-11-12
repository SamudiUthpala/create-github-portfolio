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
    label: 'IoT / Team project',
    badge: 'Top 7 · Project Showcase 2026',
    title: 'Smart Weather Reporting System (TerraPlus)',
    summary:
      'A smart system to observe, understand, and report weather using environmental sensors and the ESP32 microcontroller.',
    image: '/images/weather.jpeg',
    imageAlt:
      'Smart Weather Reporting System model with a sensor tower, LED indicators for water level, temperature and rain, a small house, and a windmill',
    video: '/images/weather-demo.mp4',
    contributionIntro:
      'As a team member, I contributed to understanding the system requirements, exploring the functions of different environmental sensors, and learning how the ESP32 microcontroller connects the hardware components. This project helped me connect theoretical IT knowledge with practical IoT applications.',
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
    tags: [
      'ESP32',
      'DHT11 / DHT22',
      'Rain Sensor',
      'BMP085',
      'Water Level Sensor',
      'LCD Display',
      'Firebase',
      'Blynk',
      'Arduino IDE',
      'Embedded C / C++',
      'Wi-Fi',
      'I²C',
    ],
  },
]

// Add a new object here for every certificate, award, or event.
export const achievements = [
  {
    title: 'Certificate of Excellence',
    issuer: 'SLIIT Matara Center',
    date: '2026',
    description:
      'Selected among the Top 7 Best Projects at the Fundamentals of Computing Project Showcase 2026 for the Smart Weather Reporting System (TerraPlus).',
    image: '/images/certificate-excellence.jpeg',
    imageAlt: 'Certificate of Excellence presented to Uthpala R.P.S. by SLIIT Matara Center',
  },
  {
    title: 'Arduino Showcase 2026',
    issuer: 'SLIIT UNI · Matara Center',
    date: '2026',
    description: 'Presented our IoT weather project and received certificates together with the team and academic staff.',
    image: '/images/showcase-team.jpeg',
    imageAlt: 'Project team holding certificates with lecturers at the SLIIT Arduino Showcase 2026',
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
