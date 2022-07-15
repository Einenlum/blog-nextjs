import ArticleLink from "./article-link"

export default function ArticleElement({article}) {
    return (
        <div className="my-4">
            <ArticleLink href={article.link}>{article.articleTitle}</ArticleLink>
            <p className="justify-end italic text-gray-700 dark:text-gray-400">{article.publishedAt}</p>
        </div>
    )
}
