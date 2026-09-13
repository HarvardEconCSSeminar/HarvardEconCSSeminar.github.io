import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const clockTime = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Use 24-hour HH:MM format");
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD format");

const talks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/talks" }),
  schema: z
    .object({
      speaker: z.string().min(1),
      affiliation: z.string().min(1),
      speakerUrl: z.url().optional(),
      title: z.string().min(1).optional(),
      titleForthcoming: z.boolean().default(false),
      abstractForthcoming: z.boolean().default(false),
      date: isoDate,
      term: z.string().min(1).optional(),
      startTime: clockTime.optional(),
      endTime: clockTime.optional(),
      timeLabel: z.string().min(1).optional(),
      location: z.string().min(1).optional(),
      mapUrl: z.url().optional(),
      format: z.enum(["in-person", "hybrid", "virtual"]).default("in-person"),
      coauthors: z.string().min(1).optional(),
      links: z
        .array(
          z.object({
            label: z.string().min(1),
            url: z.url(),
          }),
        )
        .default([]),
      photo: z.string().min(1).optional(),
      draft: z.boolean().default(false),
      legacyEventId: z.string().min(1).optional(),
    })
    .superRefine((value, context) => {
      if (!value.title && !value.titleForthcoming) {
        context.addIssue({
          code: "custom",
          path: ["title"],
          message: "Provide a title or set titleForthcoming: true",
        });
      }
    }),
});

export const collections = { talks };
