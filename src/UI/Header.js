import React from 'react'
import logo from '../images/logo.png'
import '../App'

const Header = () => {
    return (
        <header className="center">
            <img src={logo} alt="logo"/>
            <h2>BreakingBad Characters</h2>
        </header>
    )
}

export default Header
