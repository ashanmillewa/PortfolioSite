import React from 'react'
import './intro.css'
import bg from '../../assets/image.png' 
import { FaBagShopping } from "react-icons/fa6";
import {Link} from 'react-scroll'

const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Ashan</span><br/>Website Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating view</p>
                <Link><button className='btn'><FaBagShopping className='btnIcon'/>Hire Me</button></Link>
            </div>          
            <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default intro