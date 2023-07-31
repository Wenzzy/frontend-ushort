export interface NavItem {
  title: string
  path: string
}

export const navItems: NavItem[] = [
  {
    title: 'Create',
    path: '/links/create',
  },
  {
    title: 'My links',
    path: '/links/list',
  },
]
