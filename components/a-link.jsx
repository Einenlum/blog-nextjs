import Link from 'next/link';

export default function ALink({href, children}) {
    return (
        <Link href={href}>
            <a className="text-pink-900 hover:text-pink-700 hover:dark:text-blue-400 dark:text-blue-200 transition ease-in-out delay-150">{children}</a>
        </Link>
    )
}
