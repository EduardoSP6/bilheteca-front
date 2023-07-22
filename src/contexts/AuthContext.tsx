import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect
} from 'react'
import { CreatorDTO } from '@/models/CreatorDTO'
import { useAuthService } from '@/services/AuthService'
import { useProfileService } from '@/services/ProfileService'
import { setupDefaultHeader } from '@/services/api'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { MyProfileFormData } from '@/pages/organizador/minha-conta'

interface SignInCredentials {
  credencial: string
  password: string
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: () => Promise<void>
  updateUser: (params: MyProfileFormData) => Promise<void>
  isAuthenticated: boolean
  user: CreatorDTO | null
  isLoading: boolean
  finalizeSession: () => Promise<void>
}

interface AuthProviderProps {
  children?: ReactNode
}

const { login, logout } = useAuthService

const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getMe, updateProfile } = useProfileService()

  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<CreatorDTO | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'bilheteca.token': token } = parseCookies()
    setupDefaultHeader(token)

    const init = async () => {
      try {
        const response = await getMe()
        const user = response.data
        setUser(user)
      } catch (err) {
        console.log(err)
        destroyCookie(undefined, 'bilheteca.token')
      } finally {
        setIsLoading(false)
      }
    }

    if (token) {
      void init()
    } else {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const signUp = async () => {
    await Promise.resolve()
  }

  const signIn = async ({ credencial, password }: SignInCredentials) => {
    try {
      const loginResponse = await login(credencial, password)
      const { access_token } = loginResponse.data

      setCookie(undefined, 'bilheteca.token', access_token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      })

      const response = await getMe()

      setUser(response.data)
    } catch (err) {
      const error = err as Error
      throw new Error(error.message)
    }
  }

  const updateUser = async (params: MyProfileFormData) => {
    const response = await updateProfile(user?.uuid ?? '', params)

    if (!response.data) {
      throw new Error('Failed to update user')
    }

    setUser(response.data)
  }

  const finalizeSession = async () => {
    try {
      setUser(null)
      destroyCookie(undefined, 'bilheteca.token')
      await logout()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        isAuthenticated,
        user,
        updateUser,
        isLoading,
        finalizeSession
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth should be used inside auth context')
  }

  return context
}
