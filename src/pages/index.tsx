import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'

const Button = tw.button`
    bg-blue-500 hover:bg-blue-800 text-white p-2 rounded font-body font-bold
`

const Heading = tw.h1`
    font-body
`

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        {children}
    </>
)

const IndexPage = () => (
    <Layout>
        <h1 className="font-body">Hi people</h1>
        <Heading>Hi people</Heading>
        <Button>Activate</Button>
    </Layout>
)
export default IndexPage
