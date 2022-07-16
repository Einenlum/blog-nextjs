import ALink from './a-link.jsx';

function getLicense(license) {
    if (!license) {
        return '';
    }

    return '(license ' + license + ')';
}

export default function ImageSource({author, imageName, license, source}) {
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
