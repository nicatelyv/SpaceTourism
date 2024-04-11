import React, { useState } from 'react'
import "./style.scss"
import NavbarIcon from "../../images/NavbarIcon.png"
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [mobilenav, setMobilenav] = useState(false)
    function mobilnav() {
        setMobilenav(!mobilenav)
    }

    return (
        <nav>
            <NavLink to={"/"}><img className='navIcon' src={NavbarIcon} alt="Icon" /></NavLink>
            <div className='line'></div>
            <ul>
                <NavLink to={'/'}><p>00</p> Home</NavLink>
                <NavLink to={'/destination/moon'}><p>01</p> Destination</NavLink>
                <NavLink to={'/crew/commander'}><p>02</p> Crew</NavLink>
                <NavLink to={'/technology/launch-vehicle'}><p>03</p> Technology</NavLink>
            </ul>
            <i onClick={mobilnav} className="fa-solid fa-bars"></i>
            {mobilenav &&
                <div className='mobilenav'>
                    <i onClick={mobilnav} className="fa-solid fa-xmark"></i>
                    <ul className='mobileList'>
                        <NavLink to={'/'}><p>00</p> Home</NavLink>
                        <NavLink to={'/destination/moon'}><p>01</p> Destination</NavLink>
                        <NavLink to={'/crew/commander'}><p>02</p> Crew</NavLink>
                        <NavLink to={'/technology/launch-vehicle'}><p>03</p> Technology</NavLink>
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Navbar