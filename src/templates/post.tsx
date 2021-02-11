import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import { Layout } from '../components'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import Share from '../components/Share'

deckDeckGoHighlightElement()

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <>
            <SEO
                title="Blog"
                coverTitle={post.frontmatter.title}
                description={post.excerpt}
                pageUrl="http://alexisduran.com/about"
            />
            <Layout>
                <div className="flex flex-col items-center space-y-2">
                    <div className="container max-w-3xl px-8">
                        <nav className="flex my-8 sm:hidden">
                            <Link to="/blog" className="text-xs italic">
                                <FontAwesomeIcon icon={faChevronCircleLeft} />{' '}
                                Back to blog
                            </Link>
                        </nav>
                        <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                            {post.frontmatter.title}
                        </h1>
                        <h2 className="mt-2 mb-8 text-2xl lg:leading-none">
                            {post.frontmatter.date}
                        </h2>
                        <section
                            className="content post-content"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </div>
                </div>
                <div className="lg:block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="rgb(229,62,62, .5)"
                            d="M0,64L24,101.3C48,139,96,213,144,208C192,203,240,117,288,90.7C336,64,384,96,432,133.3C480,171,528,213,576,234.7C624,256,672,256,720,245.3C768,235,816,213,864,202.7C912,192,960,192,1008,181.3C1056,171,1104,149,1152,170.7C1200,192,1248,256,1296,240C1344,224,1392,128,1416,80L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                        ></path>
                    </svg>
                </div>
                <div
                    className="py-8 pb-32"
                    style={{ background: 'rgb(229,62,62, .5)' }}
                >
                    <div className="container px-8 mx-auto">
                        <Share />
                    </div>
                </div>
            </Layout>
        </>
    )
}
export const query = graphql`
    query BlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date(fromNow: true)
            }
            excerpt(pruneLength: 350)
        }
    }
`
