import React from "react";
import {AboutAuthor, NavbarTrimValue} from "../constants"
/***********************
  Nav Component
  ***********************/

function Nav(props) {
  return (
    <div>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            {AboutAuthor.nickname.slice(0,NavbarTrimValue)}
            <strong>{AboutAuthor.nickname.slice(NavbarTrimValue, AboutAuthor.nickname.length)}</strong>
          </p>
          <a
            href="/#"
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </div>
  );
};
 
export default Nav