import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";
import config from "../../../config";
import { ExtraLink, Title } from "../../../components/Carousel/styles";
import "./style.css";
import Loading from "../../../components/Loading";
import categoriasRepository from "../../../repositories/categorias";
import { render } from "react-dom";
import FlashMessage from "react-flash-message";

function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    url: "",
    cor: "",
  };

  const { handleChange, valores/*, limparForm*/ } = useForm(valoresIniciais);
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

          categoriasRepository
            .create({
              titulo: valores.titulo,
              cor: valores.cor,
              link_extra: {
                text: valores.descricao,
                url: valores.url,
              },
            })
            .then(() => {
              history.push("/");
              render(
                <FlashMessage duration={5000} persistOnHover={true}>
                  <p>Categoria cadastrada com sucesso!</p>
                </FlashMessage>,
                document.getElementById("mensagemLog")
              );
            });

          //limparForm();
        }}
      >
        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={valores.titulo}
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
          label="Url"
          name="url"
          value={valores.url}
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
      {categorias.length === 0 && <Loading>Carregando...</Loading>}
      <h3 style={{ display: "flex", justifyContent: "center" }}>Categorias</h3>
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`%{categoria}${indice}`}>
              <Title
                style={{
                  fontSize: "20px",
                  backgroundColor: categoria.cor || "red",
                }}
              >
                {categoria.titulo}
              </Title>
              {categoria.link_extra && (
                <ExtraLink href={categoria.link_extra.url} target="_blank">
                  {categoria.link_extra.text}
                </ExtraLink>
              )}
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
