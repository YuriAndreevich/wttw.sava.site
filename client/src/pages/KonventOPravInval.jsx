import image from "assets/img/United-Nations-PD1-transformed.png";

function KonventOPravInval() {
  return (
    <div style={{ margin: "2.5% 3.5%" }}>
      <header style={{ display: "flex", alignItems: "center" }}>
        <img alt='' src={image} style={{ maxWidth: "10%" }}></img>
        <h1 style={{ textAlign: "center" }}>Конвенция о правах инвалидов</h1>
      </header>
      <div style={{ paddingBottom: "2.5%" }}></div>
      <embed
        src="https://www.mintrud.gov.by/uploads/files/Konventsija-o-pravax-invalidov.pdf"
        type="application/pdf"
        width="100%"
        height="720px"
      />
    </div>
  );
}

export default KonventOPravInval;
