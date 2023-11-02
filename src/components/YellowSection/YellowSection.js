import React from 'react'
import "./YellowSection.css"
import Kristine from "../../images/Kristine.svg"
import Mark from "../../images/Mark.svg"
import Kimberly from "../../images/Kimberly.svg"
import Justin from "../../images/Justin.svg"
import Stars from "../../images/Stars.svg"
import Cassandra from "../../images/Cassandra.svg"
import Amanda from "../../images/Amanda.svg"
import Jack from "../../images/Jack.svg"
import Button from "../../generics/Button"
 

const YellowSection = () => {
  return (
    <>
        <section className="yellow-section">
            <div className="container">
                <div className="first-part">
                    <p>Meet Our Team</p>
                    <div className="h4-a">
                        <h4>Experience Team Members</h4>
                        <Button type = "yellow" text = "Browse Team"/>
                    </div>
                </div>
                <div className="team">
                    <div className="box">
                        <img src={Kristine} alt=""/>
                        <div className="name">Kristine Palmer</div>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="box">
                        <img src={Mark} alt=""/>
                        <div className="name">Mark Aubri</div>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="box">
                        <img src={Kimberly} alt=""/>
                        <div className="name">Kimberly Hansen</div>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="box">
                        <img src={Justin} alt=""/>
                        <div className="name">Justin Willoman</div>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="center-content">
                    <img src="images/punkter.svg" alt=""/>
                </div>
            </div>
            <div className="container andra-container">
                <div className="center-content">
                    <p>Testimonial</p>
                    <h5>What Our Client Says</h5>
                </div>
                <div className="parent">
                    <div className="child">
                        <img src={Stars} alt="stars"/>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="client">
                            <img src={Cassandra} alt=""/>
                            <div className="client-info">
                                <div className="name">Cassandra Warren</div>
                                <p>Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <img src={Stars} alt="stars"/>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="client">
                            <img src={Amanda} alt=""/>
                            <div className="client-info">
                                <div className="name">Amanda Tulling</div>
                                <p>Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <img src={Stars} alt="stars"/>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="client">
                            <img src={Jack} alt=""/>
                            <div className="client-info">
                                <div className="name">Jack McDogglas</div>
                                <p>Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center-content">
                    <Button type = "black" text = "All Reviews"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default YellowSection