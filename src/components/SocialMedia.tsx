import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faTwitch,
    faGithub,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'

const SocialMedia = ({ orientation = 'col', className = '' }) => {
    const classes =
        orientation === 'col' ? 'flex-col space-y-3' : 'flex-row space-x-6'

    return (
        <div className="inline-block social-media">
            <div className={`text-2xl flex ${classes} ${className}`}>
                <a
                    aria-label="open Twitter profile"
                    className="transparent-effect"
                    href="https://twitter.com/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                    aria-label="open Github profile"
                    className="transparent-effect"
                    href="https://github.com/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Github</span>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    aria-label="open LinkedIn profile"
                    className="transparent-effect"
                    href="https://linkedin.com/in/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    aria-label="open Twitch profile"
                    className="transparent-effect"
                    href="https://twitch.tv/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Twitch</span>
                    <FontAwesomeIcon icon={faTwitch} />
                </a>
                <a
                    aria-label="open Podcast page"
                    className="transparent-effect"
                    href="https://anchor.fm/noessolocodigo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Personal Podcast</span>
                    <FontAwesomeIcon icon={faPodcast} />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
