'use client'
import { handleErrors } from '#/lib/utils'
import { CInput } from '#fcontrols/CInput'
import { Btn } from '#ui/buttons/Btn'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from './schemas'

interface LoginForm {
  email: string
  password: number
}

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/links/create'

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginForm) => {
    signIn('credentials-login', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl,
    })
      .then((res) => {
        if (res?.error && !handleErrors(res.error, form.setError, true)) {
          return form.setError('email', { message: 'Invalid credentials' })
        }
        router.push(callbackUrl)
      })
      .catch((err) => {
        form.setError('email', { message: 'Invalid credentials' })
      })
  }
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4.5 flex-col items-center justify-center w-full max-w-[425px]"
      >
        <CInput name="email" type="email" placeholder="Email" wFull />
        <CInput name="password" type="password" placeholder="Password" wFull />
        <div className="flex items-center justify-end w-full">
          <Btn accented type="submit" className="w-[100px] py-[0.94rem]">
            Login
          </Btn>
        </div>
      </form>
    </FormProvider>
  )
}
