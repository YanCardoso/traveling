import React from "react";

import "../../styles/components/Social.css";

function Social() {
  return (
    <div className="container--social">
      <span className="socialMedia">Follow us</span>
      <a className="instagram" href="#">
        <img src="./assets/instagram.png" alt="Instagram"/>
      </a>
      <a className="twitter" href="#">
        <img src="./assets/twitter.png" alt="Twitter"/>
      </a>
    </div>
  );
}

export default Social;
