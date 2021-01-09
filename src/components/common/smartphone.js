import React from "react";
import "./main.css";
export default function Smartphone() {
  const background = require("../../images/NearGarage.png");
  return (
    <div
      class='deviceContainer'
      style={{ width: " 50%", maxWidth: 200, marginTop: 50 }}
    >
      <div class='iphone white portrait'>
        <div class='caseBorder'></div>
        <div class='case'></div>
        <div class='reflection'></div>
        <div class='screen'></div>
        <div class='camera'></div>
        <div class='speaker'></div>
        <div class='homeButtonBorder'></div>
        <div class='homeButton'></div>
        <div class='content'>
          <div style={{ backgroundColor: "rgb(47 174 105)" }}>
            <img src={background} alt='smart' height={350} width={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
