import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import Titan from "../../images/Titan.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='destination'>
            <Navbar />
            <div className="destinationMain w3-container w3-center w3-animate-right">
                <h2><p>01</p> Pick your destination</h2>

                <div className='destinationContent'>
                    <img src={Titan} alt="" />
                    <div className="destinationTexts">
                        <ul>
                            <NavLink to={'/destination/moon'}>Moon</NavLink>
                            <NavLink to={'/destination/mars'}>Mars</NavLink>
                            <NavLink to={'/destination/europa'}>Europa</NavLink>
                            <NavLink to={'/destination/titan'}>Titan</NavLink>
                        </ul>
                        <h1>Titan</h1>
                        <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                        <hr />
                        <div className='destinationEndTexts' style={{ display: "flex" }}>
                            <div>
                                <h5>AVG. DISTANCE</h5>
                                <h3>1.6 BIL. km</h3>
                            </div>
                            <div>
                                <h5>Est. travel time</h5>
                                <h3>7 years</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader