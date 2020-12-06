import React from 'react'
import { Layout } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

const AboutPage = () => (
    <Layout>
        <section className="flex flex-col items-center">
            <div className="container px-8">
                <nav className="flex mb-8 sm:hidden">
                    <Link to="/" className="text-xs italic">
                        <FontAwesomeIcon icon={faChevronCircleLeft} /> Back to
                        homepage
                    </Link>
                </nav>
                <small className="text-xl leading-none">Hola! I&apos;m</small>
                <h1 className="text-4xl font-bold leading-normal">
                    Alexis Duran
                </h1>
                <h2 className="mb-8 text-2xl">UI/UX Software Engineer</h2>
                <p>
                    Ponam in culpa idiota aliis pravitatis. Principium ponere
                    culpam in se justum praeceptum. Neque improperes et aliis
                    qui non perfecte ipse docuit. Quod Enchiridion Epictetus
                    stoici scripsit. Rodrigo Abela et Technologiae apud
                    Massachusetts instituta Opera collectio. Ex anglicus latine
                    translata sunt. Quidam alii sunt, et non est in nostra
                    potestate. Quae omnia in nostra sententia, pursuit,
                    cupiditatem, aversatio,
                </p>
            </div>
        </section>
    </Layout>
)

export default AboutPage
