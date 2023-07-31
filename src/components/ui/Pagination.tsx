import { twJoin } from 'tailwind-merge'

import { PageLastIcon } from './icons/PageLastIcon'
import { PageNextIcon } from './icons/PageNextIcon'

interface PaginationProps {
  page: number
  setPage: (page: number) => void

  totalPages?: number
  // OR
  totalItemsCount?: number

  take?: number
}

export function Pagination({ page, setPage, totalPages, totalItemsCount, take }: PaginationProps) {
  if (totalPages === undefined && totalItemsCount === undefined) {
    throw new Error('totalPages or totalItemsCount must be provided')
  }
  const tps = totalPages ?? Math.ceil((totalItemsCount as number) / (take ?? 10))
  const set = (p: number) => () => setPage(p)
  if (tps < 2) return null
  return (
    <div className="flex gap-[0.65rem]">
      <button onClick={set(1)} disabled={page === 1}>
        <PageLastIcon className="rotate-180" />
      </button>
      <button onClick={set(page - 1)} disabled={page === 1}>
        <PageNextIcon className="rotate-180" />
      </button>

      {[...Array(tps >= 3 ? 3 : tps)].map((_, idx) => {
        const expression = tps > 2 && page > tps - 2
        const _page = expression ? tps - (2 - idx) : page > 1 ? idx + (page - 1) : idx + page
        return (
          <button
            key={idx}
            onClick={set(_page)}
            className={twJoin(
              'rounded-full w-6 h-6 border',
              page === _page ? 'bg-accent border-accent' : ' border-gray-300',
            )}
          >
            {_page}
          </button>
        )
      })}

      <button onClick={set(page + 1)} disabled={page >= tps}>
        <PageNextIcon />
      </button>
      <button onClick={set(tps)} disabled={page >= tps}>
        <PageLastIcon />
      </button>
    </div>
  )
}
