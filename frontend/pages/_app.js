import '../styles/globalStyles'
import GlobalStyle from '../styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <GlobalStyle/>
  </>
)
}

export default MyApp