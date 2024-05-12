import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import DouglasHurley from "../../images/DouglasHurley.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='crew'>
            <Navbar />
            <div className="crewMain w3-container w3-center w3-animate-top">
                <h2><p>02</p> Meet your crew</h2>
                <div className='crewContent'>
                    <div className="crewTexts">
                        <h3>Commander</h3>
                        <h1>Douglas Hurley</h1>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        <ul>
                            <NavLink to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                    </div>
                    <img src={DouglasHurley} alt="" />
                </div>


                <div className='crewContentMobile'>
                    <img src={DouglasHurley} alt="" />
                    <div className="crewTexts">
                        <ul>
                            <NavLink to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                        <h3>Commander</h3>
                        <h1>Douglas Hurley</h1>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader