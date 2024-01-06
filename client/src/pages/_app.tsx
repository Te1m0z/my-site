import { getCookie } from 'cookies-next'
import {
  AppThemeProvider,
  ViewportProvider,
  AppStylesTheme,
  AppStyles,
} from '@/app'
import type { AppProps, AppContext } from 'next/app'
import type { ReactNode } from 'react'
import { AppLayout } from '@/widgets'
import { type TToggleTheme } from '@/widgets/AppHeader/components/ThemeToggler'

type IServerSideProps = {
  theme: TToggleTheme;
};

type TMyApp = AppProps & IServerSideProps;

const MyApp = ({ Component, pageProps, theme }: TMyApp): ReactNode => {
  return (
    <>
      <AppStyles />
      <ViewportProvider>
        <AppThemeProvider theme={theme}>
          <AppStylesTheme />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
        </AppThemeProvider>
      </ViewportProvider>
    </>
  )
}

MyApp.getInitialProps = ({ ctx }: AppContext): IServerSideProps => {
  return {
    theme: getCookie('theme', ctx) as TToggleTheme,
  }
}

export default MyApp
