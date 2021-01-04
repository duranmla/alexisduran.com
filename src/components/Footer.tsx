import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'gatsby'

const NavLink = ({
    children,
    preffix,
    className = '',
    tag = null,
    ...linkAttrs
}) => {
    const Component = tag || Link
    const classes = location.pathname === linkAttrs.to ? 'active' : ''

    return (
        <Component
            className={`p-4 text-2xl font-bold uppercase transparent-effect ${classes} ${className}`}
            {...linkAttrs}
        >
            <p className="block m-0 text-xs italic font-normal preffix">
                {preffix}
            </p>
            <p className="relative block leading-none">{children}</p>
        </Component>
    )
}

type Variants = 'transparent' | 'collapsed' | 'solid'

const Footer = () => {
    const { innerWidth } = window
    const initialVariant = innerWidth < 1536 ? 'solid' : 'transparent'
    const [y, setY] = useState(window.scrollY)
    const [animateClass, setAnimateClass] = useState<Variants>(initialVariant)

    const handleNavigation = useCallback(
        (e) => {
            // Large screens won't get favored by animation
            if (window.innerWidth >= 1536) return

            const { scrollY } = e.currentTarget

            if (y > scrollY) {
                setAnimateClass('solid')
            } else if (y < scrollY && scrollY > 5) {
                setAnimateClass('collapsed')
            }

            setY(scrollY)
        },
        [y]
    )

    useEffect(() => {
        setY(window.scrollY)
        window.addEventListener('scroll', handleNavigation)

        return () => {
            window.removeEventListener('scroll', handleNavigation)
        }
    }, [handleNavigation])

    return (
        <footer
            id="site-footer"
            className={`site-footer fixed bottom-0 left-0 w-full sm:p-4 ${animateClass}`}
        >
            <div className="flex justify-around divide-x shadow sm:hidden">
                <NavLink
                    tag="a"
                    href="https://bit.ly/3mPH9XA"
                    preffix="Check my"
                    className="w-1/2 text-center text-black"
                    target="blank"
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
            <nav title="desktop navigation" className="hidden divide-x sm:flex">
                <NavLink to="/" preffix="01">
                    home
                </NavLink>
                {/* <NavLink
                    className="pointer-events-none preffix-smaller"
                    to="/work"
                    preffix="(coming soon)"
                >
                    work
                </NavLink>
                <NavLink
                    className="pointer-events-none preffix-smaller"
                    to="/stories"
                    preffix="(coming soon)"
                >
                    stories
                </NavLink> */}
                <NavLink to="/about" preffix="04">
                    about
                </NavLink>
            </nav>
        </footer>
    )
}

export default Footer
