import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import SpaceCapsule from "../../images/SpaceCapsule.png"
import { NavLink } from 'react-router-dom'

function Technology() {
    return (
        <div className='technology'>
            <Navbar />
            <div className="technologyMain w3-container w3-center w3-animate-left">
                <h2><p>03</p> SPACE LAUNCH 101</h2>
                <div className='technologyContent'>
                    <img className='mobileImg' src={SpaceCapsule} alt="" />
                    <ul>
                        <NavLink to={'/technology/launch-vehicle'}>1</NavLink>
                        <NavLink to={'/technology/spaceport'}>2</NavLink>
                        <NavLink to={'/technology/space-capsule'}>3</NavLink>
                    </ul>
                    <div className="technologyTexts">
                        <h3>THE TERMINOLOGY…</h3>
                        <h1>SPACE CAPSULE</h1>
                        <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                    </div>
                    <img className='technologyImg' src={SpaceCapsule} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technology