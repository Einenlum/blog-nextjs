import HeaderElement from './header-element'
import { Element } from './header-element'

export default function Header() {
    const elements: Element[] = [
        { text: 'Blog', path: '/' },
        { text: 'About', path: '/about' },
    ]

    return <>
        <header className="mb-14 md:mb-20">
            <h1 className="text-right md:my-12 xl:my-16 mb-4 mt-10 text-xl md:text-2xl font-mono">Einenlum<span className="text-pink-700 font-bold">.</span></h1>
            <nav className="my-6 md:my-12 md:pr-0 pr-2">
                <ul className="flex justify-end">
                    {elements.map((element, key) => <HeaderElement key={key} elem={element} />)}
                </ul>
            </nav>
        </header>
    </>
}
