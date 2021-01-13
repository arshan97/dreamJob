import React from "react"
import "./subscribe.scss"

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe__wrapper">
        <h1 className="title">Subscribe to our newsletter for the weekly updates.</h1>
        <div className="submit">
          <img src="/assets/mail.svg" alt="mail" />
          <input type="email" />
          <span>Subscribe</span>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
