import React from "react";
import styles from "./footer.module.css"
import styled from "styled-components";
import face from "../../img/icon-facebook.svg"
import insta from "../../img/icon-insta.svg"


const Rodape = styled.footer`
background-color: #162728;
display: flex;
justify-content: center;
align-items: center;
color: white;
padding-top: 50px;
padding-bottom: 30px;
font-weight: 700;
font-size: 20px;
p:hover{
    color: #d5c06b;
    font-weight:600;
}`

const Secao = styled.section`
    background-color: #d1bf74;
    display:flex;
    align-items:center;
    justify-content: center;
    font-weight: bold;
    padding-top: 50px;
    margin-left: 40px;
    margin-right: 40px;
`


const Footer = () => {
  return (
    <div>
        <Secao className='sobre'>
            <div>
            <p>Horario de Funcionamento:</p>
                <span>Segunda a Quinta: 12h a 23h30</span><br />
                <span>Sexta e Sábado: 12h a 00h30</span><br />
                <span>Domingo: 12h a 23h</span>
            </div>

            <div className='endereco'>
                <span>Avenida Atlântica, 4240 – Copacabana</span>
              
            </div>
            <div className='reserva'>
                <div>
                <span>Reservas:</span><br />
                <span>+55 (21) 99422-1586</span>
                </div>
                <a href="/"><img src={face} alt="icon-facebook" className={styles.face} /></a>
                <a href="/"> <img src={insta} alt="icon-instagram" className={styles.headerEstilo} /></a>
            </div>
        </Secao>
    <Rodape>    
        <p>@2022 SharkTeam | Projeto Desenvolvido para fins educacionais.</p>
    </Rodape>
    </div>
  )
}

export default Footer;