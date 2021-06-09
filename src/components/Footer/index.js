import React from "react";
import "../../styles/components/Footer.css";

function Footer() {
  return (
    <footer className="container--footer">
      <div className="container--logo">
        <span>MNTN</span>
      </div>
      <div className="container--text">
        <span>
          Get out there & discover your next slope, mountain & destination!
        </span>
      </div>

      <div className="container--copy">
        <span>Copyright 2021 MNTN, Inc. Terms & Privacy</span>
      </div>

      <div className="links--blog">
        <h1>More on The Blog</h1>
        <ul>
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="links--more">
        <h1>More on MNTN</h1>
        <ul>
          <li>Jobs</li>
          <li>The Team</li>
          <li>Press</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
