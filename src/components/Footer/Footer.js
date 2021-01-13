import React from "react"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__category">
          <h1>Categories</h1>
          <div>
            <p>Content Writer</p>
            <p>Backend Developer</p>
            <p>Creative Director</p>
            <p>UI Developer</p>
          </div>
        </div>

        <div className="footer__resources">
          <h1>Resources</h1>
          <div>
            <p>Contact & Support</p>
            <p>Application</p>
            <p>FAQ</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="footer__company">
          <h1>Company</h1>
          <div>
            <p>About us</p>
            <p>Job Seminar</p>
            <p>Blog</p>
            <p>News</p>
          </div>
        </div>

        <div className="footer__legal">
          <h1>Legal</h1>
          <div>
            <p>Copyright</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
            <p>Terms</p>
          </div>
        </div>

        <div className="footer__about">
          <h2>DREAMJOB.</h2>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
          <div className="links">
            <img src="/assets/twitter.svg" alt="twitter" />
            <img src="/assets/google-plus.svg" alt="google" />
            <img src="/assets/facebook.svg" alt="facebook" />
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <h1>Copyright @ 2020 DREAMJOB. All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer
