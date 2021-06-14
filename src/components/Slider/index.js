import React, { useEffect, useState } from "react";
import "../../styles/components/Slider.css";

function Slider() {
  const [scroll, setScroll] = useState(0);
  const [index, setIndex] = useState(0);

  function scrollIndicator() {
    let winScroll = window.scrollY;
    setScroll(winScroll);

    if(winScroll < 1439){
      setIndex(0)
    }
    if (winScroll >= 1440) {
      setIndex(1);
    }
    if (winScroll >= 2360) {
      setIndex(2);
    }
    if (winScroll >= 3280) {
      setIndex(3);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollIndicator);

    return () => window.removeEventListener("scroll", scrollIndicator);
  }, [scroll]);

  return (
    <div className="container--slider">
      <div className="container--index">
        <ul>
          <li>
            <a href="#hero" className="list--itens list--margin">
              Start
            </a>
          </li>
          <li>
            <a href="#section--01" className="list--itens list--margin">
              01
            </a>
          </li>
          <li>
            <a href="#section--02" className="list--itens list--margin">
              02
            </a>
          </li>
          <li>
            <a href="#section--03" className="list--itens">
              03
            </a>
          </li>
        </ul>
      </div>

      <div className="container--scroll">
        <div className="scroll--indicator" style={{ 
          top: `calc(${index} * 60px)`
        }}></div>
      </div>
    </div>
  );
}

export default Slider;
