export interface BaseHttpSuccess<T> {
  status: boolean
  data: T
}

export interface BaseHttpError {
  status: boolean
  errors?: {
    [key: string]: string
  }
}
