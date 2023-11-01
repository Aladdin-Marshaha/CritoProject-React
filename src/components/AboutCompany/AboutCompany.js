import React from 'react'
import "./AboutCompany.css"
import woman from "../../images/a-wamn-with-laptop.svg"

const AboutCompany = () => {
  return (
    <>
        <section className="about-company">
            <div className="container">
                <div className="left">
                    <img className="woman" src={woman} alt="" />
                    <img className="white-line" src="images/white-line-on-woman.svg" alt="" />
                    <div className="box-on-picture">
                        <div className="name"> Samantha Brown, <span>Founder</span></div>
                        <p className="under-name">"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className="right" >
                    <div className="text">
                        <p className="p-1"> About Company </p>
                        <h2> We Are Business Consulting & Credit Repair Experts </h2>
                        <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    </div>
                    <div className="buttons"> 
                        <a className="btn-black">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                        <a className="intro-button" href=""><i className="fa-thin fa-circle-play"></i>Intro Video</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutCompany