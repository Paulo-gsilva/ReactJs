import React from "react";
import "../../../styles/gridtravels.css";

function Cards({ travels }) {
  return (
    <>
      {travels.map((travel, index) => {
        return (
          <div key={travel.TouristSpotId} className="cards-travel">
            <div className="card-img">
              <img
                src={travel.TouristSpotImage}
                alt={`Imagem de ${travel.TouristSpotName}`}
              />
            </div>
            <div className="card-text">
              <h3>{travel.TouristSpotName}</h3>
              <h4>
                {travel.TouristSpotCountry} - {travel.TouristSpotCity}
              </h4>
              <p>Adicionado em: {travel.TouristSpotAddData}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
