import Head from 'next/head'
function Blog( {title, description}) {

    return (
        <>
        <Head>
             <title>{title}</title>
             <meta name='description' content='description'></meta>
        </Head>
        <h1 className='content'>
            Env User {process.env.DB_USER} and Analytics Id {process.env.NEXT_PUBLIC_ANALYTICS_ID} 
        </h1>
        </>
    )
}

export default Blog

// export async function getStaticProps() {
    

//     return {
//         props: {
//             title: 'Article Title',
//             description: 'Article description',
//         },
//     }
// }

// export async function getStaticPaths() {
    

//     return {
//         paths: [{
//             params: { blogId: '1'}
//         }],
//         fallback: false,
//     }
// }

export async function getServerSideProps() {
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

console.log(`Connectig to Database with username ${user} and password ${password}`)

    return {
        props: {
            title: 'Article Title',
            description: 'Article description',
        }
    }
}