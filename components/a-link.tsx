import Link from 'next/link';

interface Props {
    href: string,
    children: any
}

export default function ALink({href, children}: Props) {
    return (
        <Link href={href}>
            <a className="text-pink-900 hover:text-pink-700  dark:text-indigo-200 transition ease-in-out delay-150">{children}</a>
        </Link>
    )
}
