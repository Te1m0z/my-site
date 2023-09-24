import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
//import firebaseAuth from '../lib/firebase/firebaseAuth'
//import { User as IFirebaseUser } from 'firebase/auth'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { modifyUser } from '~/src/app'
import type { ReactNode } from 'react'
import type { IUser } from '~/src/app'

interface IAuthContext {
  user: IUser | null
  error: Error | null
  loading: boolean
  loginWithEmailAndPassword: (data: ILoginData) => Promise<void>
  logout: () => Promise<void>
}

interface ILoginData {
  email: string
  password: string
}

interface IAuthProviderProps {
  children: ReactNode
}

const initialState = {
  user: null,
  error: null,
  loading: false,
  loginWithEmailAndPassword: async (_: ILoginData) => {},
  logout: async () => {},
}

export const AuthContext = createContext<IAuthContext>(initialState)

const FirebaseAuthProvider = ({ children }: IAuthProviderProps) => {
  /* STATES */

  const [user, setUser] = useState<IUser | null>(initialState.user)
  const [loading, setLoading] = useState<boolean>(initialState.loading)
  const [error, setError] = useState<Error | null>(initialState.error)
  //const [userBookmarks, setUserBookmarks] = useState<Bookmark[] | null>(null)

  /* HOOKS */

  // useEffect(() => {
  //   const unsubscribe = firebaseAuth.onAuthStateChanged(authStateChanged)
  //   return () => unsubscribe()
  // }, [])

  const router = useRouter()

  //  useEffect(() => {
  //    if (error) {
  //      toast.error('ERROR')
  //      //setError(null)
  //    }
  //  }, [error])

  /* METHODS */

  const authStateChanged = () => {}

  // const authStateChanged = async (user: IFirebaseUser | null) => {
  //   setLoading(true)
  //   try {
  //     if (!user) throw 'User not exist'
  //     // Забираем только нужные поля
  //     const modifiedUser = modifyUser(user)
  //     // Если юзер есть - установка в state
  //     setUser(modifiedUser)
  //     // При входе / выходе из аккаунта - редирект на "/"
  //     router.push('/')
  //   } catch (_) {
  //     setUser(null)
  //     setError(new Error('authStateChanged error'))
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const loginWithEmailAndPassword = async (data: ILoginData): Promise<void> => {
    const { email, password } = data
    //
    setLoading(true)
    //
    try {
      //await signInWithEmailAndPassword(firebaseAuth, email, password)
      const response = await axios.post('/api/login', {
        email,
        password,
      })
      console.log(response)
      // Дальше если успешный вход - Firebase
      // сама обновит состояние - вызовется authStateChanged
    } catch (error) {
      setUser(null)
      setError(new Error('loginWithEmailAndPassword error'))
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      //await signOutFirebase(firebaseAuth)
    } catch (error) {
      setError(error as Error)
    }
  }

  const value: IAuthContext = {
    user,
    error,
    loading,
    loginWithEmailAndPassword,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default FirebaseAuthProvider
