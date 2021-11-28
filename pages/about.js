import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import Head from 'next/head'

function About() {
    return <h1 className='content'>About</h1>
}

export default About

About.getLayout = function PageLayout(page) {
    return (
        <> 
        <Head>
            <title>About Learning Next</title>
            <meta name='description' content='Free tutorials for web development'/>
        </Head>
        {page}
        <Footer />
        </>
    )
}