import React from 'react'

const NavLink = ({ children, preffix, ...linkAttrs }) => {
    return (
        <a
            className="text-2xl font-bold uppercase transition-opacity duration-200 ease-in-out opacity-50 hover:opacity-100"
            {...linkAttrs}
        >
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
            <nav className="flex justify-end invisible p-4 space-x-4 sm:visible">
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
