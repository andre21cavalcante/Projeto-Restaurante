import React from 'react'
import styled from 'styled-components'


const Rodape = styled.div`
background-color: #162728;
display: flex;
justify-content: center;
align-items: center;
color: white;
padding-top: 50px;
padding-bottom: 30px;
font-weight: 700;
font-size: 20px;
p:hover{
color: #d5c06b;
font-weight:600;       
} 
` 


function Footer() {
  return (
        <Rodape>
        <p>@2022 SharkTeam | Projeto Desenvolvido para fins educacionais.</p>
        </Rodape>   
        )
}

export default Footer