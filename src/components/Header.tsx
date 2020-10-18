import React from 'react'

const Header = () => {
    return (
        <header className="p-4">
            <nav className="flex justify-end p-4">
                <a
                    className="relative ml-4 text-4xl font-bold leading-loose first:ml-0"
                    href="#"
                >
                    RESUME
                    <span className="absolute top-0 left-0 block text-xs italic font-normal">
                        Get my
                    </span>
                </a>
                <a
                    className="relative ml-4 text-4xl font-bold leading-loose first:ml-0"
                    href="mailto:hi@alexisduran.com"
                >
                    CONTACT
                    <span className="absolute top-0 left-0 block text-xs italic font-normal">
                        Let&apos;s work
                    </span>
                </a>
            </nav>
        </header>
    )
}

export default Header
