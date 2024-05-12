import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import CrewPilot from "../../images/CrewPilot.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='crew'>
            <Navbar />
            <div className="crewMain w3-container w3-center w3-animate-top">
                <h2><p>02</p> Meet your crew</h2>
                <div className='crewContent'>
                    <div className="crewTexts">
                        <h3>PILOT</h3>
                        <h1>Victor Glover</h1>
                        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                        <ul>
                            <NavLink style={{ backgroundColor: "gray" }} to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                    </div>
                    <img src={CrewPilot} alt="" />
                </div>


                <div className='crewContentMobile'>
                    <img src={CrewPilot} alt="" />
                    <div className="crewTexts">
                        <ul>
                            <NavLink style={{ backgroundColor: "gray" }} to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                        <h3>PILOT</h3>
                        <h1>Victor Glover</h1>
                        <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader