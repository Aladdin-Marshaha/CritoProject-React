import React from 'react'
import './Footer.css';
import crito from "../../images/Logo-in-foot.svg"

const Footer = () => {
  return (
    <>
      <section className="last-section">
        <img className="line" src="images/gray-line-in-thefoot.svg" alt=""/>
        <div className="container">
            <div className="logo"> 
                <img className="crito" src={crito} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="box1 boxes" >
                <p>Company</p>
                <a href="">About </a>
                <a href="">Features</a>
                <a href="">Works</a>
                <a href="">Career</a>
            </div>
            <div  className="box2 boxes">
                <p>Help</p>
                <a href="">Customer Support</a>
                <a href="">Delivery Details</a>
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
            <div className="box3 boxes">
                <p>Resources</p>
                <a href="">Free eBooks</a>
                <a href="">Development Tutorial</a>
                <a href="">How to - Blog</a>
                <a href="">Youtube Playlist</a>
            </div>
            <div className="box4 boxes">
                <p>Link</p>
                <a href="">Free eBooks</a>
                <a href="">Development Tutorial</a>
                <a href="">How to - Blog</a>
                <a href="">Youtube Playlist</a>
            </div>
        </div>
     </section>
      <div className='footer'> 
        <div className="container">
            <section className="the-foot">
                <div className="crito"> © 2023 Crito - Consulting Company Inc. All Rights Reserved. </div>
                <div className="social-media">
                    <a href="http://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="http://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="http://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="http://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </section>
        </div>
      </div>
   </>
  
  )
}

export default Footer