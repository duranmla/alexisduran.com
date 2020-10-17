/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('./tailwind.config.js')
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: 'Lato',
                        weights: ['300', '900']
                    }
                ]
            }
        }
    ]
}
