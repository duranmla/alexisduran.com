import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faTwitch,
    faGithub,
    faLinkedinIn,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
    return (
        <div className="inline-block">
            <div className="flex flex-col space-y-3 text-2xl">
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
