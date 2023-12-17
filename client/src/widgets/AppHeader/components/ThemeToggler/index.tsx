import { type FC, useState } from 'react'
import { useTheme } from 'styled-components'
import { type TAppTheme } from '@/shared'
import { Icon } from '@/shared/ui/Icon'

/* STYLES */
import * as s from './style'

const ThemeToggler: FC = (): JSX.Element => {
  /* REFS */
  const theme = useTheme()

  /* STATES */

  /* HOOKS */

  /* METHODS */

  /* HANDLERS */
  function toggleTheme() {
    //
    const val = theme.value === 'light' ? 'dark' : 'light'
    //
    theme.setTheme(val)
  }

  return (
    <s.ThemeToggler>
      <Icon id="sun" />
      <Icon id="moon" />
      <div>light</div>
      <div>dark</div>
    </s.ThemeToggler>
  )
}

export default ThemeToggler
