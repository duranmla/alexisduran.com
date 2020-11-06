import React from 'react'

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
            <nav className="flex flex-col items-center justify-center">
                <a className="text-2xl font-bold" href="/">
                    Home
                </a>
                <a className="text-2xl font-bold" href="/">
                    Work
                </a>
                <a className="text-2xl font-bold" href="/">
                    Stories
                </a>
                <a className="text-2xl font-bold" href="/">
                    About
                </a>
            </nav>
        </div>
    )
}

export default Menu
