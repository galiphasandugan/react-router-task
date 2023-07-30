import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <NavLink to="/" class="nav__link" 
            style={({isActive})=>{
              return {color: isActive ? "#ff652f" :"inherit" }
            }} >Home</NavLink>
          </li>
          <li class="nav__item">
            <NavLink  to="/about" class="nav__link nav"
            style={({isActive})=>{
              return {color: isActive ? "#ff652f" :"inherit" }
            }} >About Me</NavLink>
          </li>
          <li class="nav__item">
            <NavLink to="/projects" class="nav__link"
            style={({isActive})=>{
              return {color: isActive ? "#ff652f" :"inherit" }
            }} >My Projects</NavLink>
          </li>
          <li class="nav__item">
            <NavLink to="/contact" class="nav__link"
            style={({isActive})=>{
              return {color: isActive ? "#ff652f" :"inherit" }
            }} >Contact</NavLink>
          </li>
        </ul>
      </nav>

  )
}

export default Navbar

