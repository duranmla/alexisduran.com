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
        <div className="inline-block">
            <div className={`text-2xl flex ${classes} ${className}`}>
                <a className="transparent-effect" href="#" target="_blank">
                    <span className="hidden">Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="transparent-effect" href="#" target="_blank">
                    <span className="hidden">Github</span>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="transparent-effect" href="#" target="_blank">
                    <span className="hidden">LinkedIn</span>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="transparent-effect" href="#" target="_blank">
                    <span className="hidden">Twitch</span>
                    <FontAwesomeIcon icon={faTwitch} />
                </a>
                <a className="transparent-effect" href="#" target="_blank">
                    <span className="hidden">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
