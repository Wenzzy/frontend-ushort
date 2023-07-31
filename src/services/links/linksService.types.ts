export interface CreateLinkReq {
  name?: string
  realUrl: string
}

export interface CreateLinkRes {
  alias: string
}

export interface UpdateLinkReq {
  name?: string
}
