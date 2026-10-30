// Facts shown on the homepage. Edit here; the page renders from these lists.
// Badge images live in src/assets/badges/ (340x340 PNGs from Credly).

import aws from '../assets/badges/aws.png';
import aplus from '../assets/badges/aplus.png';
import net from '../assets/badges/net.png';
import sec from '../assets/badges/sec.png';
import cloud from '../assets/badges/cloud.png';
import google from '../assets/badges/google.png';
import linux from '../assets/badges/linux.png';
import capm from '../assets/badges/capm.png';
import itil from '../assets/badges/itil.png';

export const intro = {
  status: 'Seattle, WA · Open to conversations',
  pitch:
    'I help organizations across Latin America store, protect, and access their data anywhere. Outside work I build data projects end to end, from the pipeline to the app, and document the process at idepablo.com.',
  azimuthBlurb:
    'Launch market intelligence: every orbital launch since 1957, reliability by flight number, a scenario simulator, and questions in plain language.',
};

export const about = {
  paragraphs: [
    'I spent seven years in fintech, most of them inside a support structure: resolving technical issues across POS systems, integrations and compliance for a 12,000+ merchant portfolio, and founding the Spanish-language support program, which grew from about 250 to 900+ accounts.',
    'That work moved me toward the data behind it, so I went back to school for a B.S. in Information Technology, completed a data analytics bootcamp, earned a set of industry certifications, and built the projects on this site.',
    'Today I work as a Product & Solutions Engineer at Synology, supporting partners and customers across Latin America, and I start an M.S. in Computer Science at Western Governors University in December 2026.',
  ],
  cards: [
    {
      icon: 'briefcase',
      title: 'Solutions engineering',
      text: 'Discovery, solution design, technical demos and training across the Synology portfolio: storage, data protection, productivity, video surveillance and cloud.',
    },
    {
      icon: 'chart',
      title: 'Data and analytics',
      text: 'SQL, Python, dbt, Tableau and Power BI, from data modeling on Databricks to dashboards and the statistics behind them.',
    },
    {
      icon: 'code',
      title: 'Building software',
      text: 'Web apps on Supabase and Streamlit, an iOS game on the App Store, and CI pipelines that test and deploy on their own.',
    },
    {
      icon: 'globe',
      title: 'Bilingual, dual citizen',
      text: 'Native Spanish and fluent English. Citizen of the United States and Spain, so no visa sponsorship is needed in either.',
    },
  ],
};

export const work = [
  {
    when: 'Aug 2026 · now',
    role: 'Product & Solutions Engineer',
    org: 'Synology · Bellevue, WA',
    text: "Technical point of contact for partners, resellers and end users across Latin America. Solution design, live demos, training material, and the LATAM team's lab and demo environments.",
    current: true,
  },
  {
    when: 'Mar 2024 · Jul 2026',
    role: 'Career break',
    org: 'Professional development and full-time parenting',
    text: 'Completed the B.S. and a data analytics bootcamp, earned the CompTIA, AWS, PMI and ITIL certifications, and built the projects on this site.',
  },
  {
    when: 'Mar 2023 · Mar 2024',
    role: 'Bilingual Financial Support Analyst',
    org: 'Gravity Payments · Seattle, WA',
    text: 'Escalations across billing, payments, chargebacks and integrations for 12,000+ accounts; cut case resolution time by 25%.',
  },
  {
    when: 'Dec 2016 · Mar 2023',
    role: 'Bilingual Customer Success Engineer',
    org: 'Gravity Payments · Seattle, WA',
    text: 'Founded and scaled the Spanish-language support program from about 250 to 900+ accounts, with roughly 20% lower churn.',
  },
];

export const education = [
  { when: 'Starts Dec 2026', degree: 'M.S., Computer Science', org: 'Western Governors University · admitted' },
  { when: 'Jul 2026', degree: 'B.S., Information Technology', org: 'Western Governors University' },
  { when: 'Mar · Jun 2026', degree: 'Data Analytics Bootcamp', org: 'Data Analytics Accelerator (DAA)' },
];

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', img: aws, verify: 'https://www.credly.com/badges/384ef19e-ff5e-4e8d-bafd-1e9e2bd80afe' },
  { name: 'CompTIA A+', issuer: 'CompTIA', img: aplus, verify: 'https://www.credly.com/badges/03e902da-6a6d-4e95-8716-ca8cb6ab0d70' },
  { name: 'CompTIA Network+', issuer: 'CompTIA', img: net, verify: 'https://www.credly.com/badges/a4f5acbb-9a2c-4438-a7bc-65839fa982ff' },
  { name: 'CompTIA Security+', issuer: 'CompTIA', img: sec, verify: 'https://www.credly.com/badges/e8d289cf-9ec5-47f1-a49b-317908e3c34a' },
  { name: 'CompTIA Cloud+', issuer: 'CompTIA', img: cloud, verify: 'https://www.credly.com/badges/045ead3d-cae2-4e6a-b1ca-554a8f226c56/public_url' },
  { name: 'Google IT Support', issuer: 'Google / Coursera', img: google, verify: 'https://www.credly.com/badges/edc8f4fb-0ac1-4c7e-a1b9-468e5298e765' },
  { name: 'LPI Linux Essentials', issuer: 'Linux Professional Institute', img: linux, verify: 'https://www.credly.com/badges/a4fa37d3-5b1d-4583-88ab-16914051ae83' },
  { name: 'PMI CAPM', issuer: 'Project Management Institute', img: capm, verify: 'https://www.credly.com/badges/a3f660f1-9a19-404c-bb49-6af3e47aaf0a' },
  { name: 'ITIL 4 Foundation', issuer: 'PeopleCert / Axelos', img: itil, verify: 'https://www.peoplecert.org/en/for-corporations/certificate-verification-service' },
];

export const certificationsNote =
  'Plus four stacked CompTIA specialist certifications: IT Operations Specialist, Secure Infrastructure Specialist, Cloud Admin Professional and Secure Cloud Professional. PMI member, National and Puget Sound chapters.';

export const personal = [
  { icon: 'sword', title: 'Fencing', text: 'Speed, strategy and reading your opponent in real time. Registered member of USA Fencing.' },
  { icon: 'film', title: 'Cinema', text: 'Movies of every era, from new releases to old classics. All-time favorites: Top Gun and Drive.' },
  { icon: 'rocket', title: 'Space', text: 'Spaceships, exploration, and anything with the word "space" in it. It is where AZIMUTH came from.' },
  { icon: 'heart', title: 'Family', text: "I stepped away from work for a while to be there for my daughter's first milestones. I would not trade it for anything." },
];

export const contact = {
  text: 'Based in Seattle. Happy to talk about solutions engineering, data projects, or anything space related. My inbox is open.',
};
