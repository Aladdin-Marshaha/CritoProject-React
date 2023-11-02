import React from 'react'
import "./Header.css"
import { NavLink, Link } from 'react-router-dom'
import Logo from "../../images/Logo.svg"
import Button from "../../generics/Button"
const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <Link to="/"><img src={Logo} alt="crito logotype" /></Link>
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
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contacts">Contact</NavLink>
                        </nav>
                        <Button type="yellow" text = "Login" url = "*" />
                    </div>
                </div>
            </div>

        </header>
    </>
  )
}

export default Header