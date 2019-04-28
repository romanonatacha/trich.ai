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
                <Link data-toggle="collapse" data-target=".sidenav" to={process.env.PUBLIC_URL + '/solutions'}>Solutions</Link>
            </NavItem>
            {/* <NavItem className='menu__links__item'>
                <Link to='/portfolio'>Portfolio</Link>
            </NavItem> */}
            <NavItem className='menu__links__item'>
                <Link to={process.env.PUBLIC_URL + '/articles'}>Articles</Link>
            </NavItem>
            <NavItem className='menu__links__item'>
                <Link to={process.env.PUBLIC_URL + '/about'}>About</Link>
            </NavItem>
            <NavItem className='menu__links__item'>
                <Link to={process.env.PUBLIC_URL + '/contact'}>Contact</Link>
            </NavItem>
        </Navbar>
    </div>
)

export default Menu
