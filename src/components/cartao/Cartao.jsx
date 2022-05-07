import React from "react";
import { Link } from "react-router-dom";
import {Container} from "./CartaoStyled.jsx"
export default function Cartao({ id, name, img }) {
  return (
    <Container>
      <Link to={"/visualizar/" + id}>
          <img src={img} alt="" />
          <p>{name}</p>
      </Link>
    </Container>
  );
}