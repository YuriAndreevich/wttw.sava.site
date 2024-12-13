import image from "assets/img/United-Nations-PD1-transformed.png";

function KonventOPravInval() {
  return (
    <div style={{ margin: "2.5% 3.5%" }}>
      <header style={{ display: "flex", alignItems: "center" }}>
        <img alt='' src={image} style={{ maxWidth: "10%" }}></img>
        <h1 style={{ textAlign: "center" }}>
          Постановление СМ РБ о Государственном реестре (перечне) технических
          средств социальной реабилитации, порядке и условиях обеспечения ими
          отдельных категорий граждан
        </h1>
      </header>
      <div style={{ paddingBottom: "2.5%" }}></div>
      <embed
        src="https://mintrud.gov.by/uploads/files/O-Gosudarstvennom-reestre-perechne-texnicheskix-sredstv-sotsialnoj-reabilitatsii-porjadke-i-uslovijax-obespechenija-imi-otdelnyx-kategorij-grazhdan-002.pdf"
        type="application/pdf"
        width="100%"
        height="720px"
      />
    </div>
  );
}

export default KonventOPravInval;
