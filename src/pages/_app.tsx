import { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/App.scss'

import '../data'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Prototipo</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and React-bootstrap sass"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
