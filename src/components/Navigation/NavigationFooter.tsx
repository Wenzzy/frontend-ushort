import { signOut } from 'next-auth/react'

import { NavigationItem } from './NavigationItem'

export function NavigationFooter() {
  return (
    <div className="flex items-center justify-center gap-2 w-full">
      <NavigationItem
        title={'Logout'}
        href={'/auth/logout'}
        className={'hover:bg-red-500'}
        isBtn
        onClick={() => {
          signOut({ callbackUrl: '/' })
        }}
      />
    </div>
  )
}
