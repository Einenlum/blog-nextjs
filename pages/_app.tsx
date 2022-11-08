import '../styles/globals.css'
import 'highlight.js/styles/default.css';

import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

import PageTitle from '../components/page-title'
import LiElement from '../components/li-element'
import ALink from '../components/a-link'
import Subtitle from '../components/subtitle'
import H3 from '../components/h3'
import P from '../components/p'
import Blockquote from '../components/blockquote'
import Pre from '../components/pre'

const components = {
  h1: PageTitle,
  h2: Subtitle,
  h3: H3,
  li: LiElement,
  a: ALink,
  p: P,
  blockquote: Blockquote,
  pre: Pre
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Not sure how "any" makes it work here, but it's the only thing I found.
    // (don't worry, I'm an expert programmer. *coughs*)
    <MDXProvider components={components as any}>
      <Component {...pageProps} />
  </MDXProvider>
  )
}

export default MyApp
