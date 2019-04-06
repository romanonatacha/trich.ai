import React, { Component } from 'react'
import { Link, Route, Router } from 'react-router'
import 'materialize-css/dist/js/materialize.min.js'
import './App.scss'
import Menu from '../Menu/Menu'

class App extends Component {
  render() {
    return (
      <Route exact path='/' render={() => (
        <div className="App">
          <Menu />
          <header className="App-header">
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </div>
      )} />
    )
  }
}

export default App
