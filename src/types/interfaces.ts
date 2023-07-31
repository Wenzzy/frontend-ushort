export interface IconProps {
  className?: string
}
// GetAllResponse
export interface GARes<T> {
  data: T[]
  currentPage: number
  took: number
  totalCount: number
}
