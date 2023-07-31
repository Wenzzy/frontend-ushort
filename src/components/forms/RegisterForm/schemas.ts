import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z
      .string({ required_error: 'This field is required' })
      .email('Enter correct email please'),
    password: z
      .string({ required_error: 'This field is required' })
      .min(8, 'Min length 8')
      .max(64, 'Max length 64'),

    repeatPassword: z
      .string({ required_error: 'This field is required' })
      .min(8, 'Min length 8')
      .max(64, 'Max length 64'),
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        path: ['repeatPassword'],
        code: 'custom',
        message: 'Passwords do not match',
      })
    }
  })
