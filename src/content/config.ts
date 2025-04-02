import { defineCollection, z } from "astro:content";

// Common fields shared across most entries
const baseFields = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  summary: z.string().optional(),
});

// Section-specific collections
export const collections = {
  "ghost-files": defineCollection({
    type: "content",
    schema: baseFields.extend({
      type: z.literal("ghostfile"),
    }),
  }),
  "sigils": defineCollection({
    type: "content",
    schema: baseFields.extend({
      type: z.literal("sigil"),
    }),
  }),
  "dust-data": defineCollection({
    type: "content",
    schema: baseFields.extend({
      type: z.literal("data"),
    }),
  }),
  "dead-links": defineCollection({
    type: "content",
    schema: baseFields.extend({
      type: z.literal("deadlink"),
    }),
  }),
  "hauntings": defineCollection({
    type: "content",
    schema: baseFields.extend({
      type: z.literal("haunting"),
      subject: z.string().optional(),
      symptoms: z.array(z.string()).optional(),
      effects: z.string().optional(),
    }),
  }),
  "transmissions": defineCollection({
    type: "content",
    schema: baseFields.extend({
      type: z.literal("transmission"),
      time: z.string().optional(),
    }),
  }),
};
