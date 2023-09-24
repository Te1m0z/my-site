import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { FC, ReactNode } from 'react'

interface ILocaleProviderProps {
  children: ReactNode | Array<ReactNode>
  lang: string
}

interface ContextProps {
  readonly locale: string
  readonly setLocale: (locale: string) => void
}

export const LocaleContext = createContext<ContextProps>({
  locale: 'en',
  setLocale: () => null,
})

const LocaleProvider: FC<ILocaleProviderProps> = ({ lang, children }) => {
  /* REFS */

  /* STATES */

  const [locale, setLocale] = useState(lang)

  /* HOOKS */

  // const { query } = useRouter()

  // useEffect(() => {
  //   if (locale !== localStorage.getItem('locale')) {
  //     localStorage.setItem('locale', locale)
  //   }
  // }, [locale])

  // useEffect(() => {
  //   if (
  //     typeof query.lang === 'string' &&
  //     isLocale(query.lang) &&
  //     locale !== query.lang
  //   ) {
  //     setLocale(query.lang)
  //   }
  // }, [query.lang, locale])

  /* METHODS */

  /* HANDLERS */

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
