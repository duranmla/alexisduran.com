import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faTwitch,
    faGithub,
    faLinkedinIn,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const SocialMedia = ({ orientation = 'col', className = '' }) => {
    const classes =
        orientation === 'col' ? 'flex-col space-y-3' : 'flex-row space-x-6'

    return (
        <div className="inline-block social-media">
            <div className={`text-2xl flex ${classes} ${className}`}>
                <a
                    className="transparent-effect"
                    href="https://twitter.com/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                    className="transparent-effect"
                    href="https://github.com/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Github</span>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    className="transparent-effect"
                    href="https://linkedin.com/in/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                    className="transparent-effect"
                    href="https://twitch.tv/duranmla"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Twitch</span>
                    <FontAwesomeIcon icon={faTwitch} />
                </a>
                <a
                    className="transparent-effect"
                    href="https://instagram.com/duranmla/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="hidden">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
