import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.coerce.date(),
  summary: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const ghostFiles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/ghost-files" }),
  schema: baseSchema.extend({
    type: z.literal("ghostfile"),
  }),
});

const sigils = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/sigils" }),
  schema: baseSchema.extend({
    type: z.literal("sigil"),
  }),
});

const dustData = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/dust-data" }),
  schema: baseSchema.extend({
    type: z.literal("data"),
  }),
});

const deadLinks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/dead-links" }),
  schema: baseSchema.extend({
    type: z.literal("deadlink"),
  }),
});

const hauntings = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/hauntings" }),
  schema: baseSchema.extend({
    type: z.literal("haunting"),
    subject: z.string().optional(),
    symptoms: z.array(z.string()).optional(),
    effects: z.string().optional(),
  }),
});

const transmissions = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/transmissions" }),
  schema: baseSchema.extend({
    type: z.literal("transmission"),
    time: z.string().optional(),
  }),
});

export const collections = {
  ghostFiles,
  sigils,
  dustData,
  deadLinks,
  hauntings,
  transmissions,
};