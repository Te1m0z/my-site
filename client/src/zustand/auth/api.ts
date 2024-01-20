import axios from 'axios'
import type { UserLoginParams, UserLoginResponse } from './types'

const LOGIN_PATH = 'user/login'

export async function login(params: UserLoginParams): Promise<UserLoginResponse> {
  return axios
    .post(LOGIN_PATH, params)
    .then((response) => response.data)
    .catch((error) => error?.response?.data)
}
