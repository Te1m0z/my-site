import { AxiosResponse, AxiosError } from 'axios'

export interface FetchCsrfResponseModel {
  token: string
  expires: number
}

export type FetchError = AxiosError | null
export type FetchCsrfSuccessResponse = string | FetchError
export type FetchCsrfResponse = Promise<[FetchError, AxiosResponse<FetchCsrfResponseModel> | undefined]>