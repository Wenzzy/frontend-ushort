import { NavigationItem } from './NavigationItem'
import { navItems } from './navItems'

export function NavigationItemsList() {
  return (
    <ul className="flex flex-col items-center justify-center list-none gap-1 w-full">
      {navItems.map(({ title, path }) => (
        <li className="w-full" key={path}>
          <NavigationItem title={title} href={path} />
        </li>
      ))}
    </ul>
  )
}
