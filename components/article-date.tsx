interface Props {
    date: Date
}

export default function ArticleDate({date}: Props) {
    return (
        <p className="justify-end mt-4 text-gray-700 dark:text-gray-400">{date.toDateString()}</p>
    )
}
