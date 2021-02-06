// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`)

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-141179420-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Avoids sending pageview hits from custom paths
                exclude: [],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: 'alexisduran.com'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`)
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: path.join(__dirname, `src`, `blog`)
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-highlight-code`
                    }
                ]
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('./tailwind.config.js')
                ]
            }
        }
    ]
}
