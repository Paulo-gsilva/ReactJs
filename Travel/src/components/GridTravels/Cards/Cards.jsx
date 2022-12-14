import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import "../../../styles/gridtravels.css";

function Cards({ travels, setTravels, getTravelList }) {
  const handleDeleteTravel = async (touristSpotId) => {
    await axios
      .delete("http://localhost:8080/" + touristSpotId)
      .then((res) => {
        const newArray = travels.filter(
          (travel) => travel.touristSpotId !== touristSpotId
        );

        toast.success(res.data);
        setTravels(newArray);
      })
      .catch((error) => {
        toast.error(error);
      });

    getTravelList();
  };

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
                <AiFillDelete
                  onClick={() => handleDeleteTravel(travel.TouristSpotId)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
