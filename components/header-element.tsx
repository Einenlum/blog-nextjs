import Link from 'next/link';
import { useRouter } from 'next/router';

export interface Element {
    text: string,
    path: string
}

interface ActiveElement {
    text: string
}

function ActiveElement({text}: ActiveElement) {
    return (
        <li className="mx-3 md:mx-6 last:mr-0 md:text-lg">
            <span className="transition ease-in-out delay-150 text-gray-400">
                {text}
            </span>
        </li>
    )
}

function InactiveElement({text, path}: Element) {
    return (
        <li className="mx-3 md:mx-6 last:mr-0 border-b-2 pb-1 border-dotted dark:border-gray-600 md:text-lg">
            <Link href={path}>
                <a className="transition ease-in-out delay-150 hover:text-pink-700 hover:dark:text-pink-600">
                    {text}
                </a>
            </Link>
        </li>
    )
}

export default function HeaderElement({elem}: {elem: Element}) {
    const { text, path } = elem
    const router = useRouter();
    const isActive = router.asPath === path

    return isActive ? <ActiveElement text={text} /> : <InactiveElement text={text} path={path} />
}
