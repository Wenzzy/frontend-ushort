'use client'
import { handleErrors } from '#/lib/utils'
import { CInput } from '#fcontrols/CInput'
import { LinksService } from '#services/links'
import { CreateLinkReq } from '#services/links/linksService.types'
import { Btn } from '#ui/buttons/Btn'
import { FormResult } from '#ui/FormResult'
import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { createSchema } from './schemas'

interface CreateLinkForm {
  name?: string
  realUrl: string
}

export function CreateLinkForm() {
  const form = useForm<CreateLinkForm>({
    resolver: zodResolver(createSchema),
    mode: 'onChange',
  })

  const {
    mutate: createLink,
    data: res,
    isSuccess,
    error,
  } = useMutation(
    (data: CreateLinkReq) => {
      return LinksService.create(data)
    },
    {
      onError: (err) => handleErrors(err, form.setError),
    },
  )
  const onSubmit = async (data: CreateLinkForm) => createLink(data)

  return (
    <div className="flex gap-2 flex-col items-start justify-center w-full max-w-[80%]">
      <h2 className="text-lg">URL shortener</h2>
      <div className="flex flex-col gap-[1.55rem] w-full">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4.5 mt-5 w-full "
          >
            <CInput name="name" type="text" placeholder="Name" wFull />
            <div className="flex items-start gap-4.5 w-full">
              <CInput name="realUrl" type="text" placeholder="Paste your loooong link" wFull />
              <Btn accented type="submit" className="w-[100px] py-[0.435rem] text-3md">
                GO
              </Btn>
            </div>
          </form>
        </FormProvider>
        {isSuccess && (
          <FormResult
            isLink
            text={`https://${process.env.NEXT_PUBLIC_USHORT_DOMAIN}/${res.alias}`}
          />
        )}
      </div>
    </div>
  )
}
