import React from 'react';
import styled from "styled-components";

const Bloco = styled.aside`
    background-color: #e0e0e0;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    width: 20vw;    
`


const Conteiner = styled.div`
.remove{
  background-color: #f04040;
  width: 1.5rem;
}
.add{
  background-color: #40c0f0;
  width: 1.5rem;
}

.btnFinalizar{
background-color: orange;
font-weight: bold;
color: white;
padding: 1rem;
margin: 0.5rem;
border-radius: 0.5rem;
}

`

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <Bloco>
      <h2>Meu Carrinho</h2>
      <Conteiner>
        {cartItems.length === 0 && <div>Carrinho Vazio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x R${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Preço dos itens</div>
              <div className="col-1 text-right">R${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Frete</div>
              <div className="col-1 text-right">
                R${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Preço total</strong>
              </div>
              <div className="col-1 text-right">
                <strong>R${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="btnFinalizar" onClick={() => alert('Compra efetuada! Em seu whatsapp informaremos sobre o andamento do seu pedido!')}>
                Finalizar
              </button>
            </div>
          </>
        )}
      </Conteiner>
    </Bloco>
  );
}
