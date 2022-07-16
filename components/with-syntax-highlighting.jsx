import { useEffect } from 'react'
import hljs from 'highlight.js'
import php from 'highlight.js/lib/languages/php'
import gherkin from 'highlight.js/lib/languages/gherkin'
import yaml from 'highlight.js/lib/languages/yaml'

hljs.registerLanguage('php', php)
hljs.registerLanguage('gherkin', gherkin)
hljs.registerLanguage('yaml', yaml)
hljs.registerLanguage('yml', yaml)

export default function WithSyntaxHighlighting({children}) {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <>{children}</>
    )
}
