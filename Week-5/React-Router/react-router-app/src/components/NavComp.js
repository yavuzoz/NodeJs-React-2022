import React from 'react';

import "../App.css"

function NavComp({Link}) {
    return (
      <nav>
        <ul className="nav-links">
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
  

export default NavComp