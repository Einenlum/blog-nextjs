import Image from 'next/image'

interface Props {
    src: string,
    alt: string
}

export default function NonSourcedImage({src, alt}: Props) {
    return (
        <div className="my-10">
            <div className="">
                <Image
                    src={src}
                    alt={alt}
                    layout="intrinsic"
                    objectFit="contain"
                    width={700}
                    height={400}
                />
            </div>
        </div>
    )
}
