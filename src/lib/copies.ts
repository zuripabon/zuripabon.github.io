import es from './locales/es'
import en from './locales/en'

export function translate(key: string, locale='en'){

    if(locale === 'es'){
        return es[key]
    }

    return en[key]
}