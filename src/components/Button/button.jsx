import React from 'react'
//import styled from 'styled-components';


const Button = ({click,nome}) => {
  return (
    <div>

        <button onClick={click}>{nome}</button>

    </div>
  )
}

export default Button