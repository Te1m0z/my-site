import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import('@/app/config/axios')

/* COMPONENTS */
import { AppToaster } from '@/app'
import type {
  DocumentContext, DocumentInitialProps,
} from 'next/document'

type TMyDocument = DocumentInitialProps | Promise<DocumentInitialProps>

const MyDocument = (): JSX.Element => {
  return (
    <Html lang='ru'>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <AppToaster />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = (): TMyDocument => {
      return originalRenderPage({
        enhanceApp: (App) => {
          return (props): JSX.Element => sheet.collectStyles(<App {...props} />)
        },
      })
    }

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [initialProps.styles, sheet.getStyleElement()],
    }
  } finally {
    sheet.seal()
  }
}

export default MyDocument
