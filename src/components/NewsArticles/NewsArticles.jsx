import React from 'react'
import './NewsArticles.css'
import BackLine from '../../images/line-in-contact.svg'

const NewsArticles = () => {
  return (
    <>
        <section className="news-and-articles">
            <div className="container">
                <a href="index.html">Home</a>
                <a href="News.html">News</a>
                <p>News & Articles</p>
            </div>
            <img className="line" src={BackLine} alt=""/>
        </section>
    </>
  )
}

export default NewsArticles