import ArticleLink from "./article-link"

export default function ArticleElement({article}) {
    return (
        <>
        <div className="mt-8 mb-3">
            <ArticleLink href={article.link}>{article.articleTitle}</ArticleLink>
            <p className="text-sm justify-end text-gray-700 dark:text-gray-400">{article.publishedAt}</p>
            <p className="ml-4 py-4 text-gray-800 dark:text-gray-300">{article.description}</p>
        </div>

        {/* <div className="border-gray-300 dark:border-gray-500 border-b-2 h-2 w-20 mx-auto sm:mx-20 border-dotted"></div>*/}
        </>
    )
}
