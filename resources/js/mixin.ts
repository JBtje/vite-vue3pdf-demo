export default {
    data() {
        return {
            // System languages.
            languages: import.meta.env.WEBSITE_LANGUAGES,
            // System version.
            website_version: import.meta.env.WEBSITE_VERSION,
            website_name:    import.meta.env.WEBSITE_NAME,
        }
    },

    methods: {
        convertTime( time ) {
            return !time ? '-' : this.$dayjs( time ).format( 'YYYY-MM-DD HH:mm:ss' )
        },

        goto( name, params ) {
            this.$router.push( {
                name: name,
                ...params && {params},
            }, () => {
            } )
        },

        hasPermission( name ) {
            console.log( 'hasPermission method needs to be made' )
            return true
        },

        isInt( i ) {
            return Number.isInteger( i )
        },

        noNull( value ) {
            return value === null ? '' : value
        },

        scrollToTop() {
            window.scrollTo( 0, 0 )
        },
    },
}
