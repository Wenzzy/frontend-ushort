import { IconProps } from '#types/interfaces'
import { twMerge } from 'tailwind-merge'

interface CircleActionBtnProps {
  icon: React.FC<IconProps>
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  danger?: boolean
  className?: string

  [key: string]: any
}

export function CircleActionBtn({
  icon: Icon,
  type,
  danger,
  className,
  ...props
}: CircleActionBtnProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-full',
        'p-1 color-primary bg-gray-350 hover:bg-accent transition-colors duration-200',
        danger && 'bg-red-600 hover:bg-red-500',
        className,
      )}
      type={type || 'button'}
      {...props}
    >
      <Icon />
    </button>
  )
}
