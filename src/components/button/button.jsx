import React from 'react'

const Button = ({click,nome}) => {
  return (
    <div>
        <button onClick={click}>{nome}</button>
    </div>
  )
}

export default Button;
