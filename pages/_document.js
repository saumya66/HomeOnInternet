import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="no-js">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..600;1,6..72,200..600&family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body data-mode="home">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
