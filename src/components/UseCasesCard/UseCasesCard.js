import React, { Component } from 'react'
import './UseCasesCard.scss'

class UseCasesCard extends Component {
    render() {
        return (
            <div className="use-cases col s12 m7">
                <div className="use-cases__card card horizontal">
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

export default UseCasesCard