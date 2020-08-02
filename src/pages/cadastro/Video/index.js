import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";

function CadastroVideo() {
  return (
    <PageDefault>
      <Link to="/">Home</Link> {" >> "}
      Vídeo
      <h1>Cadastro de Vídeo</h1>
      <Button>Cadastrar</Button>
      <Button as={Link} to="/cadastro/categoria" style={{marginLeft: "20px"}}>
        Nova Categoria
      </Button>
    </PageDefault>
  );
}

export default CadastroVideo;
