import React, { useState } from "react"
import "./jobseeker-section.scss"

const JobSeekerSection = () => {
  const data = [
    {
      image: "/assets/Ellipse.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Nick",
      position: "React Developer",
    },
    {
      image: "/assets/blue-box.svg",
      description: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Harry",
      position: "Javascript Developer",
    },
    {
      image: "/assets/yellow-box.svg",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Ron",
      position: "Java Developer",
    },
    {
      image: "/assets/pink-box.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli.",
      author: "James",
      position: "UI Developer",
    },
  ]

  let counter = 0

  const [current, setCurrent] = useState(data[0])

  const handleBack = () => {}

  const handleForward = (e) => {
    counter++
    setCurrent(data[counter])
  }

  return (
    <div className="jobseeker-section">
      <div className="jobseeker-section__logo">
        <img src={current.image} alt="people" />
      </div>

      <div className="jobseeker-section__about">
        <h1>What our Jobseekers said.</h1>
        <p>{current.description}</p>
        <h2>{current.author}</h2>
        <p>{current.position}</p>
        <div className="jobseeker-section__about__buttons">
          <img className="back" alt="back-arrow" onClick={handleBack} src="/assets/back-arrow.svg" />
          <img className="forward" alt="forward-arrow" onClick={handleForward} src="/assets/forward-arrow.svg" />
        </div>
      </div>
    </div>
  )
}

export default JobSeekerSection
