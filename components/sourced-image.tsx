import Image from 'next/image'
import ImageSource from './image-source'

interface Props {
    src: string,
    author: string,
    imageName: string,
    license: string,
    source: string
    alt: string
}

export default function SourcedImage({src, author, imageName, license, source, alt}: Props) {
    return (
        <div className="my-10 mx-auto">
            <div className="text-center">
                <Image
                    src={src}
                    alt={alt}
                    layout="intrinsic"
                    objectFit="contain"
                    width={700}
                    height={400}
                />
            </div>
            <ImageSource author={author} imageName={imageName} license={license} source={source}></ImageSource>
        </div>
    )
}
