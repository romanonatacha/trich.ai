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
        We are a multidisciplinary and decentralized team of people with a lot of experience in analytics and big data. We have some of the most recognized professionals on the market, willing to find the best solutions for your data, seeking to implement solutions, a new vision on how data works and also the establishment of a data-driven culture.
        <br></br><br></br>
        Our headquarters are in São Paulo - Brazil, but we have professionals from all over the world, such as Canada, India, Germany, Senegal, Amsterdam, Spain and more.
        <br></br><br></br>
        We strive to the maximum, to use open-source solutions for our clients and we have a lot of experience working with this.
        <br></br><br></br>
        To get your quote, click on the "Contact" tab and let us know how you think data science can help you increase your earnings.
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