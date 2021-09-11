import React from 'react'
import Intro from '../intro/intro'
import Portfolio from '../portfolio/portfolio'
import Portfolio2 from '../portfolio2/portfolio2'
import Profile from '../profile/profile'
import Skills from '../skills/skills'

const Body = () => {
  return (
    <div>
      <Profile />
      <Intro />
      <Portfolio />
      <Portfolio2 />
      <Skills />
    </div>
  )
}

export default Body
