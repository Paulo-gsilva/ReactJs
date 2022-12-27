import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title/Title";
import Forms from "../Forms/Forms";
import { toast } from "react-toastify";
import "../../styles/travelpage.css";
import GridTravels from "../GridTravels/GridTravels";

function TravelPage({ setGetTravelById }) {
  const [travels, setTravels] = useState([]);
  const [editTravel, setEditTravel] = useState(null);

  const getTravelList = async () => {
    try {
      const travelsList = await axios.get("http://localhost:8080");
      setTravels(travelsList.data);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível carregar suas viagens 😥");
    }
  };

  useEffect(() => {
    getTravelList();
  }, [setTravels]);

  return (
    <section className="section-travelpage">
      <Title title="VIAGENS" />
      <Forms
        getTravelList={getTravelList}
        editTravel={editTravel}
        setEditTravel={setEditTravel}
      />
      <GridTravels
        setEditTravel={setEditTravel}
        travels={travels}
        setTravels={setTravels}
        getTravelList={getTravelList}
        setGetTravelById={setGetTravelById}
      />
    </section>
  );
}

export default TravelPage;
