import React from 'react'
import Img from 'gatsby-image'

const Hero = ({ imgData }) => {
    return (
        <>
            <div className="container px-8">
                <h1 className="text-6xl font-bold leading-none">
                    <span className="block mr-2 text-4xl font-normal sm:inline-block">
                        I&apos;m
                    </span>
                    Alexis Duran
                </h1>
                <p className="text-4xl leading-tight">
                    Duis mollis, tellus ac elementum mollis, nibh sem pulvinar
                    mauris, quis faucibus risus urna nec dui.
                </p>
                <div className="block my-8 sm:hidden">
                    <button className="p-4 bg-transparent border border-white">
                        More about me
                    </button>
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
