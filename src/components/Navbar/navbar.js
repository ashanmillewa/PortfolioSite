import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/logo.png'
import { SlSpeech } from "react-icons/sl";
import {Link} from 'react-scroll';


const Navbar = () => {
  const [showMenu, sethowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo'  className='logo'/>
      <div className='desktopMenu'>
        
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuItemList'>Clients</Link>
      </div>
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
      <SlSpeech className='desktopMenuIcon' /> Contact Me </button>
      
      <img src={menu} alt='Menu'  className='mobMenu' onClick={()=>sethowMenu(!showMenu)}/>
      <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
        
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => (false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => (false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => (false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => (false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => (false)}>Contact</Link>
      </div>
      
      </nav>

  )
}

export default Navbar