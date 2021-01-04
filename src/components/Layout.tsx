import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, className = '' }) => (
    <>
        <Helmet title="Alexis Duran">
            <html lang="en" />
            <meta
                name="viewport"
                content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            {/* Facebook Meta Tags */}
            <meta property="og:url" content="http://alexisduran.com" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Alexis Duran" />
            <meta
                property="og:description"
                content="Software crafter, passionate about building accessible user-facing apps, optimizing processes, sharing knowledge, and living my best life"
            />
            <meta
                property="og:image"
                content="https://s3.eu-central-1.amazonaws.com/alexisduran.com/hero_text.jpeg"
            />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="alexisduran.com" />
            <meta property="twitter:url" content="http://alexisduran.com" />
            <meta name="twitter:title" content="Alexis Duran" />
            <meta
                name="twitter:description"
                content="Software crafter, passionate about building accessible user-facing apps, optimizing processes, sharing knowledge, and living my best life"
            />
            <meta
                name="twitter:image"
                content="https://s3.eu-central-1.amazonaws.com/alexisduran.com/hero_text.jpeg"
            ></meta>
        </Helmet>
        <div className={`layout ${className}`}>
            <Header />
            {children}
            <Footer />
        </div>
    </>
)

export default Layout
