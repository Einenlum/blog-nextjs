import ArticleLink from "./article-link"

export default function ArticleElement({article}) {
    return (
        <div className="my-8">
            <ArticleLink href={article.link}>{article.articleTitle}</ArticleLink>
            <p className="text-sm justify-end text-gray-700 dark:text-gray-400">{article.publishedAt}</p>
        </div>
    )
}
