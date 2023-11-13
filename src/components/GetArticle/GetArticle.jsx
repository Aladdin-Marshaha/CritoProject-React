import React, { useEffect, useState } from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import './GetArticle.css'
import NewsCard from '../NewsCard/NewsCard'



const GetArticle = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch ('https://win23-assignment.azurewebsites.net/api/articles')
      const data = await res.json();
      setArticles(data);
    }

    getArticles()

  },[])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div className='container'>
      <section className='carousel'>
        <Carousel 
          responsive={responsive}
          showDots={true}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          renderDotsOutside={true}
        >
        {articles.map((article) => (
            <NewsCard key={articles.id} ACard={article} />
          ))}
        </Carousel>
      </section>
    </div>
  )
}

export default GetArticle