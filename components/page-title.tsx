export default function PageTitle({children}: {children: any}) {
    return (
        <h1 className="text-lg md:text-xl font-sans tracking-wide md:tracking-wider">{children}</h1>
    )
}
