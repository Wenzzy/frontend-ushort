'use client'

import { RegisterForm } from '#forms/RegisterForm'
import { LogoIcon } from '#ui/icons/LogoIcon'

export function RegisterPage() {
  return (
    <div className="flex gap-13 flex-col items-center justify-center min-h-screen py-2 h-full">
      <LogoIcon className="w-[95px] h-[95px]" />
      <RegisterForm />
    </div>
  )
}
