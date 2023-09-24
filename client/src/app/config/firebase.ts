const config = {
  apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGEING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
} as const

type Config = typeof config

export function getFirebaseConfig(): Config {
  // Если нет хотябы одного поля - выбрасываем ошибку
  if (Object.values(config).some((value) => !value) && !window) 
    throw new Error('Firebase config is not set or incomplete')
  

  return config
}
