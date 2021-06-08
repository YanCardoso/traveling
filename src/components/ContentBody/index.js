import React from "react";
import "../../styles/components/ContentBody.css";

function ContentBody() {
  return (
    <div className="container--content">
      <section id="section--01">
        <span id="tag--number">01</span>
        <div className="content--body--main">
          <div className="tag--name">
            <img src="./assets/Rectangle.png" />
            <span>Get Started</span>
          </div>
          <h1>What level of hiker are you?</h1>
          <p>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
          <div className="tag--footer">
            <span>Read more</span>
            <img src="./assets/icon-navigation-arrow_downward_24px.png" />
          </div>
        </div>
        <img id="img01" src="./assets/01.png" />
      </section>
      <section></section>
      <section></section>
    </div>
  );
}

export default ContentBody;
