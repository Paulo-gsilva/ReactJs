import React from "react";
import Cards from "./Cards/Cards";
import "../../styles/gridtravels.css";

function GridTravels({
  travels,
  getTravelList,
  setEditTravel,
  setGetTravelById,
}) {
  return (
    <section className="section-gridtravels">
      <Cards
        travels={travels}
        getTravelList={getTravelList}
        setEditTravel={setEditTravel}
        setGetTravelById={setGetTravelById}
      />
    </section>
  );
}

export default GridTravels;
