import React from 'react'
import { Link } from 'react-router-dom'

const WhyChooseUsParts = ({img, title, paragraf}) => {
  return (
    <>
        <Link className="box">
            <img src={img}/>
            <div>
                <h5>{title}</h5>
                <p>{paragraf}</p>
            </div>
        </Link>
    </>
  )
}

export default WhyChooseUsParts