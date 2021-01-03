import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, className = '' }) => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
        </Helmet>
        <div className={`layout ${className}`}>
            <Header />
            {children}
            <Footer />
        </div>
    </>
)

export default Layout
