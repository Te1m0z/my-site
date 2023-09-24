import { useState, useMemo, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { setCookie } from 'cookies-next'
import { DEFAULT_THEME, type TAppTheme } from '@/shared'

interface IThemeProviderProps {
  children: ReactNode
  theme: TAppTheme
}

const AppThemeProvider = (props: IThemeProviderProps) => {
  //
  const { children, theme } = props
  //
  const initialTheme = theme || DEFAULT_THEME

  /**
   * Get initial value from local storage or set 'light'
   */
  const [themeValue, setThemeValue] = useState<TAppTheme>(initialTheme)

  /**
   * Функция установки нового значения темы
   * @param value {TMainTheme}
   */
  const setTheme = (value: TAppTheme) => {
    setThemeValue(value)
    setCookie('theme', value, { maxAge: 60 * 60 * 24 * 30 })
  }

  const themeProviderValue = useMemo(() => {
    return {
      value: themeValue,
      setTheme
    }
  }, [themeValue])

  return (
    <ThemeProvider theme={themeProviderValue}>
      {children}
    </ThemeProvider>
  )
}

export {
  AppThemeProvider,
}
