import { useState, useMemo, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { setCookie } from 'cookies-next'
import { DEFAULT_THEME, useThemeDetector } from '@/shared'
import { type TToggleTheme } from '@/widgets/AppHeader/components/ThemeToggler'

interface IThemeProviderProps {
  children: ReactNode
  theme?: TToggleTheme
}

const AppThemeProvider = (props: IThemeProviderProps) => {
  // theme - из кук
  const { children, theme } = props
  //
  const systemTheme = useThemeDetector()
  //
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

export {
  AppThemeProvider,
}
