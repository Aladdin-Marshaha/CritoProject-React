import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ShowCase from '../components/ShowCase/ShowCase'
import Logos from '../components/Logos/Logos'
import Features from '../components/Features/Features'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import OurServices from '../components/OurServices/OurServices'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import ProjectStuies from '../components/ProjectStuies/ProjectStuies'
import YellowSection from '../components/YellowSection/YellowSection'
import ArticleAndNews from '../components/ArticleAndNews/ArticleAndNews'
import NewsLetter from '../components/NewsLetter/NewsLetter'


const Home = () => {
  return (

    <div className='wrapper'>
      <Header />
        <main>
          <ShowCase />
          <Logos />
          <Features />
          <AboutCompany />
          <OurServices />
          <WhyChooseUs />
          <ProjectStuies />
          <YellowSection />
          <ArticleAndNews />
          <NewsLetter />
        </main>
        <Footer />
    </div>

  )
}

export default Home