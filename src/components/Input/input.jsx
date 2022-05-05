import React from 'react'
import styled from 'styled-components'

const Div =styled.div`

label{
  font-size:20px;
}
input{
  color: black;
  width: 100%;
  height: 25px;
  padding:20px 5px;

  ::placeholder {
    color: black;
    font-weight: 540;
    font-size: 20px;
  } 
}

`

const Input = ({nome,onChange,name,type,value, placeholder}) => {
  return (
    <Div>

        <label htmlFor="nome">{nome}</label>
        <input type={type} name={name} id="nome" value={value} onChange={onChange} placeholder={placeholder}/>
    </Div>
  )
}

export default Input