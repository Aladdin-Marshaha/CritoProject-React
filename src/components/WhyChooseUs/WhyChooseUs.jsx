import React from 'react'
import "./WhyChooseUs.css"
import icon1 from "../../images/icon-1.svg"
import icon2 from "../../images/icon-2.svg"
import icon3 from "../../images/icon-3.svg"
import icon4 from "../../images/icon-4.svg"
import twoWomans from "../../images/two-womans.svg"
import bakPicture from "../../images/gray-bak-picture.svg"

const WhyChooseUs = () => {
  return (
    <>
        <section className="why-choose-us">
            <div className="container">
                <div className="left">
                    <div className="section-title">
                        <p>Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                    <div className="boxes">
                        <a href="http://" className="box">
                            <img src={icon1} alt=""/>
                            <div>
                                <h5>Process Excellence</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                        <a href="http://" className="box">
                            <img src={icon2} alt=""/>
                            <div>
                                <h5>Strategic Planning</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                        <a href="http://" className="box">
                            <img src={icon3} alt="" />
                            <div>
                                <h5>Experience Design</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                        <a href="http://" className="box">
                            <img src={icon4} alt=""/>
                            <div>
                                <h5>Artificial Inteligence</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <img className="tow-womans" src={twoWomans} alt="" />
                    <img className="bak-picture" src={bakPicture} alt=""/>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default WhyChooseUs