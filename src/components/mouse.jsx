import React from "react";
import "./mouse.css";
export default function Mouse() {
  //distance
  let initalX = 0;
  let initalY = 0;
  let finalX = 0;
  let finalY = 0;
  //events
  window.addEventListener("click", (e) => {
    document.querySelector("#initial").style.left = e.clientX + "px";
    document.querySelector("#initial").style.top = e.clientY + "px";
    initalX = e.clientX;
    initalY = e.clientY;
    finalX = e.clientX;
    finalY = e.clientY;
    let distance = Math.sqrt(
      Math.pow(finalX - initalX, 2) + Math.pow(finalY - initalY, 2)
    );
    document.querySelector("#final").innerText = Math.round(distance) + "px";
    document.querySelector("#line").style.top = initalY + "px";
    document.querySelector("#line").style.left = initalX + "px";

    //line
    let xMid = (initalX + finalX) / 2;
    let yMid = (initalY + finalY) / 2;

    //inclination
    let incRadiation = Math.atan2(initalY - finalY, initalX - finalX);
    let incSlope = (incRadiation * 180) / Math.PI;

    document.querySelector("#line").style.width = distance + "px";
    document.querySelector("#line").style.top = yMid + 3 + "px";
    document.querySelector("#line").style.left = xMid + 3 - distance / 2 + "px";
    document.querySelector("#line").style.transform = `rotate(${incSlope}deg)`;
  });
  window.addEventListener("mousemove", (e) => {
    document.querySelector("#final").style.left = e.clientX + "px";
    document.querySelector("#final").style.top = e.clientY + "px";
    finalX = e.clientX;
    finalY = e.clientY;
    let distance = Math.sqrt(
      Math.pow(finalX - initalX, 2) + Math.pow(finalY - initalY, 2)
    );
    document.querySelector("#final").innerText = Math.round(distance) + "px";

    //line
    let xMid = (initalX + finalX) / 2;
    let yMid = (initalY + finalY) / 2;

    //inclination
    let incRadiation = Math.atan2(initalY - finalY, initalX - finalX);
    let incSlope = (incRadiation * 180) / Math.PI;

    document.querySelector("#line").style.width = distance + "px";
    document.querySelector("#line").style.top = yMid + 3 + "px";
    document.querySelector("#line").style.left = xMid + 3 - distance / 2 + "px";
    document.querySelector("#line").style.transform = `rotate(${incSlope}deg)`;
  });

  return (
    <div>
      <div id="line"></div>
      <span id="initial"></span>
      <label id="final"></label>
    </div>
  );
}
