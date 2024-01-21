import { create } from 'zustand'
import * as api from './api'
import type { UserLoginResponse, UserLoginParams } from './types'

type State = {
  isAuth: boolean
  user: {
    id: number
    login: string
    access_token: string
    refresh_token: string
  } | null
}

type Actions = {
  login(data: UserLoginParams): UserLoginResponse,
  setUserData(data: State['user']): void
  setTokens(data: { access_token: string, refresh_token: string }): void
}

export const useAuthStore = create<State & Actions>((set) => ({
  isAuth: false,
  user: null,
  async login(data) {
    const response = await api.login(data)

    if (response.status && response.data) {
      this.setTokens({
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token
      })
    }

    return response
  },
  setUserData(data) {
    set({ user: data, isAuth: true })
  },
  setTokens(data) {
    window.localStorage.setItem('access_token', data.access_token)
    window.localStorage.setItem('refresh_token', data.refresh_token)
  }
}))