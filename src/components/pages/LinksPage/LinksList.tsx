import { Link } from './Link'

interface LinksListProps {
  links: LinkModel[]
}

export function LinksList({ links }: LinksListProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {links.map((link) => (
        <Link key={link.id} {...link} />
      ))}
    </div>
  )
}
