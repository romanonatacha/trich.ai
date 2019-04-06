import React, { Component } from 'react'
import './Menu.scss'
import { Navbar, NavItem } from 'react-materialize'

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <a className='menu__logo'>Logo</a>
                <Navbar className='menu__links'>
                    <NavItem className='menu__links__logo'>
                        LOGO
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        Solutions
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        Articles
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        Portfolio
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        About
                    </NavItem>
                    <NavItem className='menu__links__item'>
                        Contact
                    </NavItem>
                </Navbar>
            </div>
        )
    }
}

export default Menu
