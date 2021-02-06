import React from 'react'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { Layout } from '../components'

import SEO from '../components/SEO'

export default function Blog({ data }) {
    const { posts } = data.blog

    return (
        <>
            <SEO
                title="Blog"
                coverTitle="Hola! I'm Alexis Duran"
                description="Sharing a little bit of what I stumble across my professional career"
                pageUrl="http://alexisduran.com/about"
            />
            <Layout>
                <div className="watermark blog" />
                <section className="flex flex-col items-center space-y-2">
                    <div className="container px-8">
                        <nav className="flex my-8 sm:hidden">
                            <Link to="/" className="text-xs italic">
                                <FontAwesomeIcon icon={faChevronCircleLeft} />{' '}
                                Back to homepage
                            </Link>
                        </nav>
                        <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                            The &rdquo;Journal&rdquo;
                        </h1>
                        <h2 className="mt-2 mb-8 text-2xl lg:text-5xl lg:leading-none">
                            Entries to inspect what I&rsquo;ve been doing
                        </h2>
                        <section className="lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-4">
                            <span className="hidden text-5xl leading-none text-right lg:block">
                                Latest
                            </span>
                            <div className="mb-20 content lg:col-span-3">
                                {posts.map((post) => (
                                    <article key={post.id}>
                                        <Link to={post.fields.slug}>
                                            <div className="mb-2">
                                                <h2 className="text-2xl font-bold">
                                                    {post.frontmatter.title}
                                                </h2>
                                                <small className="italic">
                                                    {post.frontmatter.date}
                                                </small>
                                            </div>
                                            <p className="mb-8">
                                                {post.excerpt}
                                            </p>
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
    query MyQuery {
        blog: allMarkdownRemark {
            posts: nodes {
                fields {
                    slug
                }
                frontmatter {
                    date(fromNow: true)
                    title
                    author
                }
                excerpt(pruneLength: 350)
                id
            }
        }
    }
`
