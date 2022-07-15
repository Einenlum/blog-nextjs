import HeaderElement from './header-element'

export default function Header() {
    const elements = [
        { text: 'Blog', path: '/' },
        { text: 'Contact', path: '/contact' },
        { text: 'About', path: '/about' },
    ]

    return <>
        <header>
            <h1 className="text-right md:my-12 mb-4 mt-10 text-xl font-mono">Einenlum<span className="text-pink-700 font-bold">.</span></h1>
            <nav className="my-6 md:my-12 md:pr-0 pr-2">
                <ul className="flex justify-end">
                    {elements.map((element, key) => <HeaderElement key={key} elem={element} />)}
                </ul>
            </nav>
        </header>
    </>
}
