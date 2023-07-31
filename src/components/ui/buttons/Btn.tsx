import { twMerge } from 'tailwind-merge'

interface BtnProps {
  type?: 'button' | 'submit' | 'reset'
  accented?: boolean
  className?: string
  children: React.ReactNode

  [key: string]: any
}

export function Btn({ type, accented, className, children, ...props }: BtnProps) {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center',
        'py-[5px] px-[5px] text-primary transition-colors transition:duration-200',
        accented ? 'bg-accent hover:bg-gray-400' : 'bg-gray-450 hover:bg-accent',
        className,
      )}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  )
}
