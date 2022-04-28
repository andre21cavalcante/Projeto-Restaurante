import React from "react";
import styles from "./header.module.css"

import { Link } from "react-router-dom";
import logo2 from "../../img/rest.jpg"

function Header() {
  return (
    <div>
      <header className={styles.headerEstilo}>
        
      <img src={logo2} alt="logo2" className={styles.logo2}  />
       
        <Link to="/">Home</Link>
        <Link to="/cardapio">Cardapio</Link>
        <Link to="/carrinho">Carrinho</Link>
      
        
      </header>
    </div>
  );
}

export default Header;
  
 