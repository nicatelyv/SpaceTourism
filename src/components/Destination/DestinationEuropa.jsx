import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import Europa from "../../images/Europa.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='destination'>
            <Navbar />
            <div className="destinationMain w3-container w3-center w3-animate-right">
                <h2><p>01</p> Pick your destination</h2>

                <div className='destinationContent'>
                    <img src={Europa} alt="" />
                    <div className="destinationTexts">
                        <ul>
                            <NavLink style={{ border: "none" }} to={'/destination'}>Moon</NavLink>
                            <NavLink to={'/destination/mars'}>Mars</NavLink>
                            <NavLink to={'/destination/europa'}>Europa</NavLink>
                            <NavLink to={'/destination/titan'}>Titan</NavLink>
                        </ul>
                        <h1>Eurpoa</h1>
                        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                        <hr />
                        <div className='destinationEndTexts' style={{ display: "flex" }}>
                            <div>
                                <h5>AVG. DISTANCE</h5>
                                <h3>628 MIL. km</h3>
                            </div>
                            <div>
                                <h5>Est. travel time</h5>
                                <h3>3 years</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader