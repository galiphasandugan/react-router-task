import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <footer class="vertical">
      <div class="social-icons">
        <a href="#">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="#">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
      <div class="copyright">&copy; Copyright 2023</div>
    </footer>
  )
}

export default Footer