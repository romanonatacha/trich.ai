import React, { Component } from 'react'
import { Link, Route, Router } from 'react-router'
import 'materialize-css/dist/js/materialize.min.js'
import './App.scss'
import Menu from '../Menu/Menu'
import Home from '../Home/Home'
import About from '../About/About'
import Solutions from '../Solutions/Solutions';
import Articles from '../Articles/Articles';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path='/' component={Home} />
        <Route exact path='/solutions' component={Solutions} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </div>       
    )
  }
}

export default App
