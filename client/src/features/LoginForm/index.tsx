import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useCsrfStore, useAuthStore } from '@/zustand'

// Components
import { Input } from '@/shared'
import Button from '@/shared/ui/Button'

// Styles
import * as s from './style'
import { UserLoginSuccessData } from '@/zustand/auth/types.ts'

type TLoginInputs = {
  login: string
  password: string
  csrf: string
}

type LoginFormProps = {
  initialCsrfToken: string;
}

const LoginForm: FC<LoginFormProps> = ({ initialCsrfToken }): JSX.Element => {

  const { fetchCsrfToken } = useCsrfStore()
  const { login, setUserData } = useAuthStore()

  const [csrfToken, setCsrfToken] = useState(initialCsrfToken)
  const [formMessage, setFormMessage] = useState('')

  const {
    handleSubmit,
    control,
    setValue,
    setError,
    watch,
    clearErrors,
    reset
  } = useForm<TLoginInputs>()

  useEffect(() => {
    (async () => {
      if (!csrfToken) {
        const token = (await fetchCsrfToken()) as string
        setCsrfToken(token)
        setValue('csrf', token)
      }
    })()

    const formWatcher = watch((_, { name }) => {
      if (formMessage && (name === 'login' || name === 'password')) {
        setFormMessage('')
        clearErrors()
      }
    })

    return () => {
      formWatcher.unsubscribe()
    }
  }, [])

  async function loginFormSubmit(params: TLoginInputs) {
    const data = await login(params)
    //
    if (data.status && data.data) {
      setUserData((data.data as unknown as UserLoginSuccessData))
      reset()
      return toast.success('you successfully logged in')
    }
    //
    if (!data.status && !data.errors) {
      return toast.error('something went wrong')
    }
    // csrf error
    if (data.errors && 'csrf' in data.errors) {
      return toast.error('some went wrong due to csrf')
    }
    // login or password error
    if (data.errors && ('login' in data.errors || 'password' in data.errors)) {
      setFormMessage('Login or Password incorrect')
    }
    //
    for (const field in data!.errors) {
      setError((field as keyof TLoginInputs), {
        type: 'manual',
        message: data.errors[field],
      })
    }
  }

  return (
    <div className='login-page'>
      <s.Form onSubmit={handleSubmit(loginFormSubmit)}>
        <input type="hidden" name="csrf" defaultValue={csrfToken} />
        <s.FormTitle>Welcome</s.FormTitle>
        <s.InputContainer>
          <Input
            name={'login'}
            label={'Login'}
            control={control}
            rules={{ required: true }}
            onInput={() => setFormMessage('')}
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
            onInput={() => setFormMessage('')}
          />
        </s.InputContainer>
        <Button type='submit'>Log In</Button>
        {formMessage.length > 0 && formMessage}
      </s.Form>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { fetchCsrfToken } = useCsrfStore();
  const token = await fetchCsrfToken();

  return {
    props: {
      initialCsrfToken: token,
    },
  };
};

export default LoginForm
