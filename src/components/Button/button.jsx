import React from "react";
import "../../App.css";
const Button = ({ nome, funcao }) => {
  return (
    <div>
      <button onClick={funcao}>{nome}</button>
    </div>
  );
};

export default Button;
