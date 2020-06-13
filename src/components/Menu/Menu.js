import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'
import './Menu.scss'

const Menu = () => (
    <div className='menu'>
        <a href='https://trich.ai' className='menu__logo'>trich.ai</a>
        <Navbar className='menu__links'>
            <NavItem className='menu__links__logo'>
                <a href='https://trich.ai'>trich.ai</a>
            </NavItem>
            <NavItem className='menu__links__item'>
                <a href='https://portfolio.trich.ai' target="_target">Portfolio</a>
            </NavItem>
            <NavItem className='menu__links__item'>
                <Link data-toggle="collapse" data-target=".sidenav" to='/solutions'>Solutions</Link>
            </NavItem>
            <NavItem className='menu__links__item'>
                <Link to='/articles'>Articles</Link>
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

export default Menu
