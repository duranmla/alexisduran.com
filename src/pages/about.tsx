import React from 'react'
import { Layout } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import Technologies from '../components/Technologies'
import SEO from '../components/SEO'

const AboutPage = () => (
    <>
        <SEO
            title="About"
            description="Get to know me a little bit. My professional profile as a Software Engineer and a glance to the personal side"
            pageUrl="http://alexisduran.com/about"
        />
        <Layout>
            <div className="watermark" />
            <section className="flex flex-col items-center space-y-2">
                <div className="container px-8">
                    <nav className="flex my-8 sm:hidden">
                        <Link to="/" className="text-xs italic">
                            <FontAwesomeIcon icon={faChevronCircleLeft} /> Back
                            to homepage
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
                        <div className="mb-20 content lg:col-span-3">
                            <p className="mb-8">
                                I am glad you made it here. Trying to come up
                                with a literal definition of ourselves can be
                                difficult, nevertheless, I will give you a
                                summary of who I am in terms of professional and
                                personal wise.
                            </p>
                            <h3 className="mb-2 text-2xl font-bold">
                                Who am I?
                            </h3>
                            <p className="mb-8">
                                I am a tech guy (duh!). I love computers,
                                coding, video-games and nature. More than
                                everything I enjoy the adventure and discovering
                                new things. I can be super competitive, but I
                                will never take over anyone while achieving
                                success for myself, I strongly believe in this{' '}
                                <a href="https://www.celticsblog.com/2020/5/5/21247660/doc-rivers-remembers-the-origins-of-celtics-ubuntu-ray-allen-kevin-garnett-paul-pierce-reunion-nba">
                                    Doc Rivers &quot;Ubuntu&quot; boston celtics
                                </a>{' '}
                                where in summary I will be better if my team is
                                better. I am the type of person that takes
                                loyalty seriously and that has a strong social
                                sense, always looking to have empathy for others
                                and the problems that surround me. I can be a
                                little egocentric from time to time and also
                                have some episodes of selfishness, but in the
                                end I try to be aware of myself embracing
                                understanding and leaving my ego aside. I can
                                say that I love books and I am a bit obcess with
                                constant improvement on every way possible.
                            </p>
                            <h3 className="mb-2 text-2xl font-bold">
                                What about the professional side?
                            </h3>
                            <p className="mb-8">
                                In terms of profession I am advocate to Web
                                development doing front-end work most of the
                                time. I have knowledge in back-end generals but
                                I will be the &quot;go to person&quot; in terms
                                of testing, accessibility and some neats over
                                Frontend world. While I may not be the smartest
                                in the room I am intentional for give my very
                                best in a integral way, helping others, handling
                                professional topics and pushing my team to be
                                the best version of ourselves.
                            </p>
                            <h3 className="mb-2 text-2xl font-bold">
                                What tools I am confortable with?
                            </h3>
                            <p>
                                As developers we need to learn and challenge our
                                knowledge constantly, thus, this list only
                                represent technologies/tools/libraries I may be
                                exposed frequently in my daily basis. But for
                                better or worst is not the entire universe of
                                things I will need to pick up or learn.
                            </p>
                            <Technologies className="mt-4" />
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    </>
)

export default AboutPage
