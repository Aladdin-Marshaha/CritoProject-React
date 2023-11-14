import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesParts = ({img, Title, paragraf}) => {
  return (
    <>
        <Link to='#'> 
            <img src={img} alt={Title} />
            <h5>{Title}</h5>
            <p>{paragraf}</p>
        </Link>
    </>
  )
}

export default FeaturesParts