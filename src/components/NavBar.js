import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import '../App.css'
const NavBar = () => {
    return (
        <div className='container-fluid'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
            <a class="navbar-brand ml-5" href="/">React Breaking Bad</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-5">
                <li class="nav-item active">
                  <Link to='/'>Home</Link>
                </li>
                <li class="nav-item">
                  <Link to='/signup'>SignUp</Link>
                </li>
                <li class="nav-item">
                   <Link to='/login'>Login</Link>
                </li>
            </ul>
          </div>
          
      </nav>
        </div>
        
    )
}

export default NavBar
