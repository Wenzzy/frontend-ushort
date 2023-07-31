import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const UnAuthGuard = async ({ children }: any) => {
  const session = await getServerSession()
  if (session) {
    redirect('/links/create')
  }
  return children
}
