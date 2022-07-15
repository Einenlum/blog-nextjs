import ArticleDate from "./article-date"

export default function ArticleHeader({date, children}) {
    return (
        <div className="mt-10 mb-8 sm:mb-10 xl:mb-14 pl-3 py-6 pl-6 align-bottom border-l-4 border-l-pink-900">
            {children}
            <ArticleDate date={date} />
        </div>
    )
}
