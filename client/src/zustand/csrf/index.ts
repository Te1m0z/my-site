import { create } from 'zustand'
import * as api from './api'
import type { FetchCsrfSuccessResponse } from './types'

type State = {

}

type Actions = {
  fetchCsrfToken(): Promise<FetchCsrfSuccessResponse>
}

export const useCsrfStore = create<State & Actions>(() => ({
  async fetchCsrfToken() {
    const [error, response] = await api.fetchCsrfToken()
    if (response?.data?.token) {
      return response.data.token
    }
    return error
  }
}))
