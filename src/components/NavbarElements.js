import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 60px;
  position: fixed;
  background-color: #ff542f;
  border-radius: 100px;
  padding: 2px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  ${'' /* padding: 0.5rem calc((100vw - 1000px) / 2); */}
  z-index: 10;
  gap: 30px;
`;

export const NavLink = styled(Link)`
align-items:center;
    justify-content: center;
    text-align: center;
  color: #f2f2f2;
  ${'' /* background-color: #6a352a; */}
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 1.5rem;
  height: 100%;
  width: 60%;
  cursor: pointer;
  letter-spacing: 1.5px;

  &.active {
    transition: all 0.3s ease-in;
    color: #ff542f;
    height: 100%;
    ${'' /* width: 64%; */}
    font-weight: 700;
    align-items:center;
    justify-content: center;
    text-align: center;
    background: #f2f2f2;
    border-radius: 100px;
  }
`;

// styling the icons
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ff542f;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border: 1px solid #010606;
  }
`;
