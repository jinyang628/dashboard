import { z } from 'zod';

const urlStateSchema = z.object({
  id: z.number(),
  level: z.number(),
  url: z.string(),
});

export type UrlState = z.infer<typeof urlStateSchema>;
