import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
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
              <div className="card-icons">
                <AiFillEdit />
                <AiFillDelete />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
