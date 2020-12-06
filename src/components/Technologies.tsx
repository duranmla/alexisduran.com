import React from 'react'
import {
    faReact,
    faJs,
    faNodeJs,
    faHtml5,
    faCss3,
    faGitAlt,
    faAws
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Technologies = ({ className = '' }) => {
    return (
        <div className={className}>
            <ul className="flex flex-row mt-6 space-x-6">
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faReact} />
                    <small>React</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <img
                        style={{
                            height: '1.875rem',
                            width: 'auto'
                        }}
                        src="https://jestjs.io/img/jest-outline.svg"
                        alt="Jest logo"
                    />
                    <small>Jest</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faJs} />
                    <small>JS</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faGitAlt} />
                    <small>Git</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faNodeJs} />
                    <small>Node</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faHtml5} />
                    <small>HTML</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faCss3} />
                    <small>CSS</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <svg
                        width="40"
                        height="30"
                        viewBox="0 0 148 90"
                        version="1.1"
                    >
                        <path
                            d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
                            fill="#FFF"
                            fillRule="nonzero"
                        ></path>
                    </svg>
                    <small>Next.js</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <svg
                        fill="none"
                        height="30"
                        viewBox="0 0 30 30"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z"
                            fill="#fff"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                    <small>Typescript</small>
                </li>
                <li className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon className="text-3xl" icon={faAws} />
                    <small>AWS</small>
                </li>
            </ul>
        </div>
    )
}

export default Technologies
