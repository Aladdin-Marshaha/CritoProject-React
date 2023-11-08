import React from 'react'
import "./ShowCase.css"
// import bakgroundLine from "../../images/bakground-1.svg"
import ShowCaseImage from '../../images/showcase-imge.svg'
import Button from '../../generics/Button'

const ShowCase = () => {
  return (
    <div>
        <section className="showcase">
            {/* <img  src={bakgroundLine} alt="bakground-1" /> */}
            <div className="container">
                <div className="content"> 
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <Button className="button1" type="yellow" text = "Get Consulting" url = "consulting.html" />
                    <Button type="" text = "Learn More" url = "services.html" /> 
                </div>
                <img src={ShowCaseImage} alt="image of a man in a suit with a tablet" />
            </div>
        </section>
    </div>
  )
}

export default ShowCase