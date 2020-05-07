import React from "react";
import {HeaderItems} from "../constants"
  /***********************
    Header Component
   ***********************/
  
function Header(props) {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">{HeaderItems.line1}</span>
          <span className="line">{HeaderItems.line2}</span>
          <span className="line">
            <span className="color">&</span> {HeaderItems.line3}.
          </span>
        </h1>
        <div className="buttons">
          <a href={HeaderItems.button1.link}>{HeaderItems.button1.name}</a>
          <a href={HeaderItems.button2.link} className="cta">
            {HeaderItems.button2.name}
          </a>
        </div>
      </div>
    </header>
  );
};
  
export default Header;