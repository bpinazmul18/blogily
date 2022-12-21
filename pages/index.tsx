import Head from 'next/head'
import { Col, Layout, Row } from 'antd'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { fetchPosts } from '../store/posts'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/configureStore'

const { Footer, Content } = Layout

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <>
      <Head>
        <title>Blogily| A simple blog web app.</title>
        <meta name="description" content="A simple blog web app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout className="container">
        <Header />
        <Row justify="center" align="middle">
          <Col xs={20} xxl={16}>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default Home
