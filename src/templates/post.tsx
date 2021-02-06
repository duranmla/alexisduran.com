import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/SEO'
import { Layout } from '../components'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'

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
                <section className="flex flex-col items-center space-y-2">
                    <div className="container px-8">
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
                            className="mb-32 content post-content"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </div>
                </section>
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
