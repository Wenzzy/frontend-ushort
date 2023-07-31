'use client'
import { handleErrors } from '#/lib/utils'
import { CInput } from '#fcontrols/CInput'
import { Btn } from '#ui/buttons/Btn'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { registerSchema } from './schemas'

interface LoginForm {
  email: string
  password: number
}

export function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/links/create'

  const form = useForm<LoginForm>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginForm) => {
    signIn('credentials-register', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl,
    })
      .then((res) => {
        if (res?.error && !handleErrors(res.error, form.setError, true)) {
          return form.setError('email', { message: 'Something went wrong' })
        }
        router.push(callbackUrl)
      })
      .catch((err) => {
        form.setError('email', { message: 'Something went wrong' })
      })
  }
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4.5 flex-col items-center justify-center max-w-[425px]"
      >
        <CInput name="email" type="email" placeholder="Email" wFull />
        <div className="flex gap-4.5 items-center justify-center py-2">
          <CInput name="password" type="password" placeholder="Password" />
          <CInput name="repeatPassword" type="password" placeholder="Repeat password" />
        </div>
        <div className="flex items-center justify-end w-full">
          <Btn accented type="submit" className="w-[100px] py-[0.94rem]">
            Register
          </Btn>
        </div>
      </form>
    </FormProvider>
  )
}
