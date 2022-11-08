import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className="dark:bg-neutral-900 dark:text-amber-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
