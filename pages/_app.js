import '../styles/globals.css'
import Layout from '../Components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if(router.pathname == '/'){
    return <Component {...pageProps} />
  } else {
    return <Layout><Component {...pageProps} /></Layout>
  }

}

export default MyApp
