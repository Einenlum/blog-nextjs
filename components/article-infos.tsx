import Head from 'next/head';
import ArticleHeader from './article-header';
import PageTitle from './page-title';
import Meta from '../types/Meta';

export default function ArticleInfos({meta}: {meta: Meta}) {
    return (
        <>
            <Head>
                <title>{meta.articleTitle}</title>
            </Head>
            <ArticleHeader date={meta.publishedAt}>
                <PageTitle>{meta.articleTitle}</PageTitle>
            </ArticleHeader>
        </>
    )
}
