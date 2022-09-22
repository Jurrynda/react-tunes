import React from 'react'

// assets & styles
import logo from '../assets/logo.svg'
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <h1>Home</h1>
            <img className="logo" src={logo} alt="logo reactu" />
        </div>
    )
}

export default Home
