import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo'  className='logo'/>
      <div className='desktopMenu'>
          <Link className='desktopMenuItemList'>Home</Link>
          <Link className='desktopMenuItemList'>About</Link>
          <Link className='desktopMenuItemList'>Portfolio</Link>
          <Link className='desktopMenuItemList'>Clients</Link>
      </div>
      <button className='desktopMenuBtn'>
        <img src='' alt='' className='desktopMenuImg' /> Contact Me </button>
      </nav>
  )
}

export default Navbar