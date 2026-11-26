export const contact = {
  email: 'vannaranjo123@gmail.com',
  phoneDisplay: '289-941-3872',
  phoneHref: 'tel:+12899413872',
  linkedin: 'https://www.linkedin.com/in/vannaranjo',
};

export const intro = {
  eyebrow: 'Software Developer Co-op · LBMX',
  lead:
    "I build customer-facing and internal web applications for LBMX's analytics products with Angular, React, C#, ASP.NET Core and SQL Server. I'm finishing Computer Programming and Analysis at Fanshawe College (graduating December 2026) and looking for a full-time developer role.",
};

export interface Highlight {
  value: string;
  label: string;
}

export const highlights: Highlight[] = [
  { value: '~2 yrs', label: 'Building full-stack apps at LBMX' },
  { value: 'VB6 → Web', label: 'Legacy desktop reports migrated to React and C#' },
  { value: '4.1 / 4.2', label: "GPA · Dean's Honour Roll all 5 semesters" },
  { value: '3 yrs', label: 'Leading teams at Amazon Logistics' },
];

export interface SkillGroup {
  title: string;
  tone: 'navy' | 'slate' | 'charcoal';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    tone: 'navy',
    items: ['C#', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Java', 'Kotlin', 'C++', 'SQL', 'Python'],
  },
  {
    title: 'Frameworks & databases',
    tone: 'slate',
    items: ['Angular', 'React', 'ASP.NET Core', 'Spring Boot', 'MVC', 'Bootstrap', 'Android SDK', 'SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & platforms',
    tone: 'charcoal',
    items: ['Git / GitHub', 'Azure DevOps', 'Android Studio', 'SSMS', 'Jira', 'Sourcetree', 'Playwright', 'Claude Code', 'Tableau', 'Jupyter Notebook'],
  },
];

export const workStyle = [
  { title: 'Agile delivery', text: 'Scrum team member: UI testing, bug fixes, and cases and time tracked in Jira.' },
  { title: 'Code review & deployment', text: 'Git repos and pull requests in Azure DevOps, with builds deployed to test and QA.' },
  { title: 'Testing & documentation', text: 'Playwright end-to-end tests, data modeling and clear technical docs.' },
];

export interface Job {
  title: string;
  company: string;
  dates: string;
  location: string;
  logo: string;
  logoAlt: string;
  tone: 'navy' | 'charcoal';
  stack?: string[];
  stats?: Highlight[];
  bullets: string[];
}

export const jobs: Job[] = [
  {
    title: 'Software Developer (Co-op)',
    company: 'LBMX',
    dates: 'Jan 2025 – Present',
    location: 'London, ON',
    logo: 'images/LBMX-logo.png',
    logoAlt: 'LBMX logo',
    tone: 'navy',
    stack: ['Angular', 'TypeScript', 'React', 'C#', 'ASP.NET Core', 'SQL Server', 'Azure DevOps', 'Playwright'],
    bullets: [
      "Build and maintain customer-facing and internal web applications for LBMX's analytics products using Angular (TypeScript), React, C#, ASP.NET Core and SQL Server.",
      'Migrated legacy VB6 desktop reports to a web-based React and C# platform using AI-assisted development, helping retire the legacy system and improve query performance.',
      'Created Playwright end-to-end tests with QA to validate the migrated reports, comparing data, columns, rows and filters against the originals.',
      'Perform UI testing and resolve bugs on an Agile/Scrum team, tracking cases and time in Jira.',
      'Manage code in Azure DevOps Git repositories, submit pull requests for review, and deploy builds to test and QA environments.',
      'Support data modeling and write technical documentation.',
    ],
  },
  {
    title: 'Process Assistant (OTR)',
    company: 'Amazon Logistics',
    dates: 'Aug 2021 – Oct 2024',
    location: 'London, ON',
    logo: 'images/amazon-logo.webp',
    logoAlt: 'Amazon Logistics logo',
    tone: 'charcoal',
    stats: [
      { value: '+30%', label: 'KPI reporting accuracy' },
      { value: '−40%', label: 'Delivery-not-received errors' },
      { value: '+20%', label: 'Team productivity' },
      { value: '5–10', label: 'Associates supervised' },
    ],
    bullets: [
      'Managed daily operations and supported dispatchers; trained five associates monthly in standards, best practices and incident management.',
      'Created Excel reporting tools that streamlined data analysis and tracking.',
      'Coordinated safety-protocol adherence and incident resolution.',
      'Primary contact for incident analysis and resolution, improving safety benchmarks by 10% through process improvements and team training.',
    ],
  },
];

export interface School {
  name: string;
  program: string;
  dates: string;
  logo: string;
  logoAlt: string;
  bullets: string[];
}

export const education: School[] = [
  {
    name: 'Fanshawe College',
    program: 'Computer Programming and Analysis Co-op',
    dates: 'Jan 2024 – Dec 2026',
    logo: 'images/FanshaweLogo.png',
    logoAlt: 'Fanshawe College logo',
    bullets: [
      "GPA 4.1 / 4.2 · Dean's Honour Roll for all five completed semesters",
      'Developed full-stack web applications with Vue, Angular, React and C# (ASP.NET Core and MVC), connecting front ends to back-end APIs and SQL Server databases.',
      'Built a strong computer science foundation: object-oriented programming in C++ and Java, data structures and algorithms, and relational database design with SQL.',
      'Collaborated in Agile teams, planning sprints, tracking tasks and managing code with Git.',
    ],
  },
  {
    name: 'Correlation One',
    program: 'Data Analytics Certification',
    dates: 'Jan 2023 – Jun 2023',
    logo: 'images/Correlation_One_Logo.jpg',
    logoAlt: 'Correlation One logo',
    bullets: [
      '16-week program built around real business cases.',
      'Built a data pipeline with pivot tables, graphs and dashboards in Excel and Tableau.',
      'Evaluated 2019–2020 Specialty Foods marketing campaigns and analyzed Open University grades to reduce dropout rates.',
    ],
  },
];

export const interests = [
  {
    title: 'Building PCs',
    text: 'Five systems built since 2016. Current setup: Ryzen 7 7800X3D, RTX 4080 Super and 32 GB of 6000 MHz RAM.',
  },
  {
    title: 'Video games',
    text: 'Palworld and Terraria on PC; Kingdom Hearts and Pokémon on PS5 and Nintendo Switch.',
  },
];

export type ProjectTag = 'personal' | 'school';

export interface MediaItem {
  src: string;
  alt: string;
  kind?: 'image' | 'video';
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  tagLine: string;
  tags: ProjectTag[];
  image: string;
  imageAlt: string;
  /** Extra screenshots/videos shown in the full-screen viewer. Defaults to just `image`. */
  gallery?: MediaItem[];
  summary: string;
  bullets: string[];
  link?: string;
  inDevelopment?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'pc-build-helper',
    title: 'PC Build Helper',
    tagLine: 'C# · MVC · JAVASCRIPT',
    tags: ['personal'],
    image: 'images/PC Helper.png',
    imageAlt: 'PC Build Helper app',
    summary: 'Full-stack app that checks part compatibility in real time while you build a PC.',
    bullets: [
      'Full-stack MVC app with DAO, C#, JavaScript, HTML and CSS.',
      'Real-time compatibility checks so selected parts work together.',
      'Built to scale: new part categories and components drop in easily.',
    ],
    featured: true,
  },
  {
    id: 'loan-calculator',
    title: 'Loan Calculator',
    tagLine: 'JAVA · JAVAFX',
    tags: ['school'],
    image: 'images/Loan Calculator.png',
    imageAlt: 'Loan calculator app',
    summary: 'Student loan calculator with a clear GUI and robust input validation.',
    bullets: [
      'Responsive GUI that lays out key loan figures clearly.',
      'Object-oriented, modular design supporting multiple student entries.',
      'Robust input validation for reliable calculations.',
    ],
    featured: true,
  },
  {
    id: 'statistic-calculator',
    title: 'Statistic Calculator',
    tagLine: 'C++',
    tags: ['school'],
    image: 'images/stats.png',
    imageAlt: 'Statistics calculator output',
    summary: 'Descriptive statistics, outlier detection and regression from file or manual input.',
    bullets: [
      'Reads datasets from files or manual input.',
      'Mean, median, variance, standard deviation, modes and regression.',
      'Flags outliers at 2× and 3× thresholds.',
    ],
  },
  {
    id: 'databases',
    title: 'Creating & Optimizing Databases',
    tagLine: 'SQL SERVER',
    tags: ['school'],
    image: 'images/database.png',
    imageAlt: 'Database diagram',
    summary: 'Schemas, indexes, stored procedures and transactions built from project requirements.',
    bullets: [
      'Schema designed from detailed project requirements.',
      'Indexes and stored procedures for fast, maintainable queries.',
      'Transactions with commit and rollback to protect data integrity.',
    ],
    featured: true,
  },
  {
    id: 'wordle',
    title: 'Daily Wordle',
    tagLine: 'C# · gRPC · WPF',
    tags: ['school'],
    image: 'images/wordle.png',
    imageAlt: 'Wordle game board',
    summary: 'Daily Wordle game with a WPF client and two gRPC services.',
    bullets: [
      'WPF desktop client with an on-screen keyboard that colours letters as you guess.',
      'Bidirectional gRPC streaming checks each guess and tracks used letters in real time.',
      'Separate word service picks the daily word and validates guesses against a dictionary.',
      'Daily player stats and guess distribution saved to JSON, protected by a mutex for concurrent players.',
    ],
  },
  {
    id: 'cupid-pigeon',
    title: 'Cupid Pigeon',
    tagLine: 'REACT · C# · ASP.NET CORE · MONGODB',
    tags: ['school'],
    image: 'images/cupid-pigeon-signup.png',
    imageAlt: 'Cupid Pigeon sign-up screen',
    gallery: [
      { src: 'images/cupid-pigeon-signup.png', alt: 'Cupid Pigeon sign-up screen', caption: 'Mobile sign-up screen' },
      { src: 'images/cupid-pigeon-demo.mp4', alt: 'Cupid Pigeon demo video', kind: 'video', caption: 'App walkthrough' },
    ],
    summary: 'Dating web app with a React front end and an ASP.NET Core REST API backed by MongoDB.',
    bullets: [
      'React (Vite, Tailwind CSS, daisyUI) front end with sign-up, login, email verification and profile creation flows.',
      'ASP.NET Core REST API with MongoDB repositories for users and dating profiles.',
      'Secure accounts: hashed passwords, cookie-based authentication and a 10-minute emailed verification code sent with MailKit.',
      'Mobile-first profile builder covering salutation, date of birth, gender, photo and preferred contact method.',
    ],
  },
];

export const projectFilters: { id: ProjectTag; label: string }[] = [
  { id: 'personal', label: 'Personal Project' },
  { id: 'school', label: 'School Work' },
];
