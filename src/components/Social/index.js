import React from "react";

import "../../styles/components/Social.css";

function Social() {
  return (
    <div className="container--social">
      <span className="socialMedia">Follow us</span>
      <a className="instagram" href="#">
        <img src="./assets/instagram.png" />
      </a>
      <a className="twitter" href="#">
        <img src="./assets/twitter.png" />
      </a>
    </div>
  );
}

export default Social;
