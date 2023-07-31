import { LinksPage } from '#pages/LinksPage'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'List of links',
}

export default function List() {
  return <LinksPage />
}
