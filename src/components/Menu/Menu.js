import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import "./Menu.scss";

const Menu = () => (
  <div className="menu">
    <a href="/" className="menu__logo">
      trich.xyz
    </a>
    <Navbar className="menu__links">
      <NavItem className="menu__links__logo">
        <a href="/">trich.xyz</a>
      </NavItem>
      <NavItem className="menu__links__item">
        <a href="https://portfolio.trich.xyz" target="_target">
          Portfolio
        </a>
      </NavItem>
      <NavItem className="menu__links__item">
        <Link data-toggle="collapse" data-target=".sidenav" to="/solutions">
          Solutions
        </Link>
      </NavItem>
      <NavItem className="menu__links__item">
        <Link to="/articles">Articles</Link>
      </NavItem>
      <NavItem className="menu__links__item">
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem className="menu__links__item">
        <Link to="/contact">Contact</Link>
      </NavItem>
    </Navbar>
  </div>
);

export default Menu;
