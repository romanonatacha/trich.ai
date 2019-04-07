import React, { Component } from 'react'
import './IndustriesCard.scss'

class IndustriesCard extends Component {
    render() {
        return (
            <div className="industries col s12 m7">
                <div className="industries__card card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/190/190/nature" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I am a very simple card. I am good at containing small bits of information.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IndustriesCard