import axios from 'axios'

import type {
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios'

axios.defaults.baseURL = process.env.APP_API
axios.defaults.withCredentials = true
// axios.defaults.headers['Accept'] = APPLICATION_JSON
// axios.defaults.headers['Content-Type'] = APPLICATION_JSON

// axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   const authToken = getGetter('user/getAuthToken')

//   if (authToken) {
//     config.headers['Authorization'] = `Bearer ${authToken}`
//   }

//   return config
// })

// axios.interceptors.response.use(
//   (response: AxiosResponse): AxiosResponse => {
//     window.dispatchEvent(new Event('online'))

//     return response
//   },
//   (error: AxiosError): Promise<AxiosError | AxiosRequestConfig> => {
//     if (error?.response?.statusText === 'Unauthorized') {
//       const authToken = getGetter('user/getAuthToken')

//       if (authToken) {
//         callAction('user/resetUser')
//       }
//     }

//     if (error?.message === 'Network Error') {
//       window.dispatchEvent(new Event('offline'))
//     }

//     throw error
//   }
// )
