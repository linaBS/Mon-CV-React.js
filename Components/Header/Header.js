import React from 'react'
import '../Header/Header.css'
//import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
    <div className="logo">LINA BOUSALEM</div>
    <nav>
      <ul>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);}


export default Header 
/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link> 
        */