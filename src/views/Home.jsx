import React, { useRef } from 'react'
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
import GetArticle from '../components/GetArticle/GetArticle'
import Titles from '../generics/Titles/Titles'
import { Button } from 'bootstrap'

const Home = () => {

  const goToTop = useRef()

  const moveUp = () => {
    goToTop.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (

    <div className='wrapper'>
      <div ref={goToTop} ></div>
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
          <GetArticle />
          <NewsLetter />
        </main>
        <div className='gototopHome'>
          <button className='goToTop' onClick={moveUp} ><i class="fa-sharp fa-solid fa-up fa-bounce"></i></button>
        </div>
        
        <Footer />
    </div>
  )
}

export default Home