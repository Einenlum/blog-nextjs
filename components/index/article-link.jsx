import Link from 'next/link';

export default function ArticleLink({href, children}) {
    return (
        <h2 className="text-base font-semibold md:text-lg">
        <Link href={href}>
            <a className="dark:hover:text-pink-600 hover:text-pink-900 transition ease-in-out">{children}</a>
        </Link>
        </h2>
    )
}
