 import React from "react";
 import SocialLinks from "./SocialLinks";
 import {AboutAuthor} from "../constants"
  /***********************
    Footer Component
   ***********************/
  
function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <h3><i class="fab fa-earlybirds"></i> THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear() + " " + AboutAuthor.nickname}.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};
  
export default Footer;