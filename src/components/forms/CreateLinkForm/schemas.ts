import { z } from 'zod'

export const createSchema = z.object({
  name: z.string().max(150, 'Max length 150').optional(),
  realUrl: z
    .string({ required_error: 'This field is required' })
    .url('Enter correct url please')
    .min(5, 'Min length 5')
    .max(2000, 'Max length 2000'),
})
