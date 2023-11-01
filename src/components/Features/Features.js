import React from 'react'
import "./Features.css"
const Features = () => {
  return (
    <>
        <section className="features">
            <div className="container">
                <div className="section-left">
                    <a href="http://"> 
                        <p> Features </p>
                        <h3> Our Accounting is trusted by thousand of companies </h3>
                        <div className="btn-yellow"> Learn More <i className="fa-regular fa-arrow-up-right"></i></div>
                        </a>
                </div>
                <div className="section-right"> 
                    <a href="http://"> 
                        <img src="images/icon-hands.svg" alt=""/>
                        <h5> Business Advice </h5>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                        </a>
                    <a href="http://"> 
                        <img src="images/icon-light.svg" alt=""/>
                        <h5> Startup Business </h5>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </a>
                    <a href="http://"> 
                        <img src="images/icon-gowingupp.svg" alt=""/>
                        <h5> Financial Advice </h5>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </a>
                    <a href="http://"> 
                        <img src="images/icon-box.svg" alt=""/>
                        <h5> Risk Management </h5>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    </a>
                </div>  
            </div>
        </section>
    </>
  )
}

export default Features