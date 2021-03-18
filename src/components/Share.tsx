import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Share = ({ title, url }) => {
    const tweetText = `"${title}", an article from Alexis Duran`
    const tweetHref = `https://twitter.com/share?url=${url}&text=${encodeURI(
        tweetText
    )}&via=duranmla`

    return (
        <a
            className="relative block max-w-full p-8 mx-auto share-container"
            href={tweetHref}
            target="_blank"
            rel="noreferrer"
        >
            <p className="mb-12">
                If you take any value from this post or you have any comment I
                would love to know about it. Start a conversation or simple{' '}
                <span className="italic font-bold underline">
                    share on Twitter
                </span>
            </p>
            <p className="hidden text-2xl font-bold md:block">Click the bird</p>
            <FontAwesomeIcon
                className="hidden md:block share-icon"
                icon={faTwitter}
                size="lg"
                color="white"
            />
            <div
                className="absolute hidden md:block"
                style={{ width: '20rem', bottom: '25px', left: '-75px' }}
            >
                <svg
                    viewBox="0 0 310 129"
                    fill="none"
                    style={{ width: '100%' }}
                >
                    <path
                        d="M10.9756 5C31.3756 18.3237 42.2813 22.3973 46.3024 42.0904C51.5051 67.5697 18.9366 75 6.00002 96.4577C-15.9765 132.91 85.5 124.914 108 124.914H310M10.9756 5C16.4488 12.6215 18.9366 26.9662 18.9366 26.9662M10.9756 5C22.5 8.5 38 7 38 7"
                        stroke="#fff"
                        strokeWidth="3"
                    ></path>
                </svg>
            </div>
        </a>
    )
}

export default Share
