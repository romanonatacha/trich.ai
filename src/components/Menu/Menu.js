import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import './Menu.scss'

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <a className='menu__logo'>Logo</a>
                <Navbar className='menu__links'>
                    <NavItem className='menu__links__logo'>
                        <Link exact to='/'>LOGO</Link>
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        <Link to='/solutions'>Solutions</Link>
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        <Link to='/articles'>Articles</Link>
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        <Link to='/portfolio'>Portfolio</Link>
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        <Link to='/about'>About</Link>
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        <Link to='/contact'>Contact</Link>
                    </NavItem>
                </Navbar>
            </div>
        )
    }
}

export default Menu
