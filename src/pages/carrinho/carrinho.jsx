import React from "react";
import { useState } from "react";
import data from "./data.js"
import Main from "../../components/Main_cart/Main.js"
import Basket from "../../components/Basket_cart/Basket.js"
import "../carrinho/carrinho.css"
import styles from "styled-components"

const Posicao = styles.div`
    display: flex;
    justify-content: space-between;
`

function Carrinho() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
      
    <div className="App">
      <Posicao>
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </Posicao>
    </div>
  );
}

export default Carrinho;
