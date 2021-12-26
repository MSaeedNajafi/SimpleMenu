import React from "react";
import {
  Nav,
  NavBarContainer,
  NavLogoLink,
  NavMenu,
  NavItem,
  NavBtn,
  NavLink,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogoLink>Menu</NavLogoLink>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Calculator
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                smooth={true}
                duration={500}
                spy={true}
                to="id2"
                exact="true"
                offset={-80}
              >
                Server-Specs
              </NavLink>
            </NavItem>
            <NavBtn>
              <NavBtnLink
                onClick={() => {
                  console.log("pressed");
                }}
                to="/"
              >
                Contact Us
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
