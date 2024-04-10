import React from 'react'
import "./style.scss"
import Navbar from "../../layout/navbar/Navbar"

function HomeHeader() {
  return (
    <div className='homeHeader'>
      <Navbar />
      <div className='homeTexts'>
        <div>
          <h4 className='w3-container w3-center w3-animate-bottom'>SO, YOU WANT TO TRAVEL TO</h4>
          <h1 className='w3-container w3-center w3-animate-bottom'>SPACE</h1>
          <p className='w3-container w3-center w3-animate-bottom'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='explore w3-container w3-center w3-animate-bottom'>Explore</div>
      </div>
    </div>
  )
}

export default HomeHeader