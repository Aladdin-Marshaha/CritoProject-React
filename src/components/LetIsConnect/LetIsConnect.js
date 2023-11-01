import React from 'react'
import "./LetIsConnect.css"
import LineImage from "../../images/line-in-contact.svg"

const LetIsConnect = () => {
  return (
    <>
        <section className="connect">
            <div className="container">
                <a href="index.html">Home</a>
                <a href="connect.html">Contact</a>
                <p>Let’s Connect</p>
            </div>
            <img className="line" src={LineImage} alt=""/>
        </section>
    </>
  )
}

export default LetIsConnect