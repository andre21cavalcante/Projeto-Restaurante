import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import api from "../../services/api";
import Input from "../Input/input";
import Button from "../button/button";
//import styled from "styled-components";
import './updateA.css'

// const Form = styled.form`
// background:#162728;
// height:800px;
// color:#fff;

//  h2{
//   color:#FFF;
// }

//  div{
//    margin-top:50px;
//    width: 250px;
//    height:250px;
//    border: 1px solid black;
//    border-radius: 10px;
//    margin: 1em;
//    padding:1em;
//    position:relative;
//    display:flex;
//    flex-direction: column;
//    justify-content:center;
//    align-items:center;
// }
// `

 function Atualizar() {
  const [contato, setContato] = useState({});
  const[value, setValue] = useState({})
  //const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    api
      .get(`/clientes/id/${id}`)
      .then((response) => {
        //
        setContato(response.data.clientes.cliente[0]);
         //console.log(contato)
      })
      .catch((erro) => console.log(erro));
  });
  
  function handleOnChange(e) {
    setValue({ ...value,[e.target.name]:e.target.value});
    console.log(value)
  }

  function handleUpdate(e) {
    e.preventDefault()
    api.put("/clientes/id/" + id, value);
    alert("Atualizado com sucesso")
    console.log(value)
    
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