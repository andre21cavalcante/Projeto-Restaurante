import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./indexV.css"


 function Visualizar() {
  const [contato, setContato] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/clientes/id/${id}`)
      .then((response) => {
        setContato(response.data.clientes.cliente[0]);
        
      })
      .catch((erro) => console.log(erro));
  },[id]);
  //console.log(contato);
  return (

      <div className="container"> 

        <h2>Cliente</h2>

    <div>
      <p>{contato.NOME}</p>
      <p>{contato.EMAIL}</p>
      <p>{contato.TELEFONE}</p>
    </div>
    </div>
  );

}

export default Visualizar