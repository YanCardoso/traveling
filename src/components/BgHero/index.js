import React from "react";
import "../../styles/components/BgHero.css";

function BgHero() {
  return (
    <div className="bgHero" id="hero">
      <div className="HG" style={{ backgroundImage: "url('/assets/HG.png')" }}>
        <div className="content-shadow"></div>
      </div>
      <div
        className="MG"
        style={{ backgroundImage: "url('/assets/MG.png')" }}
      ></div>
      <div
        className="VG"
        style={{ backgroundImage: "url('/assets/VG.png')" }}
      ></div>

      <div className="bg-footer-shadow"></div>
    </div>
  );
}

export default BgHero;
