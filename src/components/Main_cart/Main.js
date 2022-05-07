import React from 'react';
import Product from '../Product_cart/Product.js';
import styled from "styled-components";

const Cart = styled.main`
background-color: #e0e0e0;
padding: 1rem;
margin: 0.5rem;
border-radius: 0.5rem;

.cart{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
`

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <Cart>
      <h2>Cardápio</h2>
      <div className="cart">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </Cart>
  );
}
