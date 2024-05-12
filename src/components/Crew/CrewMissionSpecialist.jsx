import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import CrewMissionSpecialist from "../../images/CrewMissionSpecialist.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='crew'>
            <Navbar />
            <div className="crewMain w3-container w3-center w3-animate-top">
                <h2><p>02</p> Meet your crew</h2>
                <div className='crewContent'>
                    <div className="crewTexts">
                        <h3>Mission Specialist </h3>
                        <h1>MARK SHUTTLEWORTH</h1>
                        <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                        <ul>
                            <NavLink style={{ backgroundColor: "gray" }} to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                    </div>
                    <img src={CrewMissionSpecialist} alt="" />
                </div>


                <div className='crewContentMobile'>
                    <img src={CrewMissionSpecialist} alt="" />
                    <div className="crewTexts">
                        <ul>
                            <NavLink style={{ backgroundColor: "gray" }} to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                        <h3>Mission Specialist </h3>
                        <h1>MARK SHUTTLEWORTH</h1>
                        <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader