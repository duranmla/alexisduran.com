module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
        // defaultLineHeights: true,
        // standardFontWeights: true
    },
    purge: [],
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
        }
    },
    variants: {
        borderWidth: ['last', 'first'],
        margin: ['last', 'first']
    },
    plugins: []
}
