import React from 'react'
import logo from "/Web Development/React/react-app/src/assests/Frame 2 1.png"
import styles from "./Navigation.module.css"

export const Navigation = () => {
  console.log(styles)
  return (
    <nav className='{styles.navigation}'>
        <div className='logo'>
        <img src={logo} alt="Logo" />
        </div>

        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
    
  )
}
