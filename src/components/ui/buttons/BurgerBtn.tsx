import { twMerge } from 'tailwind-merge'

import { BurgerIcon } from '../icons/BurgerIcon'
import { CloseIcon } from '../icons/CloseIcon'

interface BurgerBtnProps {
  opened: boolean
  className?: string

  [key: string]: any
}

export function BurgerBtn({ opened, className, ...props }: BurgerBtnProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-full',
        'p-1 color-primary bg-accent',
        className,
      )}
      type="button"
      {...props}
    >
      {opened ? <CloseIcon /> : <BurgerIcon />}
    </button>
  )
}
