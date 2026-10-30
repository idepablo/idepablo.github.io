import { defineCollection, z } from 'astro:content';
import { pages } from './loaders/pages';

// One file per project in src/content/projects/ (name.html or name.md).
// The body is the case study itself; the frontmatter is what the cards and the hero show.
const projects = defineCollection({
  loader: pages({ base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      eyebrow: z.string().default(''),
      byline: z.string().default(''),
      description: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      category: z.string().default('Case study'),
      area: z.string().default(''),
      cover: image().optional(),
      tools: z.array(z.string()).default([]),
      pills: z.array(z.string()).default([]),
      stats: z.array(z.object({ num: z.string(), cap: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
      external: z.string().url().optional(),
      featured: z.boolean().default(false),
      status: z.enum(['live', 'done', 'in-progress']).default('done'),
      draft: z.boolean().default(false),
    }),
});

// One file per build-log post in src/content/buildlog/ (name.html or name.md).
const buildlog = defineCollection({
  loader: pages({ base: './src/content/buildlog' }),
  schema: z.object({
    title: z.string(),
    dateLabel: z.string(),
    date: z.coerce.date(),
    order: z.number().default(0),
    project: z.string().default('azimuth'),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, buildlog };
