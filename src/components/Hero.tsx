import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const Hero = ({ imgData, className = '' }) => {
    return (
        <>
            <div className={`container px-8 ${className}`}>
                <h1 className="mb-4 text-6xl font-bold leading-none">
                    <span className="block mb-2 mr-4 text-4xl font-normal sm:inline-block">
                        I&apos;m
                    </span>
                    Alexis Duran
                </h1>
                <p className="text-4xl leading-tight">
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
