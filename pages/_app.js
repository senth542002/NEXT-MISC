import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />) 
  }

  return (
    <> 
    <Head>
        <title>Global About Learning Next</title>
        <meta name='description' content='Global Free tutorials for web development'/>
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer/> 
    </>
  )
}

export default MyApp
