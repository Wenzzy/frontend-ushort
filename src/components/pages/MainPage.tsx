'use client'

import { Btn } from '#comp/ui/buttons/Btn';
import { LogoIcon } from '#comp/ui/icons/LogoIcon';
import { useRouter } from 'next/navigation';

export function MainPage() {
  const router = useRouter()
  return (
    <div className="flex gap-13 flex-col items-center justify-center min-h-screen py-2 h-full">
      <LogoIcon className="w-[95px] h-[95px]" />
      <div className="flex gap-4 items-center justify-center py-2">
        <Btn type="button" className="w-[115px]" onClick={() => router.push('/auth/register')}>
          Register
        </Btn>
        <Btn type="button" className="w-[115px]" onClick={() => router.push('/auth/login')}>
          Login
        </Btn>
      </div>
    </div>
  )
}
