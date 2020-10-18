import React from 'react'

const Footer = () => {
    return (
        <footer className="px-4">
            <nav className="flex">
                <a
                    className="px-4 py-8 text-4xl font-bold uppercase border-r last:border-r-0"
                    href="/work"
                >
                    <span className="relative block leading-loose">
                        work
                        <span className="absolute top-0 left-0 block text-xs italic font-normal">
                            01
                        </span>
                    </span>
                </a>
                <a
                    className="px-4 py-8 text-4xl font-bold uppercase border-r last:border-r-0"
                    href="/stories"
                >
                    <span className="relative block leading-loose">
                        stories
                        <span className="absolute top-0 left-0 block text-xs italic font-normal">
                            02
                        </span>
                    </span>
                </a>
                <a
                    className="px-4 py-8 text-4xl font-bold uppercase border-r last:border-r-0"
                    href="/about"
                >
                    <span className="relative block leading-loose">
                        about
                        <span className="absolute top-0 left-0 block text-xs italic font-normal">
                            03
                        </span>
                    </span>
                </a>
            </nav>
        </footer>
    )
}

export default Footer
