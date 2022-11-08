import fs from 'fs'
import Meta from '../types/Meta'
const fsPromises = fs.promises

interface MetaWithFilename extends Meta {
    filename: string
}

export interface ArticleInterface extends MetaWithFilename {
    link: string
}

export async function getArticles(): Promise<ArticleInterface[]> {
    const filenames = await fsPromises.readdir(process.cwd() + '/pages/articles')
    const getMeta = async (filename: string) => {
        const {meta}: {meta: Meta} = await import(`../pages/articles/${filename}`)

        return {...meta, filename}
    }

    const metas: MetaWithFilename[] = await Promise.all(filenames.map(filename => getMeta(filename)))

    // Sort by last published
    return metas.sort((a, b) => {
        return b.publishedAt.getTime() - a.publishedAt.getTime()
    }).map(meta => {
        return {
            ...meta,
            publishedAt: meta.publishedAt,
            link: `articles/${meta.filename.replace('.mdx', '')}`
        }
    })
}
