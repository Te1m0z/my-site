import { useState, createContext, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { setCookie } from 'cookies-next'
import { DEFAULT_THEME, useThemeDetector } from '@/shared'
import { type TToggleTheme } from '@/widgets/AppHeader/components/ThemeToggler'

interface AuthState {
  isAuth: boolean
  login: string | null
  token: string | null
}

export const AuthContext = createContext<AuthState>({
  isAuth: false,
  login: null,
  token: null
})

export const AuthProvider = (props: IThemeProviderProps) => {
  const { children, theme } = props
  const systemTheme = useThemeDetector()
  const initialTheme = theme || DEFAULT_THEME

  const [themeValue, setThemeValue] = useState<TToggleTheme>(initialTheme)

  const setTheme = (value: TToggleTheme) => {
    setThemeValue(value)
    setCookie('theme', value, { maxAge: 60 * 60 * 24 * 30 })
  }

  const themeProviderValue = () => {
    let value = themeValue

    if (themeValue === 'system') {
      value = systemTheme
    }

    return {
      label: themeValue,
      value,
      setTheme
    }
  }

  return (
    <ThemeProvider theme={themeProviderValue}>
      {children}
    </ThemeProvider>
  )
}
