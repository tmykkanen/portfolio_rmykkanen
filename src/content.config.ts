import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    featuredImg: z.string().optional(),
    imageGallery: z.array(z.string()).optional(),
    creator: z.string(),
    collaborators: z.string().array().optional(),
    completed: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
