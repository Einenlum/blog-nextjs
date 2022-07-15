import Link from 'next/link';
import { useRouter } from 'next/router';

const isActive = (link) => {
    const router = useRouter();

    return router.asPath === link
}

function ActiveElement({text}) {
    return (
        <li className="mx-3 md:mx-6 last:mr-0">
            <span className="transition ease-in-out delay-150 text-gray-400">
                {text}
            </span>
        </li>
    )
}

function InactiveElement({text, path}) {
    return (
        <li className="mx-3 md:mx-6 last:mr-0 border-b-2 pb-1 border-dotted dark:border-gray-600">
            <Link href={path}>
                <a className="transition ease-in-out delay-150 hover:text-pink-700 hover:dark:text-blue-400">
                    {text}
                </a>
            </Link>
        </li>
    )
}

export default function HeaderElement({ elem }) {
    const { text, path } = elem

    return isActive(path) ? <ActiveElement text={text} path={path} /> : <InactiveElement text={text} path={path} />
}
