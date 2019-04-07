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
          solutions blablabla
        </div>
        <Route exact path='/solutions' component={IndustriesCard} />
        <Route exact path='/solutions/cases' component={UseCasesCard} />
      </div>
    )
  }
}

export default Solutions