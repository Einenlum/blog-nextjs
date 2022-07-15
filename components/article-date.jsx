export default function ArticleDate({date}) {
    return (
        <p className="justify-end italic mt-4 text-gray-700 dark:text-gray-400">{date.toDateString()}</p>
    )
}
