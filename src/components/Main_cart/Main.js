import React from 'react';
import Product from '../Product_cart/Product.js';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="cart-background">
      <h2>Cardápio</h2>
      <div className="cart">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
