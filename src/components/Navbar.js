import React from "react";
// import { NavLink } from "react-router-dom";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav className="navbar">
        <NavMenu className="nav-menu-items">
          <NavLink to="/" activeStyle>Home</NavLink>
          <NavLink to="/about" activeStyle>About</NavLink>
          <NavLink to="/skills" activeStyle>Skills</NavLink>
          <NavLink to="/characteristics" activeStyle>Characteristics</NavLink>
          <NavLink to="/experience" activeStyle>Portfolio</NavLink>
        </NavMenu>
        
        {/* wrap button for mobile */}
        {/* <NavBtn>

        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
