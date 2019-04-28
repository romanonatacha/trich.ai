import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
import NotFound from '../NotFound/NotFound'


const App = () => (
  <>
    <Menu />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/solutions' component={Solutions} />
      {/* <Route exact path='/portfolio' component={Portfolio} /> */}
      <Route exact path='/articles' component={Articles} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path= '/contact/success' component={ContactSuccess} />
      <Route path='*' component={NotFound} />
    </Switch>
    <Footer />
  </>       
)

export default App
