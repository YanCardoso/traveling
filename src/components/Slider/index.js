import React from "react";
import "../../styles/components/Slider.css";

function Slider() {
  return (
    <div className="container--slider">
      <div className="container--index">
        <ul>
          <li>
            <a href="#" className="list--itens list--margin">
              Start
            </a>
          </li>
          <li>
            <a href="#" className="list--itens list--margin">
              01
            </a>
          </li>
          <li>
            <a href="#" className="list--itens list--margin">
              02
            </a>
          </li>
          <li>
            <a href="#" className="list--itens">
              03
            </a>
          </li>
        </ul>
      </div>

      <div className="container--scroll">
        <div className="scroll--indicator"></div>
      </div>
    </div>
  );
}

export default Slider;
