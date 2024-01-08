import axios from 'axios'

const LOGIN_PATH = 'user/login'


export const login = (params: SignInParams, locale: AppLocale): UserApiResponse => {
  const timestamp = Date.now()
  const url = `${SIGN_IN_PATH}?${timestamp}&language=${locale}`

  return to(axios.post(url, params))
}
