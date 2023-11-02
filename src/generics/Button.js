import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const Button = ({type, text, url}) => {

  const GetButtonClassName = () => {
    switch(type) {
      case "yellow" :
        return "btn-yellow"
      case "black":
        return "btn-black"
      default:
        return "btn-transparent"
    }
  }

  return (
    <Link className={GetButtonClassName ()} to={url}>
      {text} 
      <i className="fa-regular fa-arrow-up-right"></i></Link>  
  )
}

export default Button