import Link from 'next/link';

interface Props {
    href: string,
    children: any,
    rel?: string
}

export default function ALink({href, rel, children}: Props) {
    return (
        <Link href={href}>
            <a
                className="text-pink-900 hover:text-pink-700  dark:text-indigo-200 transition ease-in-out delay-150"
                rel={rel}
            >
                {children}
            </a>
        </Link>
    )
}
