import React from 'react'
import './Logos.css';
import Logo_1 from "./../../images/Logos-raw-1.svg"
import Logo_2 from "./../../images/Logos-raw-2.svg"
import Logo_3 from "./../../images/Logos-raw-3.svg"
import Logo_4 from "./../../images/Logos-raw-4.svg"
import Logo_5 from "./../../images/Logos-raw-5.svg"

const Logos = () => {
  return (
    <>
        <section className="logos">
            <div className="container">
                <img src={Logo_1} alt=""/>
                <img src={Logo_2} alt=""/>
                <img src={Logo_3} alt=""/>
                <img src={Logo_4} alt=""/>
                <img src={Logo_5} alt=""/>
                </div>
        </section>
    </>
  )
}

export default Logos