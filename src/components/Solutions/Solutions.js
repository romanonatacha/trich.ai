import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'
import './Solutions.scss'
import UseCasesCard from '../UseCasesCard/UseCasesCard'
import IndustriesCard from '../IndustriesCard/IndustriesCard'

class Solutions extends Component {
  render() {
    return (
      <div className='solutions'>
        <div className='solutions__header'>
          Solutions
        </div>
        <Link to='/solutions/industries'>industries</Link>
        <Link to='/solutions/use-cases'>cases</Link>

        <Route path='/solutions/industries' component={IndustriesCard} />
        <Route exact path='/solutions/use-cases' component={UseCasesCard} />
      </div>
    )
  }
}

export default Solutions