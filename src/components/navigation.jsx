import React from 'react'
import logo from "../assests/logo.png"

const Navigation = () => {
  return (
    <nav>
    <div className='title'>
      <img src={logo} alt='logo'/>
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
  </nav>
  )
}

export default Navigation;
