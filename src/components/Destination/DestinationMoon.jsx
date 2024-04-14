import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import Moon from "../../images/Moon.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='destination'>
            <Navbar />
            <div className="destinationMain w3-container w3-center w3-animate-right">
                <h2><p>01</p> Pick your destination</h2>

                <div className='destinationContent'>
                    <img src={Moon} alt="" />
                    <div className="destinationTexts">
                        <ul>
                            <NavLink to={'/destination'}>Moon</NavLink>
                            <NavLink to={'/destination/mars'}>Mars</NavLink>
                            <NavLink to={'/destination/europa'}>Europa</NavLink>
                            <NavLink to={'/destination/titan'}>Titan</NavLink>
                        </ul>
                        <h1>Moon</h1>
                        <p>See our planet as you’ve never seen it before.
                            A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there,
                            take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <hr />
                        <div className='destinationEndTexts' style={{ display: "flex" }}>
                            <div>
                                <h5>AVG. DISTANCE</h5>
                                <h3>384,400 km</h3>
                            </div>
                            <div>
                                <h5>Est. travel time</h5>
                                <h3>3 days</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader