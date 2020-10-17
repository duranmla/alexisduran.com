import React from 'react'

const Layout = ({ children }) => <div className="layout">{children}</div>

const IndexPage = () => (
    <Layout>
        <header>Header</header>
        <section>
            <h1 className="font-body">Hi people</h1>
            <button className="btn-primary">Activate</button>
        </section>
        <footer>Copyright</footer>
    </Layout>
)
export default IndexPage
