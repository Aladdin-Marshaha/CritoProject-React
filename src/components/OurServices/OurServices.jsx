import React from 'react';
import "./OurServices.css";
import Button from "../../generics/Button"
import ServiceBox from '../../generics/ServiceBox/ServiceBox';

const OurServices = () => {
  return (
    <>
        <section className="our-services">
            <div className="container">
                <div className="title"> 
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div className="boxes">
                    <ServiceBox title='Business Advice' paragraf='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
                    <ServiceBox title='Startup Business' paragraf='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
                    <ServiceBox title='Financial Advice' paragraf='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
                    <ServiceBox title='Risk Management' paragraf='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.' />
                </div>
                <div className="center-content">
                    <Button text="Browse Services" />
                </div>       
            </div>
            <img src="images/right-white-line.svg" alt=""/>
        </section>
    </>
  )
}

export default OurServices;