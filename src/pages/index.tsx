import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, SocialMedia } from '../components'
import SEO from '../components/SEO'

const IndexPage = ({ data }) => (
    <>
        <SEO
            title="Home"
            coverTitle="Hola! I'm Alexis Duran"
            description="This is a humble place on the internet from yet another cool Software Engineer"
            pageUrl="http://alexisduran.com/"
        />
        <Layout className="homepage">
            <section className="flex items-center">
                <Hero className="mb-0 sm:mb-40" imgData={data} />
            </section>
            <div className="absolute bottom-0 right-0 z-10 hidden p-8 sm:block">
                <SocialMedia />
            </div>
            <div className="absolute bottom-0 left-0 right-0 hidden lg:block">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="rgb(229,62,62, .5)"
                        fillOpacity="0.5"
                        d="M0,64L24,101.3C48,139,96,213,144,208C192,203,240,117,288,90.7C336,64,384,96,432,133.3C480,171,528,213,576,234.7C624,256,672,256,720,245.3C768,235,816,213,864,202.7C912,192,960,192,1008,181.3C1056,171,1104,149,1152,170.7C1200,192,1248,256,1296,240C1344,224,1392,128,1416,80L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </Layout>
    </>
)

export const query = graphql`
    query {
        file(relativePath: { eq: "homepage-hero-temp.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 500, height: 500) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default IndexPage
