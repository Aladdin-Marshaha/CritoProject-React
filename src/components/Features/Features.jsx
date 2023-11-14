import React from 'react'
import "./Features.css"
import Button from '../../generics/Button'
import FeaturesParts from '../../generics/FeaturesParts/FeaturesParts'
import icon1 from '../../images/icon-hands.svg'
import icon2 from '../../images/icon-light.svg'
import icon3 from '../../images/icon-gowingupp.svg'
import icon4 from '../../images/icon-box.svg'
const Features = () => {
  return (
    <>
        <section className="features">
            <div className="container">
                <div className="section-left">
                    <a href="http://"> 
                        <p> Features </p>
                        <h3> Our Accounting is trusted by thousand of companies </h3>
                        <Button type = "yellow" text="Learn More" url =""/>
                        </a>
                </div>
                <div className="section-right"> 
                    <FeaturesParts img={icon1} Title='Business Advice' paragraf='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                    <FeaturesParts img={icon2} Title='Startup Business' paragraf='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                    <FeaturesParts img={icon3} Title='Financial Advice' paragraf='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                    <FeaturesParts img={icon4} Title='Risk Management' paragraf='Lorem ipsum, dolor sit amet consectetur adipisicing elit.' />
                </div>  
            </div>
        </section>
    </>
  )
}

export default Features