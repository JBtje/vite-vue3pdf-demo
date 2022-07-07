import {createI18n} from 'vue-i18n'

import de from './lang/de'
import en from './lang/en'
import nl from './lang/nl'

import {restoreLanguage} from './helpers/RestoreLanguage'

export default createI18n( {
    locale:         restoreLanguage(),
    fallbackLocale: 'en',

    inheritLocale: true,
    missingWarn:   true,
    fallbackWarn:  false,
    // fallbackRoot:    true,
    // warnHtmlMessage: true,
    globalInjection: true,

    messages: {
        de,
        en,
        nl,
    },
} )
