import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />) 
  }

  return (
    <> 
    <Header />
    <Component {...pageProps} />
    <Footer/> 
    </>
  )
}

export default MyApp
