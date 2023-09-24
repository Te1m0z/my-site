import ResetStyles from '../styles/reset'
import GlobalStyles from '../styles/global'
import type { FC } from 'react'

/**
 * Компонент статичных стилей сайта
 * @returns {FC}
 */
const AppStyles: FC = () => {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
    </>
  )
}

export {
  AppStyles,
}
