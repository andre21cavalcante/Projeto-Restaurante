import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/header'
import introducao from '../../assets/introdução-sobre.svg'
import comida from '../../assets/imagem-sobre.svg'
import missao from '../../assets/imagem-missão.svg'
import visao from '../../assets/imagem-visao.svg'
import valores from '../../assets/imagem-valores.svg'
import footer from '../../assets/Icone-footer-shark.svg'
import instagram from '../../assets/icon-insta.svg'
import facebook from '../../assets/icon-facebook.svg'
import Footer from '../../components/Footer/footer'


const Introducao = styled.section` 
background-image:url(${introducao});
background-size:cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height:550px;

.texto-introducao{
color:#FFF;
font-size: 2em;
display:block;
padding-top:250px;
margin-left:450px;
}
`;

const SessaoSobre = styled.section`
background:#162728;
color:white;
display:flex;
justify-content: center;
align-items: center;
border: .5px solid #fff;

.texto-sobre{
    width: 420px;
    padding: 15px;
}
.texto-sobre h3{
    font-size: 30px;
    line-height:45px;
    text-align:center;
    margin-bottom:20px;
}
.texto-sobre p{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}
.imagem-comida{
    background:#fff;
    border-radius:20px;
    margin: 20px 20px;
}
.food{
    height:500px;
    border-radius: 30px;
    padding: 4px;
}
`;

const SessaoMissao = styled.section`
background:#162728;
color:white;
display:flex;
justify-content: center;
align-items: center;
border: .5px solid #fff;

.texto-missao{
    width: 420px;
    padding: 15px;
}

.texto-missao h3{
    font-size: 30px;
    line-height:45px;
    text-align:center;
    margin-bottom:20px;
}
.texto-missao p{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}
.imagem-comida-missao{
    background:#fff;
    border-radius:20px;
    margin: 20px 20px;
}
.food-missao{
    height:500px;
    border-radius: 30px;
    padding: 4px;
}
`
;

const SessaoVisao = styled.section`
background:#162728;
color:white;
display:flex;
justify-content: center;
align-items: center;
border: .5px solid #fff;

.texto-visao{
    width: 420px;
    padding: 15px;
}
.texto-visao h3{
    font-size: 30px;
    line-height:45px;
    text-align:center;
    margin-bottom:20px;
}
.texto-visao p{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}
.imagem-comida-visao{
    background:#fff;
    border-radius:20px;
    margin: 20px 20px;
}
.food-visao{
    height:500px;
    border-radius: 30px;
    padding: 4px;
}
`;

const SessaoValores = styled.section`
background:#162728;
color:white;
display:flex;
justify-content: center;
align-items: center;
border: .5px solid #fff;

.texto-valores{
    width: 420px;
    padding: 15px;
}

.texto-valores h3{
    font-size: 30px;
    line-height:45px;
    text-align:center;
    margin-bottom:20px;
}
.texto-valores p{
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}
.imagem-comida-valores{
    background:#fff;
    border-radius:20px;
    margin: 20px 20px;
}
.food-valores{
    height:500px;
    border-radius: 30px;
    padding: 4px;
}
`
;
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

`;





const Sobre = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <Introducao>
            <div className='texto-introducao'>
                <h1>SB RESTAURANTE</h1>
            </div>
        </Introducao>
        <div>
            <SessaoSobre>
                    <div className='texto-sobre'>
                        <h3>SOBRE</h3>
                        <p>A nossa experiência no mercado ascende a 8 anos e a nossa cozinha e sala de refeições estão equipadas com todos os dispositivos, mobiliário e acessórios necessários para satisfazer a todos os requisitos gastronômicos dos nossos clientes. O profissionalismo do atendimento é uma preocupação nossa, por isso nos orgulhamos em ter funcionários experientes na área, que estão sempre atentos às necessidades dos nossos clientes.</p>
                    </div>
                    <div className='imagem-comida'>
                        <img src={comida} alt="comida" className='food'/>
                    </div>
            </SessaoSobre>
        </div>
        <div>
            <SessaoMissao>
                <div className='imagem-comida-missao'>
                    <img src={missao} alt="missão" className='food-missao' />
                </div>
                <div className='texto-missao'>
                    <h3>MISSÃO</h3>
                    <p>Oferecer produtos e serviço na área gastronômica, valorizando o aspecto nutritivo, a qualidade, o sabor e a
                        correta técnica de elaboração de cada alimento, para contribuir para a saúde dos nosso clientes, ofertando um
                        sistema de atendimento diferenciado.</p>
                </div>
            </SessaoMissao>
        </div>

        <div>
            <SessaoVisao>
                    <div className='texto-visao'>
                        <h3>VISÃO</h3>
                        <p>Ser uma empresa reconhecida como referência dentro da gastronomia braslileira buscando qualidade,
                            agilidade no atendimento e manter um bom relacionamento com os clientes, colaboradores e fornecedores.
                            Sempre valorizando essa troca de experiência na convivência entre o restaurante e nossos clientes, em um espaço
                            aconchegante em um ambiente famíliar.</p>
                    </div>
                    <div className='imagem-comida-visao'>
                        <img src={visao} alt="comida-visao" className='food-visao'/>
                    </div>
            </SessaoVisao>
        </div>

        <div>
            <SessaoValores>
                <div className='imagem-comida-valores'>
                    <img src={valores} alt="valores" className='food-valores' />
                </div>
                <div className='texto-valores'>
                    <h3>VALORES</h3>
                    <p>Nutrição, para promover a saúde e a boa qualidade de vida.
                        Comida saudável, para contribuir com a mudança do estilo de vida.
                        Sabores, para proporcionar o prazer de comer bem.
                        Variedade, para oferecer opções com qualidade para todos os gostos.
                        Atendimento com excelência, para apresentar soluções gastronômicas.
                        Serviço rápido e prático, para adequar ao estilo de vida de quem não tem tempo a perder.
                        Atendimento diferenciado, buscando sempre a melhor opção para o bem estar do nosso cliente.
                       </p>
                </div>
            </SessaoValores>
        </div>
        <Div id='sobre'>
            <div className='sobre'>
                <div>
                    <p>Horario de Funcionamento:</p>
                    <span>Segunda a Quinta: 12h a 23h30</span><br />
                    <span>Sexta e Sábado: 12h a 00h30</span><br />
                    <span>Domingo: 12h a 23h</span>
            </div>

            <div className='endereco'>
                <span>Avenida Atlântica, 4240 – Copacabana</span>
                <a href="/"><img src={footer} alt="logo" className='logo' /></a>
            </div>

            <div className='reserva'>
                <div>
                    <span>Reservas:</span><br />
                    <span>+55 (21) 99422-1586</span>
                </div>
                <a href="/"><img src={facebook} alt="icon-facebook" className='facebook' /></a>
                <a href="/"> <img src={instagram} alt="icon-instagram" className='instagram' /></a>
            </div>
            </div>
        </Div>

        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default Sobre