'use client'
import { handleErrors } from '#/lib/utils'
import { CInput } from '#fcontrols/CInput'
import { LinksService } from '#services/links'
import { UpdateLinkReq } from '#services/links/linksService.types'
import { Btn } from '#ui/buttons/Btn'
import { ContentLoader } from '#ui/ContentLoader'
import { ContentLoadingError } from '#ui/ContentLoadingError'
import { useParams, useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'

import { updateSchema } from './schemas'

interface UpdateLinkForm {
  name?: string
}

export function UpdateLinkForm() {
  const id = Number(useParams()?.id)
  const router = useRouter()

  const { data: link, isLoading, isError } = useQuery(['link', id], () => LinksService.getOne(id))

  const form = useForm<UpdateLinkForm>({
    resolver: zodResolver(updateSchema),
    mode: 'onChange',
  })

  const {
    mutate: updateLink,
    error, // TODO: Implement error notification
  } = useMutation(
    (data: UpdateLinkReq) => {
      return LinksService.update(id, data)
    },
    {
      onSuccess: () => {
        router.push('/links/list')
      },
      onError: (err) => handleErrors(err, form.setError),
    },
  )
  const onSubmit = async (data: UpdateLinkForm) => updateLink(data)

  if (isLoading) return <ContentLoader />
  if (isError) return <ContentLoadingError />

  return (
    <div className="flex gap-2 flex-col items-start justify-center w-full max-w-[80%]">
      <h2 className="text-lg">Update URL</h2>

      <div className="flex flex-col gap-[0.95]">
        <p className="text-2md">
          Real URL: <span className="text-accent">{link.realUrl}</span>
        </p>
        <p className="text-2md">
          Shorted URL:{' '}
          <span className="text-accent">
            {process.env.NEXT_PUBLIC_BACKEND_URL}/{link.alias}
          </span>
        </p>
        <p className="text-2md">
          Created at:{' '}
          <span className="text-accent">
            {link.createdAt && new Date(link.createdAt).toLocaleString('ru-RU')}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-[1.55rem] w-full">
        <div className="flex flex-col gap-3 mt-5 w-full ">
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-center gap-4.5 w-full"
            >
              <CInput name="name" type="text" placeholder="Name" wFull defaultValue={link.name} />
              <Btn accented type="submit" className="w-[100px] py-[0.435rem] text-3md">
                Update
              </Btn>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  )
}
