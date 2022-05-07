import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import api from "../../services/api";
import Input from "../Input/input";
import Button from "../button/button";

import './updateA.css'

 function Atualizar() {
  const [contato, setContato] = useState({});
  const[value, setValue] = useState({})
  
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/clientes/id/${id}`)
      .then((response) => {
        
        setContato(response.data.clientes.cliente[0]);
        
      })
      .catch((erro) => console.log(erro));
  });
  
  function handleOnChange(e) {
    setValue({ ...value,[e.target.name]:e.target.value});
    
  }

  function handleUpdate(e) {
    e.preventDefault()
    api.put("/clientes/id/" + id, value);
    alert("Atualizado com sucesso")
   
  }

  return (

      <form className="form-atualiza" onSubmit={handleUpdate}> 
      <h2>Atualização de dados</h2>
    <div className="form-input">
        <Input nome="Nome: " placeholder={contato.NOME} onChange={handleOnChange} name="NOME"/>
        <Input nome="Email: "placeholder={contato.EMAIL} onChange={handleOnChange} name="EMAIL"/>
        <Input nome="Telefone: " placeholder={contato.TELEFONE} onChange={handleOnChange} name="TELEFONE"/>
        
    </div>

    <Button nome="atualizar"/>
    </form>
  );

}

export default Atualizar