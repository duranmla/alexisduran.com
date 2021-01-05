import React, { useCallback, useEffect, useState } from 'react'
import Menu from './Menu'

type Variants = 'active' | 'inactive'

const MenuIcon = () => {
    const { innerWidth } =
        typeof window !== 'undefined' ? window : { innerWidth: 0 }
    const initialVariant = innerWidth < 1536 ? 'active' : 'inactive'
    const [y, setY] = useState(typeof window !== 'undefined' && window.scrollY)
    const [animateClass, setAnimateClass] = useState<Variants>(initialVariant)

    const handleAnimation = useCallback(
        (e) => {
            // Large screens won't get favored by animation
            if (typeof window !== 'undefined' && window.innerWidth >= 1536)
                return

            const { scrollY } = e.currentTarget

            if (y > scrollY) {
                setAnimateClass('active')
            } else if (y < scrollY && scrollY > 5) {
                setAnimateClass('inactive')
            }

            setY(scrollY)
        },
        [y]
    )

    useEffect(() => {
        if (typeof window === undefined) return

        setY(window.scrollY)
        window.addEventListener('scroll', handleAnimation)

        return () => {
            window.removeEventListener('scroll', handleAnimation)
        }
    }, [handleAnimation])

    const handleOnClick = () => {
        document.body.classList.add('menu-open')
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    }

    return (
        <>
            <button
                id="menu-toggle"
                onClick={handleOnClick}
                className={`fixed top-0 right-0 flex flex-col content-center justify-center w-10 h-10 m-8 ml-auto bg-white rounded-full shadow ${animateClass}`}
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
