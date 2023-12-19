import React from 'react'
import MenuIcon from './MenuIcon'

const NavLink = ({ children, preffix, ...linkAttrs }) => {
    return (
        <a
            className="text-2xl font-bold uppercase transparent-effect"
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
        <header className="px-4 pt-4 sm:p-4">
            <div className="block sm:hidden">
                <MenuIcon />
            </div>
            <div className="justify-end hidden p-4 space-x-4 sm:flex">
                <NavLink
                    href="https://bit.ly/3mPH9XA"
                    target="blank"
                    preffix="Check my"
                >
                    resume
                </NavLink>
                <NavLink href="mailto:alexis.duranm@gmail.com" preffix="Let's work">
                    mail me
                </NavLink>
            </div>
        </header>
    )
}

export default Header
