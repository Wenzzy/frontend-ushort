import { LinksService } from '#services/links'
import { CircleActionBtn } from '#ui/buttons/CircleActionBtn'
import { DeleteIcon } from '#ui/icons/DeleteIcon'
import { EditIcon } from '#ui/icons/EditIcon'
import { LaunchIcon } from '#ui/icons/LaunchIcon'
import { useRouter } from 'next/navigation'

import { useMutation, useQueryClient } from '@tanstack/react-query'

export function Link({ id, name, realUrl, alias }: LinkModel) {
  const router = useRouter()
  const queryClient = useQueryClient()

  const {
    mutate: deleteLink,
    isSuccess, // TODO: implement notifications for success and error
    error,
  } = useMutation(
    () => {
      return LinksService.delete(id)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['links'])
      },
    },
  )

  const shortedUrl = `https://${process.env.NEXT_PUBLIC_USHORT_DOMAIN}/${alias}`

  const handleEdit = () => router.push(`/links/${id}`)

  const handleLaunch = () => {
    router.replace(shortedUrl)
  }
  const handleDelete = () => deleteLink()

  return (
    <div className="w-full p-5 pb-7 bg-gray-450">
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <h2 className="text-lg">{name ?? 'No-name'}</h2>
          <p>
            Real URL:{' '}
            <a href={realUrl} className="text-accent">
              {realUrl}
            </a>
          </p>
          <p>
            Shorted URL:{' '}
            <a href={shortedUrl} className="text-accent">
              {shortedUrl}
            </a>
          </p>
        </div>
        <div className="flex gap-[0.8rem]">
          <CircleActionBtn icon={EditIcon} onClick={handleEdit} />
          <CircleActionBtn icon={LaunchIcon} onClick={handleLaunch} />
          <CircleActionBtn icon={DeleteIcon} danger onClick={handleDelete} />
        </div>
      </div>
    </div>
  )
}
