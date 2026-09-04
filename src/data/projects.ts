export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  /** lucide-react icon name used for the placeholder tile when no screenshot exists */
  placeholderIcon?: 'Camera' | 'Boxes' | 'Terminal' | 'Swords' | 'Spade' | 'Worm' | 'Grid2x2' | 'Database';
}

export const projects: ProjectEntry[] = [
  {
    id: 'nyc-taxi-data-pipeline',
    title: 'NYC Taxi Data Pipeline',
    description:
      'An end-to-end data engineering pipeline that extracts, loads, and transforms NYC Yellow Taxi trip data (2020–2025) using Airflow, DuckDB, and dbt — including COVID-19 impact analysis.',
    tech: ['Python', 'Airflow', 'dbt', 'DuckDB', 'Docker'],
    githubUrl: 'https://github.com/JacobBueno7/nyc-taxi-data-pipeline',
    placeholderIcon: 'Database',
  },
];
