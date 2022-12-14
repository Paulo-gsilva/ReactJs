import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title/Title";
import Forms from "../Forms/Forms";
import { toast } from "react-toastify";
import "../../styles/travelpage.css";
import GridTravels from "../GridTravels/GridTravels";

function TravelPage() {
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
    <section className="section-travelpage">
      <Title title="VIAGENS" />
      <Forms getTravelList={getTravelList} />
      <GridTravels travels={travels} />
    </section>
  );
}

export default TravelPage;
