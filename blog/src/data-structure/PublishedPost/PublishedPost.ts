import { type FromSchema, makeIsType } from "validation";

export const publishedPostSchema = {
  title: "publishedPost",
  type: "object",
  properties: {
    title: { type: "string" },
    draft: { not: {} },
    slug: { type: "string" },
    publishedAt: { type: "string", format: "date-time" },
    tags: { type: "array", items: { type: "string" } },
    excerpt: { type: "string" },
    previewImage: { type: "string", format: "uri-reference" },
  },
  required: ["title", "slug", "excerpt", "publishedAt"],
} as const;

export type PublishedPost = FromSchema<typeof publishedPostSchema>;

export const isPublishedPost = makeIsType<PublishedPost>(publishedPostSchema);
