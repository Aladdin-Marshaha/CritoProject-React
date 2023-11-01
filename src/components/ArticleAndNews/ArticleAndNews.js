import React from 'react'
import "./ArticleAndNews.css"
import foto1 from "../../images/news-foto1.svg"
import foto2 from "../../images/news-foto2.svg"
import foto3 from "../../images/news-foto3.svg"

const ArticleAndNews = () => {
  return (
    <>
        <section className="article-and-news">
            <div className="container">
                <div className="first-part">
                    <p>Article & News</p>
                    <div className="h4-a" >
                        <h4>Get Every Single Articles & News</h4>
                        <a className="btn-transparent" href="http://">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                </div>
                <div className="parent">
                    <a href="Digitalization.html" className="child">
                        <img src={foto1} alt=""/>
                        <p>Business</p>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </a>
                    <a href="#" className="child">
                        <img src={foto2} alt=""/>
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </a>
                    <a href="#" className="child">
                        <img src={foto3} alt=""/>
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </a>
                </div>
                <div className="center-content">
                    <img src="images/punkter.svg" alt=""/>
                </div>
            </div>
            </section>
    </>
  )
}

export default ArticleAndNews