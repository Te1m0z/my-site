import { getApp, getApps, initializeApp } from 'firebase/app'

// Данные firebase
import { getFirebaseConfig } from '~/src/app/config/firebase'

const app = !getApps().length ? initializeApp(getFirebaseConfig()) : getApp()

export default app