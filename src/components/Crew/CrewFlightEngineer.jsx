import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import FlightEngineer from "../../images/FlightEngineer.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='crew'>
            <Navbar />
            <div className="crewMain w3-container w3-center w3-animate-top">
                <h2><p>02</p> Meet your crew</h2>
                <div className='crewContent'>
                    <div className="crewTexts">
                        <h3>Flight Engineer</h3>
                        <h1>Anousheh Ansari</h1>
                        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                        <ul>
                            <NavLink style={{ backgroundColor: "gray" }} to={'/crew'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                    </div>
                    <img src={FlightEngineer} alt="" />
                </div>


                <div className='crewContentMobile'>
                    <img src={FlightEngineer} alt="" />
                    <div className="crewTexts">
                        <ul>
                            <NavLink to={'/crew/commander'}></NavLink>
                            <NavLink to={'/crew/mission-specialist'}></NavLink>
                            <NavLink to={'/crew/pilot'}></NavLink>
                            <NavLink to={'/crew/flight-engineer'}></NavLink>
                        </ul>
                        <h3>Flight Engineer</h3>
                        <h1>Anousheh Ansari</h1>
                        <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader