import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import SocialMedia from './SocialMedia'

const Link = ({ to, className, ...props }) => {
    const classes = location.pathname === to ? 'active' : ''
    return (
        <GatsbyLink className={`${classes} ${className}`} to={to} {...props} />
    )
}

const Menu = () => {
    const handleOnClick = () => {
        document.body.classList.remove('menu-open')
        document.getElementsByTagName('html')[0].style.overflow = 'unset'
    }

    return (
        <div className="flex items-center justify-center mobile-nav">
            <button
                aria-label="close menu"
                className="m-8 bg-transparent stripe-close-icon"
                onClick={handleOnClick}
            >
                <div className="stripe" />
                <div className="stripe" />
            </button>
            <nav className="flex flex-col items-center justify-center space-y-8">
                <Link
                    className="relative text-2xl font-bold transparent-effect"
                    onClick={handleOnClick}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="relative hidden text-2xl font-bold text-center transparent-effect"
                    onClick={handleOnClick}
                    to="/work"
                >
                    Work
                </Link>
                <Link
                    className="relative hidden text-2xl font-bold transparent-effect"
                    onClick={handleOnClick}
                    to="/stories"
                >
                    Stories
                </Link>
                <Link
                    className="relative text-2xl font-bold transparent-effect"
                    onClick={handleOnClick}
                    to="/about"
                >
                    About
                </Link>
            </nav>
            <div className="absolute bottom-0 right-0 w-full p-8 text-center sm:block">
                <SocialMedia orientation="row" />
            </div>
        </div>
    )
}

export default Menu