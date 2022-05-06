import React from "react";
import { Link } from "react-router-dom";
import {Container} from "./CartaoStyled.jsx"
export default function Cartao({ id, name, img }) {
  return (
    // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container
    <Container>
      <Link to={"/visualizar/" + id}>
          <img src={img} alt="" />
          <p>{name}</p>

          {/* usando Link */}
      </Link>
      {/* <Button nome="Deletar" click={handleDelete} /> */}
    </Container>
  );
}