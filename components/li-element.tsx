export default function LiElement({children}: {children: any}) {
    return (
        <li className="ml-6 list-disc my-2 md:text-lg">{children}</li>
    )
}
