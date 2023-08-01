import axios from '#/lib/axios'
import { checkTokenExpired } from '#/lib/utils'
import NextAuth, { AuthOptions, RequestInternal } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshAccessToken(token: any) {
  try {
    const res = await axios.post('/auth/refresh', {
      token: token?.refreshToken,
    })

    const refreshedTokens = res?.data

    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken,
    }
  } catch (error) {
    return {
      ...token,
    }
  }
}
const getBaseAuthorize = (route: string, defaultErrorMsg: string) => {
  return async (
    credentials: Record<'email' | 'password', string> | undefined,
    req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>,
  ) => {
    try {
      const res = await axios.post(route, {
        email: credentials?.email,
        password: credentials?.password,
      })
      const user = res?.data

      return user || null
    } catch (error: any) {
      console.log('🚀 ~ file: [...nextAuth].ts:39 ~ getBaseAuthorize ~ error:', error)
      if (error.response && error.response.status === 422 && error?.response.data) {
        throw new Error(JSON.stringify(error.response.data))
      }
      throw new Error(defaultErrorMsg)
    }
  }
}

const baseAuthCredentials = {
  email: { label: 'Email', type: 'email', placeholder: 'email' },
  password: { label: 'Password', type: 'password' },
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/auth/login',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials-login',
      name: 'credentials',
      credentials: baseAuthCredentials,
      async authorize(...props) {
        return getBaseAuthorize('/auth/login', 'Invalid email or password')(...props)
      },
    }),
    CredentialsProvider({
      id: 'credentials-register',
      name: 'credentials',
      credentials: baseAuthCredentials,
      async authorize(...props) {
        return getBaseAuthorize('/auth/registration', 'Something went wrong')(...props)
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (token?.accessToken && checkTokenExpired(token.accessToken as string)) {
        return refreshAccessToken(token)
      }
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any

      return session
    },
  },
}

export default NextAuth(authOptions)
