import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
  return (
    <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="index.html" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="about.html" class="nav__link nav__link--active"
              >About Me</a
            >
          </li>
          <li class="nav__item">
            <a href="projects.html" class="nav__link">My Projects</a>
          </li>
          <li class="nav__item">
            <a href="contact.html" class="nav__link">Contact</a>
          </li>
        </ul>
      </nav>

  )
}

export default Navbar

