import React from 'react'
import './works.css'
import Portolio from '../../assets/portfolio.png'

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portolio</h2>
        <span className='worksDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe
                 r took a galley of type and scrambled it t </span>
                 
        <div className='worksImgs'>
            <img src={Portolio} alt='' className='worksImg' />
            <img src={Portolio} alt='' className='worksImg' />
            <img src={Portolio} alt='' className='worksImg' />
            <img src={Portolio} alt='' className='worksImg' />
            <img src={Portolio} alt='' className='worksImg' />
            <img src={Portolio} alt='' className='worksImg' />
        </div>

        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default works