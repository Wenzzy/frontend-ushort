import axios from 'axios'
import { Session } from 'next-auth'
import { getSession, signIn } from 'next-auth/react'

const BASE_URL = 'http://localhost:5005/api/v1'

const baseAxios = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
const configureAuthAxios = () => {
  let currentSession: Session | null = null

  axiosAuth.interceptors.request.use(
    (config) => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${currentSession?.user?.accessToken}`
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  axiosAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
      const prevRequest = error?.config
      if (error?.response?.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true

        // Trigger refresh session
        const session = await getSession({
          triggerEvent: true,
          broadcast: true,
        })
        if (!session) signIn()
        currentSession = session
        prevRequest.headers['Authorization'] = `Bearer ${session?.user.accessToken}`
        return axiosAuth(prevRequest)
      }
      return Promise.reject(error)
    },
  )
}

configureAuthAxios()

export { axiosAuth }

export default baseAxios
