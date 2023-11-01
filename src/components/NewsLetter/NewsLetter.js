import React from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  return (
    <>
        <section className="newsletter">
            {/* <img className="bakground-lines-right" src="images/bakground-lines-right.svg" alt=""/> */}
            <div className="container">
                <h2> Get News Updates By Signup  </h2>
                <form>
                    <input type="text" placeholder="username@domain.com"/>
                    <button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section> 
    </>
  )
}

export default NewsLetter