import React, { useRef } from "react";
import "../../styles/forms.css";
import InputArea from "./Input/Input";

function Forms({ onEdit }) {
  const ref = useRef();

  return (
    <form className="form" ref={ref}>
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
      <button className="form-button" type="post">
        SALVAR
      </button>
    </form>
  );
}

export default Forms;
