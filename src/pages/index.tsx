import React from 'react'

const Layout = ({ children }) => <>{children}</>

const IndexPage = () => (
    <Layout>
        <h1 className="font-body">Hi people</h1>
        <button className="btn-primary">Activate</button>
    </Layout>
)
export default IndexPage
