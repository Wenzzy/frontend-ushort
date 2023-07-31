import { BurgerBtn } from '#ui/buttons/BurgerBtn'
import { LogoIcon } from '#ui/icons/LogoIcon'
import Link from 'next/link'

interface NavigationHeaderProps {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}

export function NavigationHeader({ isOpened, setIsOpened }: NavigationHeaderProps) {
  return (
    <div
      className="absolute flex items-center justify-between z-10 top-2 left-2 "
      style={{ width: 'calc(100% + 8px)' }}
    >
      <Link href="/links/create">
        <LogoIcon className="w-[60px] h-[60px]" />
      </Link>
      <BurgerBtn opened={isOpened} onClick={() => setIsOpened(!isOpened)} />
    </div>
  )
}
