'use client'

import { LinksService } from '#services/links'
import { GARes } from '#types/interfaces'
import { ContentLoader } from '#ui/ContentLoader'
import { ContentLoadingError } from '#ui/ContentLoadingError'
import { Pagination } from '#ui/Pagination'
import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { LinksList } from './LinksList'

const take = 5
export function LinksPage() {
  const [page, setPage] = useState(1)
  const {
    data: res,
    isError,
    isLoading,
  } = useQuery<GARes<LinkModel>>({
    queryKey: ['links', page],
    queryFn: () => LinksService.getAll(page, take),
  })

  if (isLoading) return <ContentLoader />
  if (isError) return <ContentLoadingError />
  return (
    <div className="w-full mt-24">
      <h2 className="text-lg">My created links</h2>
      <p>
        count: <span className="text-accent">{res.totalCount}</span>
      </p>
      <div className="mt-4 w-full">
        <LinksList links={res.data} />
      </div>
      <div className="mt-4">
        <Pagination page={page} setPage={setPage} totalItemsCount={res.totalCount} take={take} />
      </div>
    </div>
  )
}
