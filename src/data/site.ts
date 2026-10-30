// One place for the facts that appear in several pages.
// Edit here, and the nav, footer, hero, structured data and resume link all update.

export const site = {
  name: 'Ignacio de Pablo',
  nickname: 'Nacho',
  title: 'Product & Solutions Engineer at Synology',
  tagline: 'Product & Solutions Engineer · Data analytics builder',
  description:
    'Ignacio de Pablo, Product & Solutions Engineer at Synology and data analytics builder in Seattle. Projects in SQL, Python, Tableau, Databricks and Swift, including AZIMUTH, a launch-market BI platform.',
  url: 'https://idepablo.com',
  email: 'idepabloc@gmail.com',
  location: 'Seattle, WA',
  resume: '/resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/idepabloc',
    github: 'https://github.com/idepablo',
    tableau: 'https://public.tableau.com/app/profile/ignacio.de.pablo/vizzes',
    x: 'https://x.com/idepabloc',
  },
  azimuth: {
    app: 'https://azimuth-launch.streamlit.app/',
    repo: 'https://github.com/idepablo/azimuth-launch-tool',
    page: '/projects/azimuth.html',
  },
  beatOtto: {
    appStore: 'https://apps.apple.com/us/app/beat-otto-football-hangman/id6790029229',
  },
  now: 'Synology · LATAM accounts, in English and Spanish',
  next: 'M.S. Computer Science, WGU · starts Dec 2026',
  workAuthorization: 'Dual citizen, US and Spain · no sponsorship needed',
  analytics: {
    goatcounter: 'https://idepablo.goatcounter.com/count',
  },
};

export const nav = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#credentials', label: 'Credentials' },
  { href: '/#buildlog', label: 'Build log' },
];
