import React, { useState } from 'react'
import classNames from 'classnames'

const MenuIcon = () => {
    const [open, setOpen] = useState(false)
    const ariaLabel = open ? 'open menu' : 'close menu'
    const classes = classNames(
        'flex flex-col content-center justify-center w-10 h-10 m-4 ml-auto bg-white rounded-full shadow',
        { open }
    )
    const handleOnClick = () => {
        setOpen((state) => !state)
    }

    return (
        <button
            onClick={handleOnClick}
            className={classes}
            aria-label={ariaLabel}
        >
            <div className="mx-auto stripe-menu-icon">
                <div className="stripe" />
                <div className="stripe" />
                <div className="stripe" />
                <div className="stripe-close" />
            </div>
        </button>
    )
}

export default MenuIcon
