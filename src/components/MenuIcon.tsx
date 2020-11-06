import React from 'react'

const MenuIcon = () => {
    return (
        <button
            className="flex flex-col content-center justify-center w-10 h-10 m-4 ml-auto bg-white rounded-full shadow"
            aria-label="open menu"
        >
            <div className="mx-auto stripe-menu-icon">
                <div className="stripe" />
                <div className="stripe" />
                <div className="stripe" />
            </div>
        </button>
    )
}

export default MenuIcon
