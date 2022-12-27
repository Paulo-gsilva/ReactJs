import React from "react";
import "../../../styles/forms.css";

function InputArea({ label, input, type, placeholder }) {
  return (
    <div className="input-area">
      <label htmlFor={input}>{label}</label>
      <input type={type} id={input} placeholder={placeholder} />
    </div>
  );
}

export default InputArea;
