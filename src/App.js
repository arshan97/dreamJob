import React from "react"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import JobSeekerSection from "./components/JobSeekerSection/JobSeekerSection"
import RegisterSection from "./components/ResgisterSection/RegisterSection"
import Subscribe from "./components/Subscribe/Subscribe"

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <RegisterSection />
      <JobSeekerSection />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
