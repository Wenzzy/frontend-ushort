import { z } from 'zod'

export const updateSchema = z.object({
  name: z.string().max(150, 'Max length 150').optional(),
})
