import React from 'react'
import "./NewsLetter.css"
import Button from "../../generics/Button"

const NewsLetter = () => {
  return (
    <>
        <section className="newsletter">
            {/* <img className="bakground-lines-right" src="images/bakground-lines-right.svg" alt=""/> */}
            <div className="container">
                <h2> Get News Updates By Signup  </h2>
                <form>
                    <input type="text" placeholder="username@domain.com"/>
                    <Button type = "yellow" text = "Subscribe"/>
                </form>
            </div>
        </section> 
    </>
  )
}

export default NewsLetter