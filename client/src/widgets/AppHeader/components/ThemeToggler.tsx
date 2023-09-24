import { type FC, useState } from 'react'
import { useTheme } from 'styled-components'
import { type TAppTheme } from '@/shared'

/* STYLES */
import * as s from '../styles/ThemeTogglerStyles'

const ThemeToggler: FC = (): JSX.Element => {
  /* REFS */
  const theme = useTheme()

  /* STATES */

  /* HOOKS */

  /* METHODS */

  /* HANDLERS */
  function toggleTheme() {
    //
    //const val = theme.value === 'light' ? 'dark' : 'light'
    //
    theme.setTheme(val)
  }

  return (
    <s.ThemeToggler>
      <button onClick={toggleTheme}>
        <div>light</div>
        <div>dark</div>
      </button>
    </s.ThemeToggler>
  )
}

export {
    ThemeToggler
}
