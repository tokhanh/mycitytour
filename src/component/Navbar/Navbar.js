import React from 'react'
import logo from './logo.png'
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
           <img src={logo}></img>
           <ul className="nav-links">
               <li><a href="/" className="nav-link">Home</a></li>
           
           
               <li><a href="/" className="nav-link">Contact</a></li>
           
           
               <li><a href="/" className="nav-link active">About</a></li>
           </ul>

        </nav>
    )
}
