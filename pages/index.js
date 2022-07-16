import fs from 'fs'
import Head from 'next/head'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import ALink from '../components/a-link'
import ArticlesContainer from '../components/index/articles-container'
const fsPromises = fs.promises

async function getArticles() {
    const filenames = await fsPromises.readdir(process.cwd() + '/pages/articles')

    const getMeta = async filename => {
        const {meta} = await import(`./articles/${filename}`)

        return {...meta, filename}
    }

    const metas = await Promise.all(filenames.map(filename => getMeta(filename)))

    // Sort by last published
    return metas.sort((a, b) => {
        return b.publishedAt - a.publishedAt
    }).map(meta => {
        return {
            ...meta,
            publishedAt: meta.publishedAt.toDateString(),
            link: `articles/${meta.filename.replace('.mdx', '')}`
        }
    })
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
                    <title>{"Einenlum's blog"}</title>
                </Head>

                <ArticlesContainer articles={articles}></ArticlesContainer>
            </Layout>
        </>
    )
}
