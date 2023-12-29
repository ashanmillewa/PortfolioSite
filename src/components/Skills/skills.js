import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui.png' 
import WebDesign from '../../assets/web.png' 
import AppDesign from '../../assets/app.png' 

const skills = () => {
  return (
    <section id='skills'>
                <span className='skillTitle'>What I do,</span>
                <span className='skillDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe
                 r took a galley of type and scrambled it to make a type specimen book. </span>
                
                
                 <div className='skillBars'>
                <div className='skillBar'>
                  <img src={UIDesign} alt='' className='skillBarImg'/>
                  <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo text and you can write anything about your web development</p>
                  </div>
                  </div>
                </div>

                <div className='skillBars'>
                <div className='skillBar'>
                  <img src={WebDesign} alt='' className='skillBarImg'/>
                  <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is demo text and you can write anything about your web development</p>
                  </div>
                  </div>
                </div>

                <div className='skillBars'>
                <div className='skillBar'>
                  <img src={AppDesign} alt='' className='skillBarImg'/>
                  <div className='skillBarText'>
                    <h2>App Development</h2>
                    <p>This is demo text and you can write anything about your app development</p>
                  </div>
                  </div>
                </div>        
    </section>
  )
}

export default skills;