import React from 'react'
import { Link } from 'react-router-dom'

const ServiceBox = ({title, paragraf}) => {
  return (
    <>
        <Link to="#">
            <div className="streck">____</div>
            <h3> {title} </h3>
            <p> {paragraf} </p>
            <div className="pil"><i className="fa-solid fa-circle-arrow-right" style={{ color: '#000000' }}></i></div>
        </Link> 
    </>
  )
}

export default ServiceBox