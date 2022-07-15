import fs from 'fs'
import Head from 'next/head'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import ALink from '../components/a-link'

async function getArticles() {
    const filenames = fs.readdirSync(process.cwd() + '/pages/articles')

    const getMeta = async filename => {
        const {meta} = await import(`./articles/${filename}`)

        return {...meta, filename}
    }

    const metas = await Promise.all(filenames.map(filename => getMeta(filename)))

    const sortedMetas = metas.sort((a, b) => {
        return a.publishedAt - b.publishedAt
    })
    const displayableMetas = sortedMetas.map(meta => {
        return {
            ...meta,
            publishedAt: meta.publishedAt.toDateString(),
            link: meta.filename.replace('.mdx', '')
        }
    })

    return displayableMetas
}

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
                    <title>Einenlum's blog</title>
                </Head>

                <PageTitle>Einenlum's blog</PageTitle>

                {articles.map((article) => (
                    <p key={article.filename}><ALink href={article.link}>{article.articleTitle}</ALink></p>
                ))}
            </Layout>
        </>
    )
}
