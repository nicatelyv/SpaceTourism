import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import LaunchVehicle from "../../images/LaunchVehicle.png"
import { NavLink } from 'react-router-dom'

function Technology() {
    return (
        <div className='technology'>
            <Navbar />
            <div className="technologyMain w3-container w3-center w3-animate-left">
                <h2><p>03</p> SPACE LAUNCH 101</h2>
                <div className='technologyContent'>
                    <img className='mobileImg' src={LaunchVehicle} alt="" />
                    <ul>
                        <NavLink to={'/technology'}>1</NavLink>
                        <NavLink to={'/technology/spaceport'}>2</NavLink>
                        <NavLink to={'/technology/space-capsule'}>3</NavLink>
                    </ul>
                    <div className="technologyTexts">
                        <h3>THE TERMINOLOGY…</h3>
                        <h1>LAUNCH VEHICLE</h1>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    <img className='technologyImg' src={LaunchVehicle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technology