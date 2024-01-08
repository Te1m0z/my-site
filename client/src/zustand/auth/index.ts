import { create } from 'zustand'

type State = {
  isAuth: boolean
  login: string | null
  token: string | null
}

type Actions = {
  // increment: (qty: number) => void
  // decrement: (qty: number) => void
}

export const useAuthStore = create<State & Actions>((set) => ({
  isAuth: false,
  login: null,
  token: null
}))
