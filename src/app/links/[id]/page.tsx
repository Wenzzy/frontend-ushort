import { UpdateLinkForm } from '#forms/UpdateLinkForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Update URL',
}

export default function Update() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <UpdateLinkForm />
    </div>
  )
}
