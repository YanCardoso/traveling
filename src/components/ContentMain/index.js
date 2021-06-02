import React from "react";
import "../../styles/components/ContentMain.css";

function ContentMain() {
  return (
    <div className="container--main">
      <header className="header--content">
        <img className="rectang" src="/assets/Rectangle.png" />
        <h3>A HIKING GUIDE</h3>
      </header>
      <main className="content--main">
        <h2>Be prepared for the Mountains and beyond!</h2>
      </main>
      <footer className="footer--content">
        <a href="#">
          <span>Scroll Down</span>
          <img
            className="arrow-down"
            src="./assets/icon-navigation-arrow_downward_24px.png"
          />
        </a>
      </footer>
    </div>
  );
}

export default ContentMain;
