module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
        // defaultLineHeights: true,
        // standardFontWeights: true
    },
    purge: ['./src/**/*.scss', './src/**/*.tsx'],
    theme: {
        fontFamily: {
            headline: 'Gilroy, sans-serif',
            body: 'Gilroy, sans-serif',
            cursive: 'Libre Baskerville, serif'
        },
        fontWeight: {
            semibold: 500,
            normal: 300,
            bold: 900
        },
        extend: {
            gridTemplateRows: {
                layout: 'auto 1fr auto'
            }
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            // in order to add custom screens we need to define the built-in ones
            xxl: '1536px'
        }
    },
    variants: {
        borderWidth: ['last', 'first'],
        margin: ['responsive', 'last', 'first']
    },
    plugins: []
}
