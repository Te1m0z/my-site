import type { AxiosResponse, AxiosError } from 'axios'
import type { BaseHttpError, BaseHttpSuccess } from '@/shared/interfaces/Http'

export interface UserLoginParams {
  login: string
  password: string
  csrf: string
}

export interface UserLoginSuccessData {
  id: number
  login: string
  access_token: string
  refresh_token: string
}



// возможный ответ от сервера

type success = AxiosResponse<BaseHttpSuccess<UserLoginSuccessData>>
type error = AxiosError<BaseHttpError>

function computeResponseType(response: BaseHttpSuccess<UserLoginSuccessData> | BaseHttpError) {
  if (response.status === true) {
    return {
      status: true,
      data: {} as Record<string, string>
    }
  }
  return {
    status: false,
    errors: {} as Record<string, string>
  }
}

// export type UserLoginResponse = Promise<success | error>
// export type UserLoginResponse = Promise<BaseHttpSuccess<UserLoginSuccessData> | BaseHttpError>
export type UserLoginResponse = Promise<ReturnType<typeof computeResponseType>>


// export type BaseHttpResponse<T> = BaseHttpSuccess<T> | BaseHttpError;
