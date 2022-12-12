import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards/Cards";
import "../../styles/gridtravels.css";
import { toast } from "react-toastify";

function GridTravels() {
  const [travels, setTravels] = useState([]);

  const getTravelList = async () => {
    try {
      const travelsList = await axios.get("http://localhost:8080");
      setTravels(travelsList.data);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível adicionar uma nova viagem 😥");
    }
  };

  useEffect(() => {
    getTravelList();
  }, [setTravels]);

  return (
    <section className="section-gridtravels">
      <Cards travels={travels} />
    </section>
  );
}

export default GridTravels;
