import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Hero, SocialMedia } from '../components'

const IndexPage = ({ data }) => (
    <Layout>
        <section className="flex items-center">
            <Hero imgData={data} />
        </section>
        <div className="absolute bottom-0 right-0 hidden p-8 sm:block">
            <SocialMedia />
        </div>
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