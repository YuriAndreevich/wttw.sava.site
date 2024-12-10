import React from "react";
import image from "assets/img/United-Nations-PD1-transformed.png";
import pdf from "assets/pdf/Путеводитель 2018.pdf";

function Algoritm() {
  return (
    <div style={{ margin: "2.5% 3.5%", overflow: "hidden" }}>
      <header style={{ display: "flex", alignItems: "center" }}>
        <img alt='' src={image} style={{ maxWidth: "10%" }}></img>
        <h1 style={{ textAlign: "center" }}>
        «Алгоритм посещения социальных объектов города»
        </h1>
      </header>
      <div style={{ paddingBottom: "2.5%" }}></div>
      <embed src={pdf} type="application/pdf" width="100%" height="720px" />
    </div>
  );
}

export default Algoritm;
