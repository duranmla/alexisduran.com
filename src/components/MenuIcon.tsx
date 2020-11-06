import React from 'react'
import Menu from './Menu'

const MenuIcon = () => {
    const handleOnClick = () => {
        document.body.classList.add('menu-open')
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }

    return (
        <>
            <button
                id="menu-toggle"
                onClick={handleOnClick}
                className="flex flex-col content-center justify-center w-10 h-10 m-4 ml-auto bg-white rounded-full shadow"
                aria-label="open menu"
            >
                <div className="mx-auto stripe-menu-icon">
                    <div className="stripe" />
                    <div className="stripe" />
                    <div className="stripe" />
                </div>
            </button>
            <Menu />
        </>
    )
}

export default MenuIcon
