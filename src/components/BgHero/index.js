import React, { useEffect, useState } from "react";
import "../../styles/components/BgHero.css";

function BgHero() {
  const [scroll, setScroll] = useState();

  function parallax() {
    let winScroll = window.pageYOffset
    setScroll(winScroll)
    const translate = document.querySelectorAll(".translate")
    translate.forEach(element => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${-scroll * speed}px)`;
    })

  }

  useEffect(() => {
    window.addEventListener("scroll", parallax)
    return () => {
      window.removeEventListener("scroll", parallax)
    };
  }, [scroll]);


  return (
    <div className="bgHero" id="hero">
      <div className="content-shadow"></div>
      <img
        className="HG translate"
        src="./assets/HG.png"
        alt=""
        data-speed="-0.2"
      />
      <img
        className="MG translate"
        src="./assets/MG.png"
        alt=""
        data-speed="0.3"
      />
      <img
        className="VG translate"
        src="./assets/VG.png"
        alt=""
        data-speed="0.2"
      />
      <div className="bg-footer-shadow translate" data-speed="0.2"></div>
    </div>
  );
}

export default BgHero;
