import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavigationItemProps {
  title: string

  isBtn?: boolean
  href?: string

  onClick?: (...props: any) => void
  className?: string
}

export function NavigationItem({ title, isBtn, href, onClick, className }: NavigationItemProps) {
  const Component = isBtn ? 'button' : Link
  const params: any = {}
  if (isBtn) params.onClick = onClick
  else params.href = href
  return (
    <Component
      {...params}
      className={twMerge(
        'w-full block bg-gray-400 py-2 text-primary text-center hover:bg-accent transition-colors duration-200',
        className,
      )}
    >
      {title}
    </Component>
  )
}
