import React from 'react';
import { Nav, StyledUl } from './NavBar.styles.js';

function NavBar() {
  return (
    <Nav>
      <StyledUl>
        <li>
          <a href="#bio">Bio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </StyledUl>
    </Nav>
  );
}

export default NavBar;
