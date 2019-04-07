import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './UseCasesCard.scss'

class UseCasesCard extends Component {
    render() {

        return (
            <div className="use-cases col s12 m7">
                <ul className='solutions__links'>
                    <li className='solutions__links__item'>
                        <Link to='/solutions'>industries</Link>
                    </li>
                    <li className='solutions__links__item active'>
                        <Link to='/solutions/cases'>cases</Link>
                    </li>
                 </ul>
                <div className="use-cases__card card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                    </div>
                </div>
                <div className="use-cases__card card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature/1" />
                    </div>
                </div>
                <div className="use-cases__card card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature/3" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                    </div>
                </div>
                <div className="use-cases__card card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature/5" />
                    </div>
                </div>
                <div className="use-cases__card card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature/2" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                    </div>
                </div>
                <div className="use-cases__card card horizontal">
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                    </div>
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature/4" />
                    </div>
                </div>
            </div>
        )
    }
}

export default UseCasesCard