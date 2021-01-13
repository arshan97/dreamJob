import React, { useState } from "react"
import { Card } from "./Card"
import "./categories.scss"

const Categories = () => {
  const [cards, setCards] = useState(false)

  return (
    <div className="jobs-category">
      <div className="jobs-category__header">
        <div className="rectangle">
          <img src="/assets/rectangle.svg" alt="box" />
        </div>
        <div className="companies">
          <img src="/assets/companies.svg" alt="companies" />
        </div>
      </div>

      <div className="jobs-category__title">
        <h1>Browse Jobs By Category</h1>
      </div>

      <div className="jobs-category__cards">
        <Card icon="/assets/design.svg" title="Design & Development" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
        <Card icon="/assets/flask.svg" title="Science & Technologies" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
        <Card icon="/assets/desk.svg" title="Office Administrative" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
        <Card icon="/assets/office-building.svg" title="Property Development" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
        <Card icon="/assets/briefcase.svg" title="Property Development" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
        <Card icon="/assets/clipboard.svg" title="Admin & Accountant" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
        {cards ? (
          <>
            <Card icon="/assets/flask.svg" title="Science & Technologies" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
            <Card icon="/assets/desk.svg" title="Office Administrative" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
            <Card icon="/assets/office-building.svg" title="Property Development" description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." />
          </>
        ) : null}
      </div>

      <div className="jobs-category__button">
        <button onClick={() => setCards(!cards)}>{cards ? "Hide" : "Show all"} Categories</button>
      </div>
    </div>
  )
}

export default Categories
