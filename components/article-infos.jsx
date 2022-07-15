import Head from 'next/head';
import ArticleHeader from './article-header';
import PageTitle from './page-title';

export default function ArticleInfos({meta}) {
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
