import { z } from 'zod';

const urlStateSchema = z.object({
  id: z.number(),
  level: z.number(),
  value: z.string(),
});

export type UrlState = z.infer<typeof urlStateSchema>;

export const levelPlaceholderMapping: { [key: number]: string } = {
  1: "https://example.com",
  2: "/user",
  3: "/usage",
};
