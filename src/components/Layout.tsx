import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, className = '' }) => (
    <>
        <main className={`layout ${className}`}>
            <Header />
            {children}
            <Footer />
        </main>
    </>
)

export default Layout
