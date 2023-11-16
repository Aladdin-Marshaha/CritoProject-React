import React from 'react'
import "./YellowSection.css"
import Kristine from "../../images/Kristine.svg"
import Mark from "../../images/Mark.svg"
import Kimberly from "../../images/Kimberly.svg"
import Justin from "../../images/Justin.svg"
import stars from "../../images/Stars.svg"
import Cassandra from "../../images/Cassandra.svg"
import Amanda from "../../images/Amanda.svg"
import Jack from "../../images/Jack.svg"
import Button from "../../generics/Button"
import Members from '../../generics/Members/Members'
import Testimonial from '../../generics/Testimonial/Testimonial'
 

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
                    <Members img={Kristine} name='Kristine Palmer' text='Chef Operation Officer' />
                    <Members img={Mark} name='Mark Aubri' text='Senior Consultant' />
                    <Members img={Kimberly} name='Kimberly Hansen' text='Senior Consultant' />
                    <Members img={Justin} name='Justin Willoman' text='Senior Tech Consultant' />
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
                    <Testimonial stars={stars} img={Cassandra} name= 'Cassandra Warren' profession='Business Manager, Dorfus' text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"' />
                    <Testimonial stars={stars} img={Amanda} name= 'Amanda Tulling' profession='Senior Developer, Square' text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"' />
                    <Testimonial stars={stars} img={Jack} name= 'Jack McDogglas' profession='Key Account Manager, Gobona' text='"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"' />
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