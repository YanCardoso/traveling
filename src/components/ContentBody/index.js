import React from "react";
import Footer from "../Footer/index.js";

import "../../styles/components/ContentBody.css";

function ContentBody() {
  return (
    <div className="container--content">
      <section id="section--01">
        <span id="tag--number">01</span>
        <div className="content--body--main">
          <div className="tag--name">
            <img src="./assets/Rectangle.png" alt="seta" />
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
            <img
              src="./assets/icon-navigation-arrow_downward_24px.png"
              alt="seta"
            />
          </div>
        </div>
        <img id="img01" src="./assets/01.png" alt="Imagem 01" />
      </section>

      {/* Section 02 */}

      <section id="section--02">
        <span id="tag--number02">02</span>
        <div className="content--body--main--2">
          <div className="tag--name">
            <img src="./assets/Rectangle.png" alt="seta"/>
            <span>Hiking Essentials</span>
          </div>
          <h1>Picking the right Hiking Gear!</h1>
          <p>
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have. Let’s start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe wif they get sweaty or wet.
          </p>
          <div className="tag--footer">
            <span>Read more</span>
            <img src="./assets/icon-navigation-arrow_downward_24px.png" alt="seta"/>
          </div>
        </div>
        <img id="img02" src="./assets/02.png" alt="Imagem 02"/>
      </section>

      {/* Section 3 */}
      <section id="section--03">
        <span id="tag--number03">03</span>
        <div className="content--body--main">
          <div className="tag--name">
            <img src="./assets/Rectangle.png" alt="seta"/>
            <span>Where you go is the key</span>
          </div>
          <h1>Understand Your Map & Timing</h1>
          <p>
            To start, print out the hiking guide and map. If it’s raining, throw
            them in a Zip-Lock bag. Read over the guide, study the map, and have
            a good idea of what to expect. I like to know what my next landmark
            is as I hike. For example, I’ll read the guide and know that say, in
            a mile, I make a right turn at the junction..
          </p>
          <div className="tag--footer">
            <span>Read more</span>
            <img src="./assets/icon-navigation-arrow_downward_24px.png" alt="seta"/>
          </div>
        </div>
        <img id="img03" src="./assets/03.png" alt="Imagem 03"/>
      </section>
      <Footer />
    </div>
  );
}

export default ContentBody;
