import Head from 'next/head'
import { Layout } from 'antd'
import React from 'react'

const { Header, Footer, Content } = Layout

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blogily| A simple blog web app.</title>
        <meta name="description" content="A simple blog web app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout className="container">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}

export default Home
