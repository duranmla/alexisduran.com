import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, className = '' }) => (
    <div className={`layout ${className}`}>
        <Header />
        {children}
        <Footer />
    </div>
)

export default Layout
