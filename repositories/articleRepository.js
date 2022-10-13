import fs from 'fs'
const fsPromises = fs.promises


export async function getArticles() {
    const filenames = await fsPromises.readdir(process.cwd() + '/pages/articles')
    const getMeta = async filename => {
        const {meta} = await import(`../pages/articles/${filename}`)

        return {...meta, filename}
    }

    const metas = await Promise.all(filenames.map(filename => getMeta(filename)))

    // Sort by last published
    return metas.sort((a, b) => {
        return b.publishedAt - a.publishedAt
    }).map(meta => {
        return {
            ...meta,
            publishedAt: meta.publishedAt,
            link: `articles/${meta.filename.replace('.mdx', '')}`
        }
    })
}
