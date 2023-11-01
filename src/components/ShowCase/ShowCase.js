import React from 'react'
import "./ShowCase.css"
// import bakgroundLine from "../../images/bakground-1.svg"
import ShowCaseImage from '../../images/showcase-imge.svg'

const ShowCase = () => {
  return (
    <div>
        <section className="showcase">
            {/* <img  src={bakgroundLine} alt="bakground-1" /> */}
            <div className="container">
                <div className="content"> 
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                    <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <img src={ShowCaseImage} alt="image of a man in a suit with a tablet" />
            </div>
        </section>
    </div>
  )
}

export default ShowCase