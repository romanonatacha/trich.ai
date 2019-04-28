import React from 'react'
import { Route } from 'react-router'
import 'materialize-css/dist/js/materialize.min.js'
import './App.scss'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Solutions from '../Solutions/Solutions'
import Articles from '../Articles/Articles'
// import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import ContactSuccess from '../ContactSuccess/ContactSuccess'


const App = () => (
  <>
    <Menu />
    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
    <Route path={process.env.PUBLIC_URL + '/solutions'} component={Solutions} />
    {/* <Route exact path='/portfolio' component={Portfolio} /> */}
    <Route exact path={process.env.PUBLIC_URL + '/articles'} component={Articles} />
    <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
    <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
    <Route exact path={process.env.PUBLIC_URL + '/contact/success'} component={ContactSuccess} />
    <Footer />
  </>       
)

export default App
