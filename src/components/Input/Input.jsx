import React from 'react'
import "../../App.css";
const Input = ({nome, placeholder, onChange, type, name}) => {
  return (
    <div>
        <label htmlFor="">{nome} </label>
        <input type={type} onChange={onChange} name={name} placeholder={placeholder} />
        
    </div>
  )
}

export default Input
