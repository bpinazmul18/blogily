import Head from 'next/head'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import { fetchPosts } from '../store/posts'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/configureStore'

import Footer from '../components/MyFooter'
import Content from '../components/MyContent'
import { fetchComments } from '../store/comments'

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchComments())
  }, [])

  return (
    <>
      <Head>
        <title>Blogily| A simple blog web app.</title>
        <meta name="description" content="A simple blog web app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  )
}

export default Home
