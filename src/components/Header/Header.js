import React from "react"
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>DREAMJOB.</h1>

        <img src="/assets/waves.svg" alt="waves" />
      </div>
      <div className="header__menu">
        <span>Home</span>
        <span>Job Seekers</span>
        <span>Post A Job</span>
        <span>Contact Us</span>
      </div>
      <div className="header__account">
        <span className="sign-in">Sign In</span>
        <span className="free-trial">Free Trial</span>
      </div>
    </div>
  )
}

export default Header
