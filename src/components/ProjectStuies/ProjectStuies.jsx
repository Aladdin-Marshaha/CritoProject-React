import React from 'react'
import "./ProjectStuies.css"
import articleImage1 from "../../images/article-Image-1.png"
import articleImage2 from "../../images/article-Image-2.png"
import articleImage3 from "../../images/article-Image-3.png"
import articleImage4 from "../../images/article-Image-4.png"
import Button from "../../generics/Button"
import ProjectCaseStudies from '../../generics/ProjectCaseStudies/ProjectCaseStudies'

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
                    <ProjectCaseStudies img={articleImage1} title="Grow your business" url="#" />
                    <ProjectCaseStudies img={articleImage2} title="Why your client needs a responsive website" url="#" />
                    <ProjectCaseStudies img={articleImage3} title="Educate your employees to get better results" url="#" />
                    <ProjectCaseStudies img={articleImage4} title="Business Insights is an important piece of your business" url="#" />
                </div>
                <div className="center-content">
                    <Button type= "black" text = "All Recent Projects" />
                </div>
            </div>
        </section>
    </>
  )
}

export default ProjectStuies;