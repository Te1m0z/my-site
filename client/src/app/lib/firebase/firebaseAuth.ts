//import { getAuth, signInWithCustomToken } from 'firebase/auth'
//import app from './firebaseApp'

const auth = getAuth(app)

const isAuth = () => {
  auth.currentUser?.getIdToken()
}

export default auth