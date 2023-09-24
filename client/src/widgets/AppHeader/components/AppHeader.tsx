import Link from 'next/link'
import type { FC } from 'react'
import { ThemeToggler } from './ThemeToggler'

/* STYLES */
import * as s from '../styles/AppHeaderStyles'

const AppHeader: FC = (): JSX.Element => {
  /* REFS */

  /* STATES */

  /* HOOKS */

  /* METHODS */

  /* HANDLERS */

  return (
    <s.Header>
      <div className='container'>
        <s.Inner>
          <s.LogoBlock>
            <Link href='/'>Te1m0z</Link>
          </s.LogoBlock>
          <s.MenuBlock>
            <ul>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link href='/about'>About me</Link>
              </li>
            </ul>
          </s.MenuBlock>
          <s.ThemeBlock>
            <ThemeToggler />
          </s.ThemeBlock>
        </s.Inner>
      </div>
    </s.Header>
  )
}

export default AppHeader
