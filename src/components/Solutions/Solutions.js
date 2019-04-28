import React from 'react'
import { Route } from 'react-router'
import './Solutions.scss'
import ApplicationsCard from '../ApplicationsCard/ApplicationsCard'
import IndustriesCard from '../IndustriesCard/IndustriesCard'

const Solutions = () => (
  <div className='solutions'>
    <Route exact path='/solutions' component={ApplicationsCard} />
    <Route exact path='/solutions/industries' component={IndustriesCard} />
  </div>
)

export default Solutions