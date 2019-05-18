import React from 'react'
import './About.scss'
import Logos from '../Logos/Logos'

const About = () => (
  <div className='about'>
    <div className='about__container'>
    <div className='padding'>
      <div className='about__container__info text'>
        <div className='about__container__info__title'>about us</div>
        <div className='about__container__info__text'>
          We are a multidisciplinary and decentralized team of people with a lot of experience in data analytics, visualizations, predictive analysis, data engineer and big data architecture.  We have some of the most recognized professionals on the market, willing to find the best solutions for your data, seeking to implement solutions, a new vision on how data works and also the establishment of a data-driven culture.
          <br></br>
          <br></br>
          We have professionals from all over the world, such as Canada, India, Germany, Senegal, Amsterdam, Spain and more.
          <br></br>
          <br></br>
          We strive to the maximum, to use open-source solutions for our clients and we have a lot of experience working with this.
          <br></br>
          <br></br>
          Click on the "Contact" tab and to explain us your problem and how we could help you.
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