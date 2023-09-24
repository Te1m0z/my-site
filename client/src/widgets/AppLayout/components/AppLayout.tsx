import type { FC, ReactNode } from 'react'
import AppHeader from '../../AppHeader/components/AppHeader'
import AppFooter from '../../AppFooter/components/AppFooter'
import * as s from '../styles/AppLayoutStyles'

interface IAppLayout {
  children: ReactNode
}

const AppLayout: FC<IAppLayout> = ({ children }) => {
  /* REFS */

  /* STATES */

  /* HOOKS */

  /* METHODS */

  /* HANDLERS */

  return (
    <>
      <AppHeader />
      <s.Main>
        <div className='container'>{children}</div>
      </s.Main>
      <AppFooter />
    </>
  )
}

export default AppLayout
