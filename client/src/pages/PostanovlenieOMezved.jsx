import React from "react";
import image from "assets/img/United-Nations-PD1-transformed.png";

function PostanovlenieOMezved() {
  return (
    <div style={{ margin: "2.5% 3.5%" }}>
      <header style={{ display: "flex", alignItems: "center" }}>
        <img alt='' src={image} style={{ maxWidth: "10%" }}></img>
        <h1 style={{ textAlign: "center" }}>
          Постановление СМ РБ о межведомственном взаимодействии по формированию
          и выполнению индивидуальных программ реабилитации, абилитации
          инвалидов
        </h1>
      </header>
      <div style={{ paddingBottom: "2.5%" }}></div>
      <embed
        src="https://mintrud.gov.by/uploads/files/672.pdf"
        type="application/pdf"
        width="100%"
        height="720px"
      />
    </div>
  );
}

export default PostanovlenieOMezved;
