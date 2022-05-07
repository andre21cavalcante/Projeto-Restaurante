import React from "react";
import {Container, Image, } from "./cardapioStyled.jsx"
import styles from "./cardapio.module.css"
import Cord from "../../img/cordeiro.jpeg"
import frango from "../../img/hamburguerfrango.jpeg"
import macarrao from "../../img/marcarrao.jpeg"
import salmao from "../../img/Salmao.jpeg"
import mini from "../../img/miniBurguer.jpeg"
import Morango from "../../img/Morango.jpeg"
import Oreo from "../../img/SobremesaOreo.jpeg"
import taco from "../../img/taco.jpeg"
import Camarao from "../../img/camarao.jpeg"
import Espaguete from "../../img/espaguete.jpeg"
import Panqueca from "../../img/pancake.jpeg"
import Donuts from "../../img/Donuts.jpeg"
import Button from "../../components/button/button.jsx"



function Cardapio(){
    return(

    <div>
        <h1 className={styles.Titulo} >Cardápio</h1>
        <Container>
            <div>  
                <Image src={Cord} />
                <p className={styles.NomeComida}>Cordeiro</p>
                <p className={styles.NomeComida}>Preço:R$ 100,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>  
                <Image src={frango}/>
                <p className={styles.NomeComida}>NotChiken</p>
                <p className={styles.NomeComida}>Preço:R$ 20,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={Espaguete}/>
                <p className={styles.NomeComida}>Espaguete</p>
                <p className={styles.NomeComida}>Preço:R$ 30,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={macarrao}/>
                <p className={styles.NomeComida}>Macarrão Vegetariano</p>.
                <p className={styles.NomeComida}>Preço:R$ 25,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={taco}/>
                <p className={styles.NomeComida}>Taco Vegetariano</p>
                <p className={styles.NomeComida}>Preço:R$ 15,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={salmao}/>
                <p className={styles.NomeComida}>Moqueca de Salmón</p>
                <p className={styles.NomeComida}>Preço:R$ 55,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={Camarao}/>
                <p className={styles.NomeComida}>Camarão com Torrada</p>
                <p className={styles.NomeComida}>Preço:R$ 10,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={mini}/>
                <p className={styles.NomeComida}>MiniBurguer</p>
                <p className={styles.NomeComida}>Preço:R$ 8,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={Morango}/>
                <p className={styles.NomeComida}>Iogurte de Morango</p>
                <p className={styles.NomeComida}>Preço:R$ 5,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={Oreo}/>
                <p className={styles.NomeComida}>Copo da Felicidade de Oreo</p>
                <p className={styles.NomeComida}>Preço:R$ 15,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
            <div>
                <Image src={Panqueca}/>
                <p className={styles.NomeComida}>Panqueca Doce</p>
                <p className={styles.NomeComida}>Preço:R$ 6,00 <Button nome="comprar" /></p>
            </div>
            <div>
                <Image src={Donuts}/>
                <p className={styles.NomeComida}>Donuts</p>
                <p className={styles.NomeComida}>Preço:R$ 5,00 <a href= "/carrinho"><Button nome="comprar"/></a></p>
            </div>
        </Container>
    </div>
    )
}

export default Cardapio;