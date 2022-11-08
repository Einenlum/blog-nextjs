import Head from 'next/head'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import ALink from '../components/a-link'
import ArticlesContainer from '../components/index/articles-container'
import { getArticles, ArticleInterface } from '../repositories/articleRepository'
import { generateRssFeed, writeFeed } from '../repositories/feedGenerator'

export async function getStaticProps() {
    const articles = await getArticles()
    
    const articlesWithStringDate = articles.map(
        article => ({...article, publishedAt: article.publishedAt.toDateString()})
    )

    const feed = await generateRssFeed(articles)
    writeFeed(feed)

    return {
        props: {
            articles: articlesWithStringDate,
        },
    }
}

export default function Home({ articles }: { articles: ArticleInterface[] }) {
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
