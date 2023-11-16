import React from 'react'

const Members = ({img, name, text}) => {
  return (
    <>
        <div className="box">
            <img src={img}/>
            <div className="name"> {name} </div>
            <p> {text} </p>
        </div>
    </>
  )
}

export default Members