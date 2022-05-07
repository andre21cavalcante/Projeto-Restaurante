import React from 'react'
import{Link} from 'react-router-dom'
import '../../App.css';
import styled from 'styled-components'
import logo from '../../assets/logo-header.svg'


const Head = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 2px 22px;
 font-size: 1.2rem;
 flex-wrap:wrap;
 background-color: #162728;
 height: 120px;
 
img{
  margin-top:5px;
  width: 100px;
  height: 100px;

}

 nav ul{
   display:flex;
 }

 nav ul li{
  list-style:none;
  margin-left:10px;
}

nav li a{
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  align-items: center;
  border-bottom: 5px solid #162728;
  font-weight: 600; 
}

 a{
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  border-bottom: 3px solid #d5c06b;
  color:#d5c06b;

}


`

function Header(){
  return (
    
<Head>
       <a href="/"><img src={logo} alt="logo" /></a> 
        <nav>
          <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#cardápio">Cardápio</a></li>
            <li><Link to="/clientes">Clientes</Link></li>
          </ul>
        </nav>
      </Head>
  )
}

export default Header;