import {defineConfig} from 'vite'
import laravel        from 'laravel-vite-plugin'
// import path           from 'path'
import vue            from '@vitejs/plugin-vue'
import vueI18n        from '@intlify/vite-plugin-vue-i18n'

export default defineConfig( {
    build:   {
//        minify: false,
    },
    plugins: [
        vue( {
            template: {
                transformAssetUrls: {
                    // The Vue plugin will re-write asset URLs, when referenced
                    // in Single File Components, to point to the Laravel web
                    // server. Setting this to `null` allows the Laravel plugin
                    // to instead re-write asset URLs to point to the Vite
                    // server instead.
                    base: null,

                    // The Vue plugin will parse absolute URLs and treat them
                    // as absolute paths to files on disk. Setting this to
                    // `false` will leave absolute URLs un-touched so they can
                    // reference assets in the public directly as expected.
                    includeAbsolute: false,
                },
            },
        } ),
        laravel( {
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        } ),
        vueI18n( {
            // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
            compositionOnly: true,
            defaultSFCLang:  'json',
            runtimeOnly:     false,

            // you can set i18n resource including paths:
            // Only works with: import messages from '@intlify/vite-plugin-vue-i18n/messages';
            // The files in the include path require the extension: json, json5, yml, yaml
            // include: [
            //     path.resolve( __dirname, './resources/js/i18n/languages/**' ),
            // ],
        } ),
    ],
    define:  {
        // Make the app version available in the SPA
        '__APP_VERSION__': JSON.stringify( process.env.npm_package_version ),
    },
} )
