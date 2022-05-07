import React from 'react'
import '../../App.css'
import logo from '../../assets/logo-header.svg'
import styled from 'styled-components'

const Head = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
background: #162728;
padding: 2px 22px;
font-size: 1.2rem;
flex-wrap:wrap;
height: 120px;

img{
    margin-top: 5px;
    width: 100px;
    height: 100px;
}
nav ul{
    display: flex;
}
nav ul li{
    list-style:none;
}
nav li a {
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    align-itens: center;
    border-bottom: 5px solid #162728;
    font-weight: 600;
}
a{
    color:white;
    text-decoration: none;
}
nav ul li a:hover{
    border-bottom: 3px solid #d5c06b;
    color: #d5c06b;
    
}
`



const Header = () => {
  return (
    <Head>
        <a href="/"> <img src={logo} alt="logo"/></a>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="/">Cardápio</a></li>
            </ul>
        </nav>
    </Head> 
  )
}

export default Header