import Head from 'next/head'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import ALink from '../components/a-link'
import ArticlesContainer from '../components/index/articles-container'
import { getArticles } from '../repositories/articleRepository'

export async function getStaticProps() {
    return {
        props: {
            articles: await getArticles(),
        },
    }
}

export default function Home({ articles }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{"Einenlum's blog"}</title>
                </Head>

                <ArticlesContainer articles={articles}></ArticlesContainer>
            </Layout>
        </>
    )
}
