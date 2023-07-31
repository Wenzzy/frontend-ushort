import { CreateLinkForm } from '#forms/CreateLinkForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create URL',
}

export default function Create() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <CreateLinkForm />
    </div>
  )
}
