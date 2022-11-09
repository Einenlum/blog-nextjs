import ALink from "./a-link"

export default function MastodonLink({url, text}: {url: string, text: string}) {
    return (
        <ALink rel="me" href={url} >{text}</ALink>
    )
}
