import { getCookie } from 'cookies-next'
import {
  AppThemeProvider,
  ViewportProvider,
  AppStylesTheme,
  AppStyles,
} from '@/app'
import { AppLayout } from '@/widgets'
import { DEFAULT_THEME } from '@/shared'
import type { AppProps, AppContext } from 'next/app'
import type { ReactNode } from 'react'
import type { TAppTheme } from '@/shared'

type IServerSideProps = {
  theme: TAppTheme;
};

type TMyApp = AppProps & IServerSideProps;

const MyApp = ({ Component, pageProps, theme }: TMyApp): ReactNode => {
  return (
    // <FirebaseAuthProvider>
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
    // </FirebaseAuthProvider>
  )
}

MyApp.getInitialProps = ({ ctx }: AppContext): IServerSideProps => {
  return {
    theme: (getCookie('theme', ctx) as TAppTheme) || DEFAULT_THEME,
  }
}

export default MyApp
