import React, { useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../styles/forms.css";
import InputArea from "./Input/Input";

function Forms({ onEdit, getTravelList }) {
  const ref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRef = ref.current;

    if (
      !formRef.TouristSpotName.value ||
      !formRef.TouristSpotCountry.value ||
      !formRef.TouristSpotCity.value ||
      !formRef.TouristSpotImage.value
    )
      return toast.warn("Preencha todos os campos!");

    await axios
      .post("http://localhost:8080", {
        TouristSpotName: formRef.TouristSpotName.value,
        TouristSpotCountry: formRef.TouristSpotCountry.value,
        TouristSpotCity: formRef.TouristSpotCity.value,
        TouristSpotImage: formRef.TouristSpotImage.value,
      })
      .then((res) => toast.success(res.data))
      .catch((res) => toast.error(res.data));

    formRef.TouristSpotName.value = "";
    formRef.TouristSpotCountry.value = "";
    formRef.TouristSpotCity.value = "";
    formRef.TouristSpotImage.value = "";

    getTravelList();
  };

  return (
    <form className="form" ref={ref} onSubmit={handleSubmit}>
      <InputArea
        label="Nome"
        input="TouristSpotName"
        placeholder="Qual o Destino?"
        type="text"
      />
      <InputArea
        label="País"
        input="TouristSpotCountry"
        placeholder="Qual o país?"
        type="text"
      />
      <InputArea
        label="Cidade"
        input="TouristSpotCity"
        placeholder="Qual a cidade?"
        type="text"
      />
      <InputArea
        label="Imagem(url)"
        input="TouristSpotImage"
        placeholder="URL imagem do destino"
        type="text"
      />
      <button className="form-button">SALVAR</button>
    </form>
  );
}

export default Forms;
