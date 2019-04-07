import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import './Menu.scss'

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <a href='http://localhost:3000/' className='menu__logo'>trich.ai</a>
                <Navbar className='menu__links'>
                    <NavItem className='menu__links__logo'>
                        <a href='http://localhost:3000/'>trich.ai</a>
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
