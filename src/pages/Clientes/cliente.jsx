import React, {useEffect, useState} from 'react'
import api from '../../services/api.js'
import styled from 'styled-components';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Pessoas from '../../components/clientes/pessoas';
import "../../App.css"

const Container = styled.div`
background-color: #162728;
color:white;

// div p{
//   padding-top:10px;
  
// }
`;

function Cliente(){

const [values, setValues] = useState([]);
   
useEffect(()=>{
api.get("/clientes")
 .then((response) => {
 setValues(response.data.clientes.clientes);
 //console.log("valor", valor);
 })
 .catch((erro )=> console.log(erro))
 },[])

  return (
    
    <div id="clientes">
      
    <Container>
      <Header/>

 
       {values.map((contato) => {
    return  ( <div>
           {/* <p>Nome: {contato.NOME}</p>
           <p>Email: {contato.EMAIL}</p>
           <p>Telefone: {contato.TELEFONE}</p> */}
          <Pessoas 
          key={contato.ID} 
          nome={contato.NOME}  
          email={contato.EMAIL} 
          telefone={contato.TELEFONE}
          id={contato.ID}/>
          
        </div>)
       })}
      
    

    <Footer/>

    </Container>

    </div>
  );
}

export default Cliente