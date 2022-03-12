import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <nav>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default NavComp