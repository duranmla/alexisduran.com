import React from 'react'
import { Layout } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import Technologies from '../components/Technologies'

const AboutPage = () => (
    <Layout>
        <div className="watermark" />
        <section className="flex flex-col items-center space-y-2">
            <div className="container px-8">
                <nav className="flex mb-8 sm:hidden">
                    <Link to="/" className="text-xs italic">
                        <FontAwesomeIcon icon={faChevronCircleLeft} /> Back to
                        homepage
                    </Link>
                </nav>
                <small className="text-xl leading-none lg:text-2xl">
                    <span className="inline lg:hidden">Hola!</span> I&apos;m
                </small>
                <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                    Alexis Duran
                </h1>
                <h2 className="mt-2 mb-8 text-2xl lg:text-5xl lg:leading-none">
                    UI/UX Software Engineer
                </h2>
                <section className="lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-4">
                    <span className="hidden text-5xl leading-none text-right lg:block">
                        Hola!
                    </span>
                    <div className="mb-32 content lg:col-span-3">
                        <p className="mb-8">
                            I am going to give you a summary of how I percieve
                            myself from outside. Also talking in a third party
                            perspective as it makes me feel less ackward in an
                            already vulnerable short description of what I
                            consider part of my identity
                        </p>
                        <h3 className="mb-2 text-2xl font-bold">Who is he?</h3>
                        <p className="mb-8">
                            He is a tech guy (duh!). He loves computers, coding,
                            video-games and nature. More than everything enjoys
                            the adventure and discovering new things. He is
                            super competitive, but he won&apos;t take anyone in
                            the middle while achieving success for himself. He
                            is a kind of person that is loyal and have a strong
                            social sense, always looking to have empathy for
                            others and the problems that surround him. He can be
                            a little egocentric from time to time and also have
                            some episodes of selfishness, but in the end he is
                            very aware of himself and try to embrace
                            understanding and put his ego aside. He loves to
                            read and always try to improve himself on every way
                            possible.
                        </p>
                        <h3 className="mb-2 text-2xl font-bold">
                            What about the professional side?
                        </h3>
                        <p className="mb-8">
                            In terms of profession he is advocate to the Web
                            development doing front-end work most of the time.
                            He has knowledge of server configuration and
                            back-end in general but he is mainly the go to
                            person for testing, accessibility and some neats
                            over Frontend world. While he may not be the
                            smartest of the room he likes to strive for being
                            the best in a integral way, helping others, handling
                            professional topics without hassle and pushing for
                            excellence for the people that work with him.
                        </p>
                        <h3 className="mb-2 text-2xl font-bold">
                            Back to the &quot;I&quot;. What tools I am
                            confortable with?
                        </h3>
                        <p>
                            As developers we need to learn and challenge
                            constantly, thus, this list only represent
                            technologies/tools/libraries I may be exposed
                            frequently in my daily basis. But for better or
                            worst is not the entire universe of things I will
                            need to pick up or learn.
                        </p>
                        <Technologies className="mt-4" />
                    </div>
                </section>
            </div>
        </section>
    </Layout>
)

export default AboutPage
