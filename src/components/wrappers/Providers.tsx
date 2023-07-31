'use client'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient())
  return (
    <SessionProvider>
      <QueryClientProvider client={client}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      </QueryClientProvider>
    </SessionProvider>
  )
}
