import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: white;
  height: 75px;
  // margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  position: -webkit-sticky;
  top: 0; /* required */
  z-index: 10;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  // padding: 0.5rem calc((100vw - 1000px) / 2);
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  // margin-left: -8px;
  // margin-right: -8px;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 110%;
  padding: 0 24px;
  // max-width: 1100px;
`;

export const NavLogoLink = styled(LinkS)`
  color: #312a71;
  justify-self: flex-start;
  display: flex;
  cursor: pointer;
  font-size: 40px;
  align-items: center;
  // margin-left: -5024px;
  // font-weight: 100;
  text-decoration: none;
  font-family: "Utopia", Helvetica, Arial, Lucida, sans-serif !important;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-left: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  list-style: none;
  tetx-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 10px;
  text-align: center;
  border: 2px solid green;
  ::placeholder {
    color: black;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  // margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 5px;
  background: red;
  white-space: nowarp;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: white;
  }
`;
