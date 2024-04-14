import React from 'react'
import Navbar from '../../layout/navbar/Navbar'
import "./style.scss"
import Mars from "../../images/Mars.png"
import { NavLink } from 'react-router-dom'

function DestinationHeader() {
    return (
        <div className='destination'>
            <Navbar />
            <div className="destinationMain w3-container w3-center w3-animate-right">
                <h2><p>01</p> Pick your destination</h2>

                <div className='destinationContent'>
                    <img src={Mars} alt="" />
                    <div className="destinationTexts">
                        <ul>
                            <NavLink style={{ border: "none" }} to={'/destination'}>Moon</NavLink>
                            <NavLink to={'/destination/mars'}>Mars</NavLink>
                            <NavLink to={'/destination/europa'}>Europa</NavLink>
                            <NavLink to={'/destination/titan'}>Titan</NavLink>
                        </ul>
                        <h1>Mars</h1>
                        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                        <hr />
                        <div className='destinationEndTexts' style={{ display: "flex" }}>
                            <div>
                                <h5>AVG. DISTANCE</h5>
                                <h3>225 MIL. km</h3>
                            </div>
                            <div>
                                <h5>Est. travel time</h5>
                                <h3>9 months</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationHeader