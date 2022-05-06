import React from 'react'
import Button from '../button/button';
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
import api from '../../services/api';
//import styled from 'styled-components';
//import styles from "./Pessoas.module.css"
import "./indexP.css"
const Pessoas = ({id,nome,email,telefone}) => {
  const navigate = useNavigate();

  function handleDelete(){
    api.delete("/clientes/id/" + id);
    alert("Cliente deletado")
    navigate(/clientes/)
  }

  return (
    <div className='pai'>

    <div>
     <p><b>Nome:</b> {nome}</p>
     <p><b>Email:</b> {email}</p>
     <p><b>Telefone:</b> {telefone}</p>
     <br />
     <div className='nav'>
       <ul>
         <li><Link className='link' to={"/visualizar/" + id}> <b>visualizar</b></Link></li>
         <li><Link className='link' to={"/atualizar/" + id}> <b>atualizar</b></Link></li>
         <Button  nome="deletar" click={handleDelete}/>
       </ul>
       
     </div>
   
    </div>
    </div>
    
  );
}

export default Pessoas