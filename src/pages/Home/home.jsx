import React from 'react'
import'../../App.css'
import styled from 'styled-components'
import cheff from '../../assets/chefe-de-cozinha.svg'
import cozinhado from'../../assets/cozinhando.svg'
import cardapio  from '../../assets/confira-nosso-cardápio.svg'
import logo from '../../assets/logo-header.svg'
import logo2 from '../../assets/Icone-footer-shark.svg'
import face from '../../assets/icon-facebook.svg'
import insta from '../../assets/icon-insta.svg'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/footer'


const  Secao = styled.section`
 background-color: #162728;
 color: white;
 display:flex;
 justify-content: center;
 align-items: center;


 .div-image{
    background:#fff;
    border-radius: 20px;
    margin: 5px 20px;
 }

.image{
    height: 500px;
    padding: 7px 7px;
    border-radius: 30px;
}

.div-p{
    width:420px;
    background:rgba(213,192,107, 1);
    color: black;
    padding: 15px;
    border-radius: 2%;
    font-family: 'Poppins', sans-serif;
}

.div-p h3{
    padding-left:35px;
}

.div-p img{
    width:60px;
    position: relative;
    bottom: 40px;
    
}

.div-p div p{
   font-size:20px;
   line-height: 30px;
   font-style: normal;
   font-weight: 400;
   padding-bottom:15px;
   margin-bottom: 15px;
}

.div-p h3 {
    font-size: 30px;
    text-align: center;
}

`
const Chef = styled.section`
 background-image: url(${cheff});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
 width:auto;
 height: 750px;

 .nome-chef{
    display: block;
    left: 10%;
    margin-left: 80px;
    padding: 25px 23px;
 }

 .nome-chef span {
    text-transform: uppercase;
    border-bottom: 7px solid #d5c06b;
    color: #d5c06b;
    font-weight: 700;
    font-size: 2em;
 }

 .nome-chef h3 {
    text-transform: uppercase;
    margin: 10px 0 0;
    color: #ffffff;
    font-size: 4em;
    font-weight: 300;
 }

 .descricao{
    top: initial;
    bottom: 80px;
    right: 50%;
    width: 320px;
    margin-right: -590px;
    position: absolute;
 }


 .descricao p{
    background:#000000;
    padding:30px;
    color: #ffffff;
    font-size: 0.9em;
    line-height: 24px;
    font-weight: 300;
 }

 .descricao a{
    margin: auto;
    width: 80%;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
    display: block;
    padding: 10px 15px;
    font-size: 16px;
    border: 3px solid #ffffff;
    -webkit-transition: border ease 0.3s;
    transition: border ease 0.3s;
    outline: none;
    cursor: pointer;
    font-weight: 400;
    background: gray;
    margin-top: 7px;
}
 }


 .descricao a:hover{
    color: #d5c06b;
    font-weight: 700;
 }

 .descricao p:hover{
    color: #d5c06b;
 }
`





const Container = styled.div`


section{
background-image: url(${cardapio});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width:100%;
height: 550px;
opacity: 1.0;
}


section div{
    text-transform: uppercase;
    color:#fff;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 350px;

}


section div h1{
    width: 867px;
    height: 90px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
 }

 section div h1:hover{
   //color: #D1BF74;
   //border: 3px solid #D1BF74;
   box-shadow: 1px 1px 4px 6px #D1BF74;

 }

 section div a{
    width: 169px;
    height: 55px;
    background: #162728;
    border: 1px solid #000000;
    color:#fff;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    text-decoration: none;
    padding:14px;
    border-radius: 8px;
   margin-top:15px;
 }

 section div a:hover{
    color: #D1BF74;
 }


`

const Div = styled.div`
background-color: #162728;
display:flex;
align-items:center;
justify-content: center;
padding-top: 45px;


.sobre{
    background: #D1BF74;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:20px 10px;
    width: 90%;
    height: 444px;
    font-family: 'Roboto', sans-serif;
    font-weight:700;
    font-size: 18px;
    line-height: 23px;
}

.sobre .endereco {
display:flex;
flex-direction: column;

}

.sobre .endereco span{
    padding-top: 80px;
}

 .sobre .endereco a{
     position: relative;
     top:110px;
     left: 50px;
 }

 .sobre .reserva div{
   padding-top: 50px;
  
 }



  .sobre .reserva a {
    position: relative;
    top:50px;
    left: 10px;
    padding-left: 10px;
    }
    
    .sobre .reserva img:hover{
        background: #fff;
    }
`


function Home(){
  return (

  <div id='home'>

      <Header/>

<div>
    <Chef>

        <div className='nome-chef'>
            <span>CHEF</span>
            <h3>JEAN <br />
            <b>PIERRE</b>
            </h3>
        </div>

        <div className='descricao'>
            <p>O Chef Jean Pierre viajou por diversos países e criou o SB Restaurante para você. Tudo isso para realizar um sonho: abrir o melhor restaurante do mundo.</p>

            <a href="/">Conheça nossa história</a>
        </div>
       
    </Chef>
</div>

      <div>
          <Secao>

              <div className='div-image'>
                    <img className='image' src={cozinhado} alt="mulher-cozinhando" />
              </div>

              <div className='div-p'>
                  <h3>SB RESTAURANTE</h3>
                  <img src={logo} alt="logo" />
                  <div>
                      <p>Reinventando a culinária Japonesa e Contemporânea em um espaço aconchegante na beira da Praia de Copacabana, umas das mais famosas do mundo.</p>
                  </div>
              </div>

          </Secao>
      </div>


<Container id='cardápio'>

<section>


<div>
<h1>Confira nosso cardápio</h1>
      <a href="/cardapio">cardápio</a>
</div>

</section>
</Container>


<Div id="sobre">

    <div className='sobre'>

        <div>
        <p>Horario de Funcionamento:</p>
             <span>Segunda a Quinta: 12h a 23h30</span><br />
             <span>Sexta e Sábado: 12h a 00h30</span><br />
             <span>Domingo: 12h a 23h</span>
        </div>

        <div className='endereco'>
            <span>Avenida Atlântica, 4240 – Copacabana</span>
            <a href="/"><img src={logo2} alt="logo" className='logo' /></a>
        </div>




        <div className='reserva'>
            <div>
            <span>Reservas:</span><br />
            <span>+55 (21) 99422-1586</span>
            </div>
            <a href="/"><img src={face} alt="icon-facebook" className='facebook' /></a>
            <a href="/"> <img src={insta} alt="icon-instagram" className='instagram' /></a>
        </div>

          

    </div>





</Div>

<div>

<Footer/>

</div>



</div>

  )
}

export default Home;