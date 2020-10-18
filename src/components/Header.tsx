import React from 'react'

const NavLink = ({ children, preffix, ...linkAttrs }) => {
    return (
        <a className="px-4 text-2xl font-bold uppercase" {...linkAttrs}>
            <p className="top-0 left-0 block m-0 text-xs italic font-normal">
                {preffix}
            </p>
            <p className="relative block leading-none">{children}</p>
        </a>
    )
}

const Header = () => {
    return (
        <header className="p-4">
            <nav className="flex justify-end p-4">
                <NavLink href="#" preffix="Get my">
                    resume
                </NavLink>
                <NavLink href="mailto:hi@alexisduran.com" preffix="Let's work">
                    mail me
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
