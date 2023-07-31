import '#/styles/globals.css'

import Providers from '#comp/wrappers/Providers'
import { Inter } from 'next/font/google'
import { twJoin } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ushort - URL Shortener',
  description: 'Super fast URL shortener.',
  keywords: ['Next.js', 'Golang', 'React', 'TypeScript', 'Server Components', 'NextAuth'],
  authors: [
    {
      name: 'Wenzzy Belkov',
      url: 'https://github.com/wenzzyx',
    },
  ],
  creator: 'Wenzzy Belkov',
  publisher: 'Wenzzy Belkov',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twJoin(inter.className, 'bg-gray-500')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
