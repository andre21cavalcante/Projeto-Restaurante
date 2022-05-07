import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import Button from "../components/button/button";
import Input from "../components/Input/input";
import Logo from "../assets/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Foto = styled.main`
  .pag {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 130px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    padding: 1px;
    border-radius: 23px;
  }

  h2 {
    color: white;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 20px;
  }

  h3 {
    color: #d5c06b;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 10px;
  }

  h4 {
    color: #d5c06b;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 12px;
    margin-bottom: 29px;
  }

  label {
    display: flex;
    text-align: center;
    color: #d5c06b;
    text-transform: uppercase;
    margin-bottom: 7px;
  }

  button {
    margin-bottom: 10px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
    background-color: #d5c06b;
    cursor: pointer;
    border: none;
    width: 260px;
    height: 25px;
    color: #0c0c0c;
  }

  button:hover {
    transition: 0.9s;
    background-color: #fcfcd7;
  }

  input {
    margin-bottom: 10px;
    background-color: black;
    border-style: none;
    border-radius: 2px;
    height: 30px;
    width: 260px;
    color: white;
    padding-left: 10px;
  }

  input:focus {
    border-color: #d5c06b;
  }
`;

const Footer = styled.footer`
  p {
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const Login = () => {
  const notify = () => toast("Cliente cadastrado com sucesso!");
    const [valor, setValor] = useState({});
    const navigate = useNavigate()
  
    function handleName(e) {
      setValor({...valor, [e.target.name]:e.target.value});
    }

    const api =()=>{
      axios.post("https://hidden-brushlands-01887.herokuapp.com/clientes", valor)
  };

  function submit(e){
  e.preventDefault()
  api();
  notify() 
  navigate("/home")
  }

  return (
    <>
      <Foto>
        <div className="pag">
          <Form onSubmit={submit}>
            <img src={Logo} alt="" />
            <h2>
              Seja Bem-vindo <br />
              ao SB
              <br />
            </h2>
            <h3>Preencha os campos abaixo e cadastre-se</h3>
            <h4>
              Preencha os campos para receber as informações sobre programação e
              disponibilidade.
            </h4>
            <Input nome="nome " placeholder="Nome completo" onChange = {handleName} name="nome" />
            <Input nome="E-mail " placeholder="Endereço de e-mail" onChange = {handleName} name="email" />
            <Input nome="Telefone " placeholder="xxxx-xxxx" onChange = {handleName} name="telefone" />
            <Button nome="Login" />
            <Button nome="Cadastrar"  />
            <ToastContainer autoClose={5000} position="top-center" />
          </Form>
        </div>
      </Foto>
      <Footer>
        <p>@2022 SharkTeam | Projeto Desenvolvido para fins educacionais </p>
      </Footer>
    </>
  );
};

export default Login;
