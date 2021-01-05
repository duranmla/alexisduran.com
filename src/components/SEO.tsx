import React from 'react'
import { Helmet } from 'react-helmet'

const DEFAULT_IMAGE =
    'https://s3.eu-central-1.amazonaws.com/alexisduran.com/hero_text.jpeg'

const SEO = ({
    title,
    description,
    titleTemplate = '%s · Alexis Duran',
    imageUrl = DEFAULT_IMAGE,
    pageUrl = 'http://alexisduran.com/',
    username = '@duranmla'
}) => {
    return (
        <Helmet title={title} titleTemplate={titleTemplate}>
            <html lang="en" />
            <meta
                name="viewport"
                content="viewport-fit=cover, width=device-width"
            />
            <meta name="description" content={description} />
            <meta name="image" content={imageUrl} />
            {/* Facebook Meta Tags */}
            <meta property="og:url" content={pageUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={username} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    )
}

export default SEO
