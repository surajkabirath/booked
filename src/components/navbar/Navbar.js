// import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
          <div className="logo">
          <h1>S<span>e</span>n<span>s</span>i<span>t</span>i<span>v</span>e</h1>
          </div>
          <div className="navItems">
              <button className="navButton">Register</button>
              <button className="navButton">Login</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
