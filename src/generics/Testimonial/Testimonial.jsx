import React from 'react'

const Testimonial = ({text, img,stars, name,profession}) => {
  return (
    <>
        <div className="child">
            <img src={stars} alt="stars"/>
            <p> {text} </p>
            <div className="client">
                <img src={img} alt=""/>
                <div className="client-info">
                    <div className="name"> {name} </div>
                    <p> {profession} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial