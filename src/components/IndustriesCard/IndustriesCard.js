import React from 'react'
import { Link } from 'react-router-dom'
import './IndustriesCard.scss'
import finacialServicesImg from '../../img/finacial-services.jpg'
import telecomImg from '../../img/telecom.jpg'
import insuranceImg from '../../img/insurance.jpg'
import retailImg from '../../img/retail.jpg'
import ecommerceImg from '../../img/ecommerce.jpg'
import accountabilityTaxesImg from '../../img/accountability-taxes.jpg'
import technologyImg from '../../img/technology.jpg'

const industriesItems = [
    {
        key: 1,
        title: 'Financial Services',
        img: finacialServicesImg
    },
    {
        key: 2,
        title: 'Technology',
        img: technologyImg
    },
    {
        key: 3,
        title: 'Insurance',
        img: insuranceImg
    },
    {
        key: 4,
        title: 'Retail',
        img: retailImg
    },
    {
        key: 5,
        title: 'Ecommerce',
        img: ecommerceImg
    },
    {
        key: 6,
        title: 'Accountability and Taxes',
        img: accountabilityTaxesImg
    },
    {
        key: 7,
        title: 'Telecom',
        img: telecomImg
    }

]

const IndustriesCard = () => (
    <div className="industries">
        <ul className='solutions__links'>
            <li className='solutions__links__item'>
                <Link to='/solutions'>applications</Link>
            </li>
            <li className='solutions__links__item active'>
                <Link to='/solutions/industries'>industries</Link>
            </li>
        </ul>
        <div className='industries__info'>
            Companies in all world are using AI to increase top and bottom line through reducing losses, optimizing profits, reducing expenses, segment and understanding their customers and with it gaining some competitive advantages. This companies are modifying some of their process to optimizing all of their business in order to make data-driven decisions to lead to increased profitability. By my vision point, the best and most valueable part of the application of data science to business is to gain quick and better insights.
        </div>
        <h4 className='industries__title'>Some industries that we have already worked</h4>
        <div className="industries__cards row">
        {industriesItems.map(item =>
          <div key={item.key} className="">
            <div className="industries__cards__item card">
              <div className="industries__cards__item__img card-image">
                <img src={item.img} alt='finacial' />
              </div>
              <div className="industries__cards__item__title card-content">
                <span>{item.title}</span>
              </div>    
            </div>
          </div>
        )}
        </div>
    </div> 
)

export default IndustriesCard