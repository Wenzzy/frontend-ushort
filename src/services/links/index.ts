import { axiosAuth } from '#/lib/axios'
import { GARes } from '#types/interfaces'

import { CreateLinkReq, CreateLinkRes, UpdateLinkReq } from './linksService.types'

export class LinksService {
  public static async getAll(page = 1, take = 10): Promise<GARes<LinkModel>> {
    const res = await axiosAuth.get<GARes<LinkModel>>('/links', {
      params: {
        page,
        take,
      },
    })
    return res.data
  }

  public static async getOne(linkId: number): Promise<LinkModel> {
    const res = await axiosAuth.get<LinkModel>(`/links/${linkId}`)
    return res.data
  }

  public static async create(props: CreateLinkReq): Promise<CreateLinkRes> {
    const res = await axiosAuth.post<CreateLinkReq, { data: CreateLinkRes }>('/links', props)
    return res.data
  }

  public static async update(linkId: number, props: UpdateLinkReq): Promise<void> {
    return axiosAuth.patch(`/links/${linkId}`, props)
  }

  public static async delete(linkId: number): Promise<void> {
    return axiosAuth.delete(`/links/${linkId}`)
  }
}
