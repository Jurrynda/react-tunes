import React from 'react'
import { NavLink } from 'react-router-dom'

// styles & assets
import './TheNavigation.scss'

const TheNavigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/tunes">Tunes</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default TheNavigation
