import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import NewsArticles from '../components/NewsArticles/NewsArticles'
import OurNewsAndArticles from '../components/OurNewsAndArticles/OurNewsAndArticles'

const News = () => {
  return (
    <>
      <Header/>
      <NewsArticles/>
      <OurNewsAndArticles />
      <NewsLetter />
      <Footer/>
    </>
  )
}

export default News