import axios from 'axios'
import to from 'await-to-js'
import type { FetchCsrfResponse } from './types'

const FETCH_CSRF_PATH = 'csrf'

export const fetchCsrfToken = (): FetchCsrfResponse => {
  return to(axios.post(FETCH_CSRF_PATH))
}
