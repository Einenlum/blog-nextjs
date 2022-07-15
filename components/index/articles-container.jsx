import ArticleElement from "./article-element"

export default function ArticlesContainer({articles}) {
    return (
        <div className="my-8">
            {articles.map(article => <ArticleElement article={article} key={article.link} />)}
        </div>
    )
}
