import React from "react";
import image from "assets/img/United-Nations-PD1-transformed.png";
import pdf from "assets/pdf/o-posobii-invalid-1-group.pdf";

function OPosobiiInvalid1Group80let() {
  return (
    <div style={{ margin: "2.5% 3.5%", overflow: "hidden" }}>
      <header style={{ display: "flex", alignItems: "center" }}>
        <img alt='' src={image} style={{ maxWidth: "10%" }}></img>
        <h1 style={{ textAlign: "center" }}>
          Постановление СМ РБ о пособии по уходу за инвалидом I группы либо
          лицом, достигшим 80-летнего возраста
        </h1>
      </header>
      <div style={{ paddingBottom: "2.5%" }}></div>
      <embed src={pdf} type="application/pdf" width="100%" height="720px" />
    </div>
  );
}

export default OPosobiiInvalid1Group80let;
