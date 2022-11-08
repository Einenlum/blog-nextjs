import { useEffect } from 'react'
import hljs, { LanguageFn } from 'highlight.js'
import php from 'highlight.js/lib/languages/php'
import gherkin from 'highlight.js/lib/languages/gherkin'
import yaml from 'highlight.js/lib/languages/yaml'
import python from 'highlight.js/lib/languages/python'
import toml from 'highlight.js/lib/languages/ini'
import rust from 'highlight.js/lib/languages/rust'

interface MappingInterface {
    [key: string]: LanguageFn
}

const mapping: MappingInterface = {
    'php': php,
    'python': python,
    'gherkin': gherkin,
    'rust': rust,
    'yaml': yaml,
    'yml': yaml,
    'toml': toml
}

export default function WithSyntaxHighlighting({languages, children}: {languages: (keyof MappingInterface)[], children: any}) {
    languages.forEach(language => hljs.registerLanguage(language as string, mapping[language]))
    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <>{children}</>
    )
}
