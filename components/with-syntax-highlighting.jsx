import { useEffect } from 'react'
import hljs from 'highlight.js'
import php from 'highlight.js/lib/languages/php'
import gherkin from 'highlight.js/lib/languages/gherkin'
import yaml from 'highlight.js/lib/languages/yaml'

const mapping = {
    'php': php,
    'gherkin': gherkin,
    'yaml': yaml,
    'yml': yaml
}

export default function WithSyntaxHighlighting({languages, children}) {
    languages.forEach(language => hljs.registerLanguage(language, mapping[language]))
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <>{children}</>
    )
}
