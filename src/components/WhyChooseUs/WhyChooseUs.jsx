import React from 'react'
import "./WhyChooseUs.css"
import icon1 from "../../images/icon-1.svg"
import icon2 from "../../images/icon-2.svg"
import icon3 from "../../images/icon-3.svg"
import icon4 from "../../images/icon-4.svg"
import twoWomans from "../../images/two-womans.svg"
import bakPicture from "../../images/gray-bak-picture.svg"
import WhyChooseUsParts from '../../generics/WhyChooseUsParts/WhyChooseUsParts'

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
                        <WhyChooseUsParts img={icon1}  title='Process Excellence' paragraf='Lorem, ipsum dolor sit amet consectetur.'/>
                        <WhyChooseUsParts img={icon2}  title='Strategic Planning' paragraf='Lorem, ipsum dolor sit amet consectetur.'/>
                        <WhyChooseUsParts img={icon3}  title='Experience Design' paragraf='Lorem, ipsum dolor sit amet consectetur.'/>
                        <WhyChooseUsParts img={icon4}  title='Artificial Inteligence' paragraf='Lorem, ipsum dolor sit amet consectetur.'/>
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