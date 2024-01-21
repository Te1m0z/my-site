import Link from 'next/link'
import type { FC } from 'react'
import ThemeToggler from './ThemeToggler'
import { useAuthStore } from '@/zustand'

/* STYLES */
import * as s from '../styles/AppHeaderStyles'

const AppHeader: FC = (): JSX.Element => {

  const isUserAuth = useAuthStore((state) => state.isAuth)

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
              {isUserAuth && (
                <li>
                  <Link href="/admin">admin</Link>
                </li>
              )}
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
