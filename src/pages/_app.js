import '../styles/globals.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}