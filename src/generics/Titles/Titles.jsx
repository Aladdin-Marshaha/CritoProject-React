import React from 'react'
import './Titles.css'

const Titles = ({p, H2}) => {
  return (
    <>
    <div className='Title'>
        <p className='p'>{p}</p>
        <h2 className='H2'>{H2}</h2> 
    </div>
    </>
  )
}

export default Titles