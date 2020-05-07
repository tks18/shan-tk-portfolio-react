import React from "react";
import SocialLinks from "./SocialLinks.jsx"
import {MenuItems} from "../constants";
/***********************
  Menu Component
 ***********************/

function Menu(props) {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            {MenuItems.map((item) => {
              return <li>
                <a href={item.link} onClick={props.toggleMenu}>
                  {item.displayname}
                </a>
              </li>
            })}        
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
  
export default Menu;