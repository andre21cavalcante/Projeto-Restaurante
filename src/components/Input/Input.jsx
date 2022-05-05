import React from 'react'
import "../../App.css";
const Input = ({nome, placeholder, onchange, type}) => {
  return (
    <div>
        <label htmlFor="">{nome} </label>
        <input type={type} onchange={onchange} placeholder={placeholder} />
        
    </div>
  )
}

export default Input
