import React from "react";
import Title from "../Title/Title";
import Forms from "../Forms/Forms";
import "../../styles/travelpage.css";
import GridTravels from "../GridTravels/GridTravels";

function TravelPage() {
  return (
    <section className="section-travelpage">
      <Title title="VIAGENS" />
      <Forms />
      <GridTravels />
    </section>
  );
}

export default TravelPage;
