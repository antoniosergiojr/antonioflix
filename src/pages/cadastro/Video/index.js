import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import Button from "../../../components/Button";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, valores } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <Link to="/">Home</Link> {" >> "}
      Vídeo
      <h1>Cadastro de Vídeo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === valores.categoria;
          });

          videosRepository
            .create({
              titulo: valores.titulo,
              url: valores.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              alert("Vídeo cadastrado com sucesso.");
              history.push("/");
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Url"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        <span style={{ display: "flex", marginBottom: "20px" }}>
          <Button type="submit">Cadastrar</Button>
          <Button
            as={Link}
            to="/cadastro/categoria"
            style={{ marginLeft: "auto" }}
          >
            Nova Categoria
          </Button>
        </span>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
