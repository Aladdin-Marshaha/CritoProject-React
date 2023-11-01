import React from 'react'
import "./LeaveMessage.css"

const LeaveMessage = () => {
  return (
    <>
        <section class="message">
            <div class="container">
                <p>Leave us a message </p>
                <p>for any information.</p>
                <form action="" method="post">
                    <input type="name" name="name" placeholder="Name*" required autofocus/>
                    <input type="Email" name="Email" id="" placeholder="Email*" required/>
                    <textarea name="message" id="message" cols="0" rows="6" placeholder="Your Message*" required></textarea>
                    <button class="btn-yellow">Send Message<i class="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    </>
  )
}

export default LeaveMessage