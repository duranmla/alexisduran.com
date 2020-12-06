import React from 'react'
import { Link } from 'gatsby'

const NavLink = ({
    children,
    preffix,
    className = '',
    tag = null,
    ...linkAttrs
}) => {
    const Component = tag || Link
    return (
        <Component
            className={`p-4 text-2xl font-bold uppercase transparent-effect ${className}`}
            {...linkAttrs}
        >
            <p className="top-0 left-0 block m-0 text-xs italic font-normal">
                {preffix}
            </p>
            <p className="relative block leading-none">{children}</p>
        </Component>
    )
}

const Footer = () => {
    return (
        <footer
            id="site-footer"
            className="mt-8 bg-white sm:p-4 sm:bg-transparent"
        >
            <div className="flex justify-around divide-x shadow sm:hidden">
                <NavLink
                    tag="a"
                    href="#"
                    preffix="Get my"
                    className="w-1/2 text-center text-black"
                    style={{ opacity: 1 }}
                >
                    resume
                </NavLink>
                <NavLink
                    tag="a"
                    href="mailto:hi@alexisduran.com"
                    preffix="Let's work"
                    className="w-1/2 text-center text-black"
                    style={{ opacity: 1 }}
                >
                    mail me
                </NavLink>
            </div>
            <nav className="hidden divide-x sm:flex">
                <NavLink to="/work" preffix="01">
                    work
                </NavLink>
                <NavLink to="/stories" preffix="02">
                    stories
                </NavLink>
                <NavLink to="/about" preffix="03">
                    about
                </NavLink>
            </nav>
        </footer>
    )
}

export default Footer
