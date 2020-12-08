import React from 'react'
import { Link } from 'gatsby'

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
                    className="text-2xl font-bold transparent-effect"
                    onClick={handleOnClick}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="hidden text-2xl font-bold text-center transparent-effect"
                    onClick={handleOnClick}
                    to="/work"
                >
                    Work
                </Link>
                <Link
                    className="hidden text-2xl font-bold transparent-effect"
                    onClick={handleOnClick}
                    to="/stories"
                >
                    Stories
                </Link>
                <Link
                    className="text-2xl font-bold transparent-effect"
                    onClick={handleOnClick}
                    to="/about"
                >
                    About
                </Link>
            </nav>
        </div>
    )
}

export default Menu
