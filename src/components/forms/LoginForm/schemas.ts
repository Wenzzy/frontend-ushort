import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string({ required_error: 'This field is required' }).email('Enter correct email please'),
  password: z
    .string({ required_error: 'This field is required' })
    .min(8, 'Min length 8')
    .max(64, 'Max length 64'),
})
