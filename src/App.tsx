import React from 'react'

// router
import { Routes, Route } from 'react-router-dom'

// styles & assets
import './App.scss'

// components
import TheNavigation from './components/TheNavigation'

// views
import Home from './views/Home'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {
    return (
        <div className="App">
            <header>
                <TheNavigation />
            </header>
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tunes" element={<Tunes />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <footer></footer>
        </div>
    )
}

export default App
