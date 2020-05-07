import React from "react";
import {SocialList} from "../constants"
  /***********************
    Social Links Component
   ***********************/
  
function SocialLinks(props) {
  return (
    <div className="social">
      {SocialList.map((social) => {
        return <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          title={"Link to author's" + social.name + "profile"}
        >
          {' '}
          <i className={social.icon} />
        </a>
      })}
    </div>
  );
};

export default SocialLinks;  