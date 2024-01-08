import { AxiosResponse, AxiosError } from 'axios'

export interface FetchCsrfResponseModel {
  token: string
  expires: number
}

export type FetchError = AxiosError | null
export type FetchCsrfSuccessResponse =
  | AxiosResponse<FetchCsrfResponseModel>
  | undefined
export type FetchCsrfResponse = Promise<[FetchError, FetchCsrfSuccessResponse]>