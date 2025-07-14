import React from 'react'
import Hero from './section/Hero'
import ShowcasesSection from './section/ShowcasesSection'
import NavBar from './component/NavBar'
import LogoSection from './component/LogoSection'
import FeatureCards from './section/FeatureCard'
import ExperianceSection from './section/ExperianceSection'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcasesSection />
      <LogoSection />
      <FeatureCards />
      <ExperianceSection />
    </>
  )
}

export default App
