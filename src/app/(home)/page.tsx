import { MainPage } from '#comp/pages/MainPage'
import { UnAuthGuard } from '#comp/wrappers/UnAuthGuard'
import Image from 'next/image'

export default function Home() {
  return (
    <UnAuthGuard>
      <main>
        <MainPage />
      </main>
    </UnAuthGuard>
  )
}
