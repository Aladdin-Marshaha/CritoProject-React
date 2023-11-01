import React from 'react'
import "./ProjectStuies.css"
import articleImage1 from "../../images/article-Image-1.png"
import articleImage2 from "../../images/article-Image-2.png"
import articleImage3 from "../../images/article-Image-3.png"
import articleImage4 from "../../images/article-Image-4.png"

const ProjectStuies = () => {
  return (
    <>
        <section className="project-and-case">
            <div className="container"> 
                <div className="section-title"> 
                    <p> Project & Case Studies </p>
                    <h2> Let’s Looks Our Global Projects </h2>
                </div>
                <div className="project-and-cases">
                    <a className="project" href="#">
                        <img src={articleImage1} alt="a man hands reading a business peper"/>
                        <h3>Grow your business</h3>
                        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={articleImage2} alt="Pink Apple products"/>
                        <h3>Why your client needs a responsive website</h3>
                        <div className="readmore"> Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={articleImage3} alt="Desk with office supplies"/>
                        <h3>Educate your employees to get better results</h3>
                        <div className="readmore"> Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="" >
                        <img src={articleImage4} alt="Laptop with Business Intelligence Insights"/>
                        <h3>Business Insights is a important piece of your business</h3>
                        <div className="readmore"> Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                </div>
                <div className="center-content">
                    <a className="btn-black" href="projects.html"> All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProjectStuies