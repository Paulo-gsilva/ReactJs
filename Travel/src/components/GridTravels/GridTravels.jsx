import React from "react";
import Cards from "./Cards/Cards";
import "../../styles/gridtravels.css";

function GridTravels({ travels, getTravelList, setEditTravel }) {
  return (
    <section className="section-gridtravels">
      <Cards
        travels={travels}
        getTravelList={getTravelList}
        setEditTravel={setEditTravel}
      />
    </section>
  );
}

export default GridTravels;
