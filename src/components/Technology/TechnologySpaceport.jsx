import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import Spaceport from "../../images/Spaceport.png"
import { NavLink } from 'react-router-dom'

function Technology() {
    return (
        <div className='technology'>
            <Navbar />
            <div className="technologyMain w3-container w3-center w3-animate-left">
                <h2><p>03</p> SPACE LAUNCH 101</h2>
                <div className='technologyContent'>
                    <img className='mobileImg' src={Spaceport} alt="" />
                    <ul>
                        <NavLink style={{ backgroundColor: "inherit", color: "white" }} to={'/technology'}>1</NavLink>
                        <NavLink to={'/technology/spaceport'}>2</NavLink>
                        <NavLink to={'/technology/space-capsule'}>3</NavLink>
                    </ul>
                    <div className="technologyTexts">
                        <h3>THE TERMINOLOGY…</h3>
                        <h1>SPACEPORT</h1>
                        <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                    </div>
                    <img className='technologyImg' src={Spaceport} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technology