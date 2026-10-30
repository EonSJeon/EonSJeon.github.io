import { defineCollection, type SchemaContext } from 'astro:content';
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

const common = ({ image }: SchemaContext) => z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  categoryLabel: z.string().min(1),
  status: z.string().min(1),
  period: z.string().optional(),
  institution: z.string().optional(),
  courseCode: z.string().optional(),
  showCourseCode: z.boolean().default(true),
  courseTitle: z.string().optional(),
  type: z.enum(['senior-design', 'junior-design', 'laboratory', 'course-final-project']).optional(),
  displayOrder: z.number().int().default(100),
  featured: z.boolean().default(false),
  approvedForPublication: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  contribution: z.string().optional(),
  cover: z.object({ src: image(), alt: z.string().min(1), position: z.string().optional() }).optional(),
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
  translationKey: z.string().regex(/^[a-z0-9]+(?:[a-z0-9/-]*[a-z0-9])?$/).optional(),
  authors: z.array(z.string()).optional(),
  venue: z.string().optional(),
  doi: z.string().optional(),
  relatedResearch: z.string().optional(),
  priority: z.number().int().optional(),
});

// A shared base keeps empty collections valid without placeholder content files.
const loaderFor = (collection: string) => {
  const source = glob({
  base: './src/content',
  pattern: [`${collection}/**/*.{md,mdx}`, `!${collection}/**/[Rr][Ee][Aa][Dd][Mm][Ee].{md,mdx}`, `!${collection}/**/raw/**`],
  generateId: ({ entry }) => {
    const parts = entry.slice(collection.length + 1).replace(/\.(md|mdx)$/i, '').split('/');
    const filename = parts.at(-1);
    const languageSuffix = filename?.match(/\.(en|ko)$/)?.[0] ?? '';
    const stem = languageSuffix ? filename!.slice(0, -languageSuffix.length) : filename;
    // Colocated media must not change an entry's existing public address.
    if (parts.length > 1 && (stem === 'index' || stem === parts.at(-2))) parts.pop();
    else if (languageSuffix) parts[parts.length - 1] = stem!;
    return parts.join('/') + languageSuffix;
  },
  });
  return {
    ...source,
    async load(context: Parameters<typeof source.load>[0]) {
      await source.load({
        ...context,
        store: {
          ...context.store,
          // Unreleased images must stay outside Astro's asset/module graph as
          // well as its page queries. Retain metadata for the release predicate.
          get: <TData extends Record<string, unknown> = Record<string, unknown>>(id: string) => {
            const entry = context.store.get<TData>(id);
            return entry && entry.data.approvedForPublication === true && entry.data.draft !== true ? entry : undefined;
          },
          set: (entry) => {
            if (entry.data.approvedForPublication === true && entry.data.draft !== true) return context.store.set(entry);
            const data = { ...entry.data };
            delete data.cover;
            context.store.delete(entry.id);
            return context.store.set({ id: entry.id, data, filePath: entry.filePath, digest: entry.digest });
          },
        },
      });
    },
  };
};

export const collections = {
  research: defineCollection({
    loader: loaderFor('research'),
    schema: (context) => common(context).extend({ relatedManuscript: z.string().optional(), researchArea: z.enum(['communications', 'meta-analysis']).optional() }),
  }),
  publications: defineCollection({
    loader: loaderFor('publications'),
    schema: common,
  }),
  projects: defineCollection({
    loader: loaderFor('projects'),
    schema: (context) => common(context).extend({ award: z.string().optional(), event: z.string().optional() }),
  }),
  coursework: defineCollection({
    loader: loaderFor('coursework'),
    schema: (context) => common(context).extend({ courseCode: z.string().min(1) }),
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
