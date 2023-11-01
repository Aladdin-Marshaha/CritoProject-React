import React from 'react'
import "./Header.css"
import Logo from "../../images/Logo.svg"

const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <a href="index.html"><img src={Logo} alt="crito logotype" /></a>
                <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <div className="content-box">
                                <i className="fa-sharp fa-regular fa-phone-volume"></i>
                                +46 (8) 121 470 50
                            </div>
                            <div className="content-box">
                                <i className="fa-regular fa-envelope"></i>
                                info@crito.com
                            </div>
                            <div className="content-box last" >
                                <i className="fa-sharp fa-regular fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>
                        </div>
                        <div className="social-media">
                            <a href="http://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="http://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="http://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="http://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>

                        </div>
                    </div>
                    <div className="main-menu">
                        <nav>
                            <a href="index.html">Home</a>
                            <a href="services.html">Service</a>
                            <a href="news.html">News</a>
                            <a href="connect.html">Contact</a>
                        </nav>
                        <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a> 
                    </div>
                </div>
            </div>

        </header>
    </>
  )
}

export default Header