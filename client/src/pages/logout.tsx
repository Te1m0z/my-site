import { useRouter } from 'next/router'
import { useEffect } from 'react'
//import { useFirebaseAuth } from '@/app'
import { toast } from 'react-hot-toast'
import type { NextPage } from 'next'

const LogoutPage: NextPage = () => {
  /* REFS */

  /* STATES */

  /* HOOKS */
    
  const router = useRouter()

  //const { logout } = useFirebaseAuth()

  useEffect(() => {
    const handleLogout = async () => {
      try {
        //await logout()
        router.push('/')
      } catch (error) {
        toast.error('Can not be logout')
      }
    }

    handleLogout()
  }, [])

  /* METHODS */

  /* HANDLERS */

  return <p>Logging out...</p>
}

export default LogoutPage
