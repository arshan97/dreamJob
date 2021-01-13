import React from "react"

export const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt="logo" />
      <p className="card__description">{title}</p>

      <p className="card__secondary-description">{description}</p>
    </div>
  )
}
