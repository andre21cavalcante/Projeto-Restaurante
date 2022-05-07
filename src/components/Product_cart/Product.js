import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    width: 10vw;
    box-shadow: 5px 5px 5px black;
    align-items: center;
    margin-bottom: 2%;
    padding-bottom: 1%;

    .small {
      height: 10rem;
      width: 100%;
      
    }

.btn{
    font-size: 0.8rem;
    padding: 0.5rem;
    margin: 0.1rem;
    border-radius: 0.5rem;
    border: 5px 5px 5px 5px solid rgba(0, 0, 0, 0.246);
    background-color: #d8802e;
    width: auto;
    cursor: pointer;
    color: white;
}
`

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <Card>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>R$ {product.price},00</div>
      <div>
        <button className="btn" onClick={() => onAdd(product)}>Comprar</button>
      </div>
    </Card>
  );
}
