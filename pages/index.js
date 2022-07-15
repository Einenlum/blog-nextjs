import Head from 'next/head'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'

async function getArticles(pageIndex) {
    return ['a', 'b']
}

export async function getStaticProps() {
    return {
        props: {
            articles: await getArticles(0),
        },
    }
}

export default function Home({ articles }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Einenlum's blog</title>
                </Head>
                {articles.map((article) => (
                    <p key={article}>{article}</p>
                ))}
                <PageTitle>Einenlum's blog</PageTitle>
            </Layout>
        </>
    )
}
