import React from "react";
import Cards from "./Cards/Cards";
import "../../styles/gridtravels.css";

function GridTravels({ travels }) {
  return (
    <section className="section-gridtravels">
      <Cards travels={travels} />
    </section>
  );
}

export default GridTravels;
