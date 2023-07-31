'use client'

import { twMerge } from 'tailwind-merge'

import { NavigationFooter } from './NavigationFooter'
import { NavigationHeader } from './NavigationHeader'
import { NavigationItemsList } from './NavigationItemsList'

interface NavigationProps {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}
export function Navigation({ isOpened, setIsOpened }: NavigationProps) {
  return (
    <div className="relative min-w-[100px] max-w-[232px]">
      <NavigationHeader isOpened={isOpened} setIsOpened={setIsOpened} />
      <div
        className={twMerge(
          'flex flex-col relative top-0 w-[232px] min-h-screen pt-[100px] bg-gray-450',
          'transition-all duration-300 ease-in-out',
          isOpened ? 'left-0' : '-left-[232px] w-0',
        )}
      >
        <div className="flex grow flex-col justify-between">
          <NavigationItemsList />
          <NavigationFooter />
        </div>
      </div>
    </div>
  )
}
