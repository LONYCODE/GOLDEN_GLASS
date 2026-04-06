import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(), 
    category: z.string(),
  }),
});

export const collections = {
  'portfolio': portfolioCollection,
};