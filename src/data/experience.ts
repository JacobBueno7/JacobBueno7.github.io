export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  dateRange: string;
  bullets: string[];
  category: 'work' | 'leadership';
}

export const experience: ExperienceEntry[] = [
  {
    id: 'ti',
    role: 'Data Engineer',
    org: 'Texas Instruments',
    dateRange: 'Jun 2026 – Present',
    category: 'work',
    bullets: [
      'Building a large-scale GraphQL API in Go that serves product data to ti.com and to teams across Texas Instruments that need programmatic access to product data.',
      'Designed the API for scale using WunderGraph Cosmo federation, allowing multiple teams to compose and extend the graph independently.',
      'Work with ClickHouse and YugabyteDB to store and serve data efficiently at scale.',
      'Implemented authentication and access control using Keycloak and PingFederate.',
    ],
  },
  {
    id: 'bill',
    role: 'Risk Data Science Intern',
    org: 'BILL',
    dateRange: 'May 2025 – Aug 2025',
    category: 'work',
    bullets: [
      'Developed and executed a fraud mitigation strategy targeting CNP (Card-Not-Present) transactions involving compromised cards and accounts, reducing exposure to runaway fraud.',
      'Captured $150k in runaway fraud on data between January 2025 and June 2025; developed and deployed an automated monitoring dashboard to deliver real-time alerts and enhance fraud detection.',
      'Engineered features indicative of fraud and developed and optimized complex SQL queries to extract, join, and analyze data across large relational databases.',
      'Utilized DataVisor to design and implement rule-based models and engineer new features for detecting and mitigating CNP runaway fraud, enhancing real-time risk prevention and management.',
    ],
  },
  {
    id: 'berkeley-exec-ed',
    role: 'Data Analyst Intern',
    org: 'UC Berkeley Executive Education',
    dateRange: 'Aug 2024 – May 2025',
    category: 'work',
    bullets: [
      'Designed and implemented a data pipeline that ingests educational survey data, preprocesses it into a visualization-ready format, and generates comprehensive reports from the transformed data.',
      'Streamlined report generation by building a scalable pipeline, reducing manual effort by roughly 3 hours per report and significantly improving reporting efficiency.',
    ],
  },
  {
    id: 'haas',
    role: 'Student Data Analyst',
    org: 'UC Berkeley Haas School of Business',
    dateRange: 'May 2024 – Aug 2024',
    category: 'work',
    bullets: [
      'Analyzed and visualized financial data that enabled the finance department to make data-driven decisions and use funds efficiently, using Tableau and Jupyter Notebooks to perform analysis.',
      'Performed data preprocessing and exploratory data analysis with Pandas to accurately transform financial and admissions data into clear, actionable reports.',
    ],
  },
  {
    id: 'coder-school',
    role: 'Code Coach',
    org: 'The Coder School, Berkeley',
    dateRange: 'Sept 2022 – Dec 2022',
    category: 'work',
    bullets: [
      'Taught and tutored students ages 6–17 to code through project-based learning, spanning skill levels from Scratch to Python and Java.',
      'Helped students effectively grow their programming skills, guiding them to build games and projects of their own design.',
    ],
  },
  {
    id: 'pie',
    role: 'Director of Software',
    org: 'Pioneers in Engineering',
    dateRange: 'Aug 2023 – Present',
    category: 'leadership',
    bullets: [
      'Oversee all software teams within the organization, providing technical leadership, coordinating cross-team collaboration, and guiding the development of projects.',
      'Previously led Shepherd, the game-field software team, building the live scoreboard, field sensors and pressure plates, and the software used to run and host matches.',
    ],
  },
  {
    id: 'gdsc',
    role: 'Leadership',
    org: 'Google Developer Student Club, UC Berkeley',
    dateRange: 'Jan 2023 – Present',
    category: 'leadership',
    bullets: [
      'Member of the leadership team for a student-run organization that teaches programming foundations through workshops and lectures, aiming to expand outreach of computer science to beginners.',
      'Help run the organization, manage outreach efforts, and lead workshops and lectures for students getting started in CS.',
    ],
  },
];
