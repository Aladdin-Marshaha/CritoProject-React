import React from 'react'
import "./ContactInformation.css"
import VisitUs from "../../images/visit-us.svg"
import CallUS from "../../images/call-us.svg"
import EmailUs from "../../images/email-us.svg"

const ContactInformation = () => {
  return (
    <>
        <section className="contact-information">
            <div className="container">
                <div className="parent">
                    <img src={VisitUs} alt=""/>
                    <div className="child">
                        <h5>Visit us</h5>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="parent">
                    <img src={CallUS} alt=""/>
                    <div className="child">
                        <h5>Call us</h5>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="parent">
                    <img src={EmailUs} alt=""/>
                    <div className="child">
                        <h5>Email us</h5>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
        </section>  
    </>
  )
}

export default ContactInformation