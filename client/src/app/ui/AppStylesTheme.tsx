import { GlobalStylesWithTheme } from '../styles/global'
import type { FC } from 'react'

/**
 * Компонент динамичных стилей сайта
 * в которых используется значение темы
 * @returns {FC}
 */
const AppStylesTheme: FC = () => {
  return (
    <>
      <GlobalStylesWithTheme />
    </>
  )
}

export {
  AppStylesTheme,
}
