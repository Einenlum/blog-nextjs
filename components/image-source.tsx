import ALink from './a-link';

function getLicense(license: string|undefined): string {
    if (!license) {
        return '';
    }

    return '(license ' + license + ')';
}

interface Props {
    author: string,
    imageName: string,
    license?: string,
    source: string
}

export default function ImageSource({author, imageName, license, source}: Props) {
    return  (
        <div className="max-w-sm mx-auto text-sm lg:text-base">
            {imageName
            ? <p className="text-center mx-auto">
                <span className="italic">
                    <ALink href={source}>{imageName}</ALink>
                </span> by {author} {getLicense(license)}
            </p>
            : <p className="mx-auto text-center">Image by <ALink href={source}>{author}</ALink> {getLicense(license)}</p>}
        </div>
    )
}
