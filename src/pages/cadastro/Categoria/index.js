import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import config from "../../../config";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const { handleChange, valores, limparForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const urlCategorias = `${config.urlDefault}/categorias`;
    fetch(urlCategorias).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <Link to="/">Home</Link> {" >> "}
      <Link to="/cadastro/video">Vídeo</Link> {" >> "}
      Categoria
      <h1>Cadastro de Categoria: {valores.nome}</h1>
      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, valores]);

          limparForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>
      {categorias.length === 0 && <div>Carregando...</div>}
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`%{categoria}${indice}`}>
              {categoria.nome}-{categoria.descricao}-{categoria.cor}
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
