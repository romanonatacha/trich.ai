import React from 'react'
import './About.scss'
import Logos from '../Logos/Logos'

const About = () => (
  <div className='about'>
    <div className='about__container'>
    <div className='padding'>
      <div className='about__container__info text'>
        <div className='about__container__info__title'>who?</div>
        <div className='about__container__info__text'>
          A startup that seeks to add value in big data and AI solutions.
          Bringing together great professionals of the area, with extensive experience in the area of technology and mainly data.
          Trying to develop our solutions as cheaply as possible using open source solutions.
          We have already worked with data from the largest companies in Latin America in several different industries.
          We are passionate about data and we will be very happy to know how we could help you.
        </div>
      </div>
    </div>
    <div className='padding'>
      <div className='about__container__info'>
        <div className='about__container__info__title-logo'>we have have worked in projects with the following open source tools</div>
        <Logos />
      </div>
    </div>
    </div>
  </div>  
)

export default About