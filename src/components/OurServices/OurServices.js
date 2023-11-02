import React from 'react';
import "./OurServices.css";
import Button from "../../generics/Button"

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
                    <a href="http://">
                        <div class="streck">____</div>
                        <h3> Business Advice </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="pil"><i className="fa-solid fa-circle-arrow-right" style={{ color: '#000000' }}></i></div>
                    </a>
                    <a href="http://">
                        <div class="streck">____</div>
                        <h3> Startup Business </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="pil"><i className="fa-solid fa-circle-arrow-right" style={{ color: '#000000' }}></i></div>
                    </a>
                    <a href="http://">
                        <div class="streck">____</div>
                        <h3> Financial Advice </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="pil"><i className="fa-solid fa-circle-arrow-right" style={{ color: '#000000' }}></i></div>
                    </a>
                    <a href="http://">
                        <div class="streck">____</div>
                        <h3> Risk Management </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="pil"><i className="fa-solid fa-circle-arrow-right" style={{ color: '#000000' }}></i></div>
                    </a>
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
