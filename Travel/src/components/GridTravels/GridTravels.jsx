import React from "react";
import Cards from "./Cards/Cards";
import "../../styles/gridtravels.css";

function GridTravels({ travels, getTravelList }) {
  return (
    <section className="section-gridtravels">
      <Cards travels={travels} getTravelList={getTravelList} />
    </section>
  );
}

export default GridTravels;
