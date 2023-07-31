import { UnAuthGuard } from '#comp/wrappers/UnAuthGuard'
import { LoginPage } from '#pages/LoginPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <UnAuthGuard>
      <main>
        <LoginPage />
      </main>
    </UnAuthGuard>
  )
}
