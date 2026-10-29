import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const collaborator = z.object({
  name: z.string().min(1),
  role: z.string().optional(),
  url: z.url().optional(),
});

const link = z.object({
  label: z.string().min(1),
  url: z.url(),
});

const common = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  categoryLabel: z.string().min(1),
  status: z.string().min(1),
  period: z.string().optional(),
  institution: z.string().optional(),
  courseCode: z.string().optional(),
  courseTitle: z.string().optional(),
  type: z.enum(['senior-design', 'junior-design', 'laboratory', 'course-final-project']).optional(),
  displayOrder: z.number().int().default(100),
  featured: z.boolean().default(false),
  approvedForPublication: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  contribution: z.string().optional(),
  collaborators: z.array(collaborator).default([]),
  links: z.array(link).default([]),
  video: z.object({
    youtubeId: z.string().regex(/^[\w-]{11}$/),
    title: z.string().min(1),
    caption: z.string().min(1).optional(),
  }).optional(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  language: z.enum(['en', 'ko']).default('en'),
  authors: z.array(z.string()).optional(),
  venue: z.string().optional(),
  doi: z.string().optional(),
  relatedResearch: z.string().optional(),
  priority: z.number().int().optional(),
});

// A shared base keeps empty collections valid without placeholder content files.
const loaderFor = (collection: string) => glob({
  base: './src/content',
  pattern: [`${collection}/**/*.{md,mdx}`, `!${collection}/**/[Rr][Ee][Aa][Dd][Mm][Ee].{md,mdx}`, `!${collection}/**/raw/**`],
  generateId: ({ entry }) => {
    const parts = entry.slice(collection.length + 1).replace(/\.(md|mdx)$/i, '').split('/');
    const filename = parts.at(-1);
    // Colocated media must not change an entry's existing public address.
    if (parts.length > 1 && (filename === 'index' || filename === parts.at(-2))) parts.pop();
    return parts.join('/');
  },
});

export const collections = {
  research: defineCollection({
    loader: loaderFor('research'),
    schema: common.extend({ relatedManuscript: z.string().optional() }),
  }),
  publications: defineCollection({
    loader: loaderFor('publications'),
    schema: common,
  }),
  projects: defineCollection({
    loader: loaderFor('projects'),
    schema: common.extend({ award: z.string().optional(), event: z.string().optional() }),
  }),
  coursework: defineCollection({
    loader: loaderFor('coursework'),
    schema: common.extend({ courseCode: z.string().min(1) }),
  }),
  blog: defineCollection({
    loader: loaderFor('blog'),
    schema: common,
  }),
  proposals: defineCollection({
    loader: loaderFor('proposals'),
    schema: common,
  }),
};
