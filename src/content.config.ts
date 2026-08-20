// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

const commaStringToArray = z.string().transform((val) =>
    val.split(',').map((item) => item.trim()).filter(Boolean)
);

const blogCollection = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string().optional(),
        pubDate: z.date(), // <-- Change this from z.coerce.date() to z.date()
        tags: commaStringToArray,
    }),
});

const projectsCollection = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        technologies: commaStringToArray,
        thumbnail: image().optional(),      // <-- was z.string().optional()
        tags: commaStringToArray,
        pubDate: z.date(),
        url: z.string().url(),
        industry: z.string(),
        status: z.string(),
        isActive: z.boolean()
    }),
});

export const collections = {
    'blog': blogCollection,
    'projects': projectsCollection,
};