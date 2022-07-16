import Image from 'next/image'

export default function NonSourcedImage({src, alt}) {
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
