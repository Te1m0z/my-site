import type { FC } from 'react'
import { useEffect } from 'react'
import type { SubmitHandler as SHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/zustand/csrf'

// Components
import { Input } from '@/shared'
import Button from '@/shared/ui/Button'

type TLoginInputs = {
  email: string
  password: string
}

// Styles
import * as s from './style'

// const notifications = {
//   success: {
//     login: 'You succesfully logged in',
//   },
//   error: {
//     login: 'Wrong login or password',
//     some: 'Somethin went wrong',
//     email: {
//       empty: 'Email can not be empty',
//     },
//     password: {
//       empty: 'Password can not be empty',
//     },
//     code: 'Wrong code',
//   },
// }

const LoginForm: FC = (): JSX.Element => {

  const { fetchCsrfToken } = useAuthStore()

  /* REFS */

  /* STATES */

  /* HOOKS */

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TLoginInputs>()

  useEffect(() => {
    (async () => {
      const token = await fetchCsrfToken()
      console.log(token)
    })()
  })

  /* METHODS */

  /* HANDLERS */

  const loginFormSubmit: SHandler<TLoginInputs> = async (data) => {
    //await loginWithEmailAndPassword(data)
  }

  return (
    <div className='login-page'>
      <s.Form onSubmit={handleSubmit(loginFormSubmit)}>
        <s.FormTitle>Welcome</s.FormTitle>
        <s.InputContainer>
          <Input
            type={'email'}
            name={'email'}
            label={'Email'}
            control={control}
            rules={{ required: true }}
          />
        </s.InputContainer>
        <s.InputContainer>
          <Input
            type={'password'}
            name={'password'}
            label={'Password'}
            control={control}
            rules={{
              required: true,
              minLength: 1,
            }}
          />
        </s.InputContainer>
        <Button type='submit'>Log In</Button>
        {/* Ошибки */}
        {errors.email && <s.FormError>{errors.email.message}</s.FormError>}
        {errors.password && (
          <s.FormError>{errors.password.message}</s.FormError>
        )}
      </s.Form>
    </div>
  )
}

export default LoginForm
