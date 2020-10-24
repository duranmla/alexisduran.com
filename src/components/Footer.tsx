import React from 'react'

const NavLink = ({ children, preffix, ...linkAttrs }) => {
    return (
        <a
            className="p-4 text-2xl font-bold uppercase transition-opacity duration-200 ease-in-out opacity-50 hover:opacity-100"
            {...linkAttrs}
        >
            <p className="top-0 left-0 block m-0 text-xs italic font-normal">
                {preffix}
            </p>
            <p className="relative block leading-none">{children}</p>
        </a>
    )
}

const Footer = () => {
    return (
        <footer className="p-4">
            <nav className="flex invisible divide-x sm:visible">
                <NavLink href="/work" preffix="01">
                    work
                </NavLink>
                <NavLink href="/stories" preffix="02">
                    stories
                </NavLink>
                <NavLink href="/about" preffix="03">
                    about
                </NavLink>
            </nav>
        </footer>
    )
}

export default Footer
