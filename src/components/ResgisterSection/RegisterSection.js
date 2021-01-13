import React from "react"
import "./register-section.scss"

const RegisterSection = () => {
  return (
    <div className="register-section">
      <div className="register-section__about">
        <h1>
          Build and Boost <br />
          your great profile
        </h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
        <button>Register Now</button>
      </div>

      <div className="register-section__image">
        <img src="/assets/people.png" />
      </div>
    </div>
  )
}

export default RegisterSection
