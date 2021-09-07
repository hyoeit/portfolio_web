import React from 'react'
import Intro from '../intro/intro'
import Portfolio from '../portfolio/portfolio'
import Profile from '../profile/profile'
import Skills from '../skills/skills'

const Body = () => {
  return (
    <div>
      <Profile />
      <Intro />
      <Portfolio />
      <Skills />
    </div>
  )
}

export default Body
