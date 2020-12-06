import React from 'react'
import { Layout } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const AboutPage = () => (
    <Layout>
        <div className="watermark" />
        <section className="flex flex-col items-center">
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
                    <span className="hidden text-5xl font-bold leading-none text-right lg:block">
                        Hola!
                    </span>
                    <p className="lg:col-span-3">
                        Ponam in culpa idiota aliis pravitatis. Principium
                        ponere culpam in se justum praeceptum. Neque improperes
                        et aliis qui non perfecte ipse docuit. Quod Enchiridion
                        Epictetus stoici scripsit. Rodrigo Abela et Technologiae
                        apud Massachusetts instituta Opera collectio. Ex
                        anglicus latine translata sunt. Quidam alii sunt, et non
                        est in nostra potestate. Quae omnia in nostra sententia,
                        pursuit, cupiditatem, aversatio,
                    </p>
                </section>
            </div>
        </section>
    </Layout>
)

export default AboutPage
