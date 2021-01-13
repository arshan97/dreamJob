import React from "react"
import "./HeroSection.scss"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__jobs">
        <p className="hero-section__jobs__header">
          DREAM JOBS <br />
          Waiting For You!
        </p>

        <p className="hero-section__jobs__description">
          Search and find your dream job is now easier than ever. <br />
          Just browse a job and apply if you need to.
        </p>

        <div className="hero-section__jobs__button">
          <button>Get started</button>
        </div>
      </div>

      <div className="hero-section__image">
        <img src="/assets/1920.png" alt="girl" />
      </div>
    </div>
  )
}

export default HeroSection
