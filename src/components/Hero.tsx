import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Hero = ({ imgData, className = '' }) => {
    return (
        <>
            <div className={`container px-8 ${className}`}>
                <h1 className="mb-4 text-4xl font-bold leading-none sm:text-6xl">
                    <span className="block mb-2 mr-4 text-2xl font-normal sm:text-4xl sm:inline-block">
                        I&apos;m
                    </span>
                    Alexis Duran
                </h1>
                <p className="text-2xl leading-tight sm:text-4xl">
                    Software crafter, passionate about building accessible
                    user-facing apps, optimising processes, sharing knowledge
                    and living my best life
                </p>
                <div className="block my-12 sm:hidden">
                    <Link
                        to="/about"
                        className="p-4 bg-transparent border border-white"
                    >
                        More about me
                    </Link>
                </div>
            </div>
            <div className="filtered">
                {imgData.file && (
                    <Img fixed={imgData.file.childImageSharp.fixed} />
                )}
            </div>
        </>
    )
}

export default Hero
