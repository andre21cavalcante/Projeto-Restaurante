import React from "react";
import styled from "styled-components";
import "../App.css";
import Button from "../components/Button/button";
import Input from "../components/Input/Input";
import Logo from "../assets/logo.jpg";

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
    border: none;
    border-radius: 2px;
    height: 30px;
    width: 260px;
    color: white;
    padding-left: 10px;
  }

  input{
    input:active
      border: none
     
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
  return (
    <>
      <Foto>
        <div className="pag">
          <Form>
            <img src={Logo} alt="" />
            <h2>
              Seja Bem-vindo <br />
              ao Shark-Bistro
              <br />
            </h2>
            <h3>Preencha os campos abaixo e cadastre-se</h3>
            <h4>
              Preencha os campos para receber as informações sobre programação e
              disponibilidade.
            </h4>
            <Input nome="nome " placeholder="Nome completo" />
            <Input nome="E-mail " placeholder="Endereço de e-mail" />
            <Input nome="Telefone " placeholder="+55 (xx) xxxxx-xxxx" />
            <Button nome="Login" />
            <Button
              nome="Cadastrar"
              funcao={() => alert("E-mail cadastrado com sucesso!")}
            />
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
