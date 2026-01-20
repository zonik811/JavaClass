import { defineCollection, z } from 'astro:content';

const lessonsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        day: z.number(),
        title: z.string(),
        objective: z.string(),
        topics: z.array(z.string()),
        miniProject: z.boolean().default(false),
        projectTitle: z.string().optional(),
    }),
});

export const collections = {
    'lessons': lessonsCollection,
};
