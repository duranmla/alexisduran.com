import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, SocialMedia } from '../components'

const IndexPage = ({ data }) => (
    <Layout>
        <section className="flex items-center">
            <Hero imgData={data} />
            <div className="absolute bottom-0 right-0 invisible p-8 sm:visible">
                <SocialMedia />
            </div>
        </section>
    </Layout>
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
