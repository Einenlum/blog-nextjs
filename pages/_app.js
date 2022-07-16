import '../styles/globals.css'
import 'highlight.js/styles/default.css';

import { MDXProvider } from '@mdx-js/react'

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

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
  </MDXProvider>
  )
}

export default MyApp
