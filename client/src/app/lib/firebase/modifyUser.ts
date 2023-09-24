import type { User as IFirebaseUser } from 'firebase/auth'
import type User from '../../interfaces/User'

const modifyUser = (user: IFirebaseUser): User => {
  return {
    id: user.uid,
    name: user.displayName || user.email || user.uid,
    photoURL: user.photoURL,
  }
}

export default modifyUser
