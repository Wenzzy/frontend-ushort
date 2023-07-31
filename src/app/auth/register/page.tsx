import { RegisterPage } from '#comp/pages/RegisterPage'
import { UnAuthGuard } from '#comp/wrappers/UnAuthGuard'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration',
}

export default function Register() {
  return (
    <UnAuthGuard>
      <main>
        <RegisterPage />
      </main>
    </UnAuthGuard>
  )
}
