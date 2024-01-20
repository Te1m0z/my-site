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
}

export const useAuthStore = create<State & Actions>((set) => ({
  isAuth: false,
  user: null,
  async login(data) {
    return api.login(data)
  },
  setUserData(data) {
    set({ user: data, isAuth: true })
  }
}))